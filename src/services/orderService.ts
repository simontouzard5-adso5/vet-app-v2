import type { BookingFormValues } from '@/types/booking.types';
import type { ServiceOrder } from '@/types/order.types';
import { getServiceById } from '@/constants/services.constants';
import { calculatePricing } from './pricingService';
import { generateOrderNumber, getReadableDate, getReadableTime } from '@/utils/generateConsecutive';

/**
 * Construye una Orden de Servicio completa a partir de los datos del formulario.
 * Lanza un error si el servicio seleccionado no existe en el catálogo
 * (protección adicional más allá de la validación de Zod).
 */
export const buildServiceOrder = (formValues: BookingFormValues): ServiceOrder => {
  const service = getServiceById(formValues.serviceId);
  if (!service) {
    throw new Error(`Servicio no encontrado: ${formValues.serviceId}`);
  }

  const now = new Date();

  return {
    orderNumber: generateOrderNumber(),
    date: getReadableDate(now),
    time: getReadableTime(now),
    owner: formValues.owner,
    pet: formValues.pet,
    service,
    pricing: calculatePricing(service.price),
    observations: formValues.pet.observations,
    status: 'Pendiente',
  };
};
