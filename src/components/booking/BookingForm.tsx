import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { ShieldCheck } from 'lucide-react';
import { bookingSchema, type BookingSchemaType } from '@/validation/bookingSchema';
import { OwnerFields } from './OwnerFields';
import { PetFields } from './PetFields';
import { ServiceSelectField } from './ServiceSelectField';
import { HabeasDataModal } from './HabeasDataModal';
import { Button } from '@components/common/Button';
import { buildServiceOrder } from '@/services/orderService';
import { submitOrder } from '@/api/mockApi';
import { sendOrderEmail } from '@/emails/sendOrderEmail';
import { generateOrderPdf } from '@/pdf/generateOrderPdf';
import { siteConfig } from '@/config/siteConfig';
import { useToast } from '@/hooks/useToast';
import type { ServiceOrder } from '@/types/order.types';
import type { ServiceOptionId } from '@/types/service.types';

interface BookingFormProps {
  onOrderCreated: (order: ServiceOrder) => void;
  preselectedServiceId?: ServiceOptionId;
}

const DEFAULT_VALUES: BookingSchemaType = {
  owner: { fullName: '', documentId: '', phone: '', email: '', address: '', city: '' },
  pet: {
    name: '', species: 'perro' as const, breed: '', sex: 'macho' as const, age: '', weight: '', color: '',
    isSterilized: false, hasVaccines: false, observations: '',
  },
  serviceId: 'consulta_medica',
  dataConsent: false,
};

/**
 * Formulario completo de solicitud de servicio. Al enviarse:
 *  1) valida todos los campos con Zod (incluido el consentimiento obligatorio),
 *  2) construye la Orden de Servicio (orderService),
 *  3) la "persiste" (mockApi) y genera el PDF,
 *  4) "envía" el PDF por correo (mock documentado) y deja lista la notificación
 *     por WhatsApp,
 *  5) delega a `onOrderCreated` para mostrar el resumen en el modal.
 */
export const BookingForm = ({ onOrderCreated, preselectedServiceId }: BookingFormProps) => {
  const [isHabeasModalOpen, setHabeasModalOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { showToast } = useToast();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<BookingSchemaType>({
    resolver: zodResolver(bookingSchema),
    defaultValues: { ...DEFAULT_VALUES, serviceId: preselectedServiceId ?? DEFAULT_VALUES.serviceId },
  });

  const onSubmit = async (values: BookingSchemaType) => {
    setIsSubmitting(true);
    try {
      const order = buildServiceOrder(values);
      await submitOrder(order);

      const pdfDoc = await generateOrderPdf(order);
      const pdfBase64 = pdfDoc.output('datauristring');
      await sendOrderEmail({ order, toEmail: siteConfig.notificationEmail, pdfBase64 });

      showToast(`Orden ${order.orderNumber} generada correctamente`, 'success');
      onOrderCreated(order);
      reset(DEFAULT_VALUES);
    } catch (error) {
      console.error(error);
      showToast('Ocurrió un error al generar tu orden. Intenta de nuevo.', 'error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-8 card-surface p-6 md:p-10">
        <OwnerFields register={register} errors={errors} />
        <PetFields register={register} errors={errors} />
        <ServiceSelectField register={register} errors={errors} />

        <div className="rounded-lg border border-petrol/15 dark:border-cream/15 p-4">
          <label className="flex items-start gap-3 text-sm cursor-pointer">
            <input type="checkbox" className="mt-0.5 accent-emerald" {...register('dataConsent')} />
            <span>
              Acepto el tratamiento de datos personales conforme a la Ley 1581 de 2012.{' '}
              <button
                type="button"
                onClick={() => setHabeasModalOpen(true)}
                className="inline-flex items-center gap-1 text-emerald underline underline-offset-2"
              >
                <ShieldCheck size={13} /> Ver detalle
              </button>
            </span>
          </label>
          {errors.dataConsent && <p className="field-error">{errors.dataConsent.message}</p>}
        </div>

        <Button type="submit" disabled={isSubmitting} className="w-full sm:w-auto">
          {isSubmitting ? 'Generando orden...' : 'Solicitar Cotización'}
        </Button>
      </form>

      <HabeasDataModal isOpen={isHabeasModalOpen} onClose={() => setHabeasModalOpen(false)} />
    </>
  );
};
