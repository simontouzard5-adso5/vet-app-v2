import type { UseFormRegister, FieldErrors } from 'react-hook-form';
import type { BookingSchemaType } from '@/validation/bookingSchema';
import { SERVICES } from '@/constants/services.constants';
import { formatCurrency } from '@/utils/formatCurrency';

interface ServiceSelectFieldProps {
  register: UseFormRegister<BookingSchemaType>;
  errors: FieldErrors<BookingSchemaType>;
}

/** Selector del servicio a solicitar, mostrando el precio de referencia. */
export const ServiceSelectField = ({ register, errors }: ServiceSelectFieldProps) => (
  <fieldset>
    <legend className="text-sm font-bold text-emerald mb-2">Servicio</legend>
    <label className="field-label" htmlFor="serviceId">Selecciona el servicio que necesitas</label>
    <select id="serviceId" className="input-base" {...register('serviceId')} defaultValue="">
      <option value="" disabled>Selecciona un servicio...</option>
      {SERVICES.map((service) => (
        <option key={service.id} value={service.id}>
          {service.name} — {formatCurrency(service.price)} + IVA
        </option>
      ))}
    </select>
    {errors.serviceId && <p className="field-error">{errors.serviceId.message}</p>}
  </fieldset>
);
