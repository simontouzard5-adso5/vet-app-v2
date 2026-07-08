import type { ServiceOrder } from '@/types/order.types';

/**
 * API simulada (mock). En producción, reemplaza `submitOrder` por una
 * llamada real a tu backend (REST, Firebase, Supabase, etc.) que persista
 * la orden en una base de datos y dispare el envío de correo/WhatsApp
 * desde el servidor.
 */
export const submitOrder = async (order: ServiceOrder): Promise<{ success: boolean }> => {
  await new Promise((resolve) => setTimeout(resolve, 400));
  console.info('[MOCK API] Orden registrada:', order.orderNumber);
  return { success: true };
};
