import type { ServiceOrder } from '@/types/order.types';
import { siteConfig } from '@/config/siteConfig';
import { formatCurrency } from '@/utils/formatCurrency';

/**
 * Notificación por WhatsApp del número comercial de la veterinaria.
 *
 * Esta implementación SÍ funciona de inmediato: genera un enlace de
 * WhatsApp Click-to-Chat (wa.me) con el resumen de la orden prellenado.
 * Es la opción recomendada cuando no hay backend, ya que no requiere
 * credenciales ni servicios de pago.
 *
 * ⚠️ Para un envío 100% automático (sin que el cliente confirme el envío
 * manualmente en WhatsApp), se necesita una integración server-side con:
 *   - WhatsApp Business Platform (Meta Cloud API), o
 *   - Twilio API for WhatsApp
 * Ambas requieren: un número verificado de WhatsApp Business, una cuenta
 * de desarrollador (Meta o Twilio), plantillas de mensaje aprobadas y un
 * backend que guarde el token de acceso de forma segura (nunca en el
 * frontend). La función `sendWhatsappNotificationServerSide` de abajo
 * queda como stub documentado para cuando exista ese backend.
 */
export const buildWhatsappClickToChatUrl = (order: ServiceOrder): string => {
  const message = encodeURIComponent(
    `Hola, soy ${order.owner.fullName}. Acabo de generar la orden ${order.orderNumber} ` +
      `para el servicio "${order.service.name}" de mi mascota ${order.pet.name}. ` +
      `Total: ${formatCurrency(order.pricing.total)}. Adjunto el PDF a continuación.`
  );
  return `https://wa.me/${siteConfig.whatsappCommercialNumber}?text=${message}`;
};

/**
 * STUB documentado — implementar cuando exista backend propio.
 * No se ejecuta en este proyecto; lanza un error explícito si se invoca
 * por error, para dejar claro que requiere configuración adicional.
 */
export const sendWhatsappNotificationServerSide = async (
  _order: ServiceOrder
): Promise<never> => {
  throw new Error(
    'sendWhatsappNotificationServerSide no está implementado. ' +
      'Requiere: (1) número de WhatsApp Business verificado, ' +
      '(2) credenciales de Meta Cloud API o Twilio en un backend seguro, ' +
      '(3) una plantilla de mensaje pre-aprobada por Meta para notificaciones. ' +
      'Mientras tanto, usa buildWhatsappClickToChatUrl().'
  );
};
