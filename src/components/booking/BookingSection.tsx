import { useState } from 'react';
import { BookingForm } from './BookingForm';
import { OrderSummaryModal } from './OrderSummaryModal';
import type { ServiceOrder } from '@/types/order.types';
import type { ServiceOptionId } from '@/types/service.types';

interface BookingSectionProps {
  preselectedServiceId?: ServiceOptionId;
}

/** Sección "Registro": envuelve el formulario y el modal de resultado. */
export const BookingSection = ({ preselectedServiceId }: BookingSectionProps) => {
  const [order, setOrder] = useState<ServiceOrder | null>(null);

  return (
    <section id="reserva" className="section-container section-padding max-w-3xl mx-auto">
      <div className="text-center mb-10">
        <span className="text-xs font-semibold uppercase tracking-wide text-emerald">Registro</span>
        <h2 className="text-3xl md:text-4xl font-extrabold mt-2 mb-3">Solicita tu servicio</h2>
        <p className="text-petrol/70 dark:text-cream/70">
          Completa los datos de tu mascota y el servicio que necesitas. Generamos tu orden y cotización al instante.
        </p>
      </div>

      <BookingForm key={preselectedServiceId ?? 'default'} onOrderCreated={setOrder} preselectedServiceId={preselectedServiceId} />
      <OrderSummaryModal order={order} onClose={() => setOrder(null)} />
    </section>
  );
};
