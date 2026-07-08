import type { BookingFormValues } from './booking.types';
import type { ServiceInfo } from './service.types';

/**
 * Tipos de la Orden de Servicio generada automáticamente al enviar el formulario.
 */

export type OrderStatus = 'Pendiente' | 'Confirmada' | 'En proceso' | 'Finalizada';

export interface OrderPricing {
  subtotal: number;
  ivaRate: number; // ej. 0.19
  ivaValue: number;
  total: number;
}

export interface ServiceOrder {
  orderNumber: string; // consecutivo, ej. VET-20260708-042
  date: string; // fecha ISO
  time: string; // hora local legible
  owner: BookingFormValues['owner'];
  pet: BookingFormValues['pet'];
  service: ServiceInfo;
  pricing: OrderPricing;
  observations?: string;
  status: OrderStatus;
}
