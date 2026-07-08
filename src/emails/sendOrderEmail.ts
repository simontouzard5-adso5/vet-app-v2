import type { ServiceOrder } from '@/types/order.types';

/**
 * Envío del PDF de la orden por correo electrónico.
 *
 * ⚠️ IMPORTANTE — ESTO ES UN MOCK:
 * El envío de correos con archivos adjuntos NO se puede hacer de forma
 * segura desde el navegador (expondría credenciales SMTP o API keys).
 * Esta función simula la llamada y deja preparada la interfaz para
 * conectarla a un backend real.
 *
 * Para producción, reemplaza el cuerpo de esta función por una llamada
 * `fetch` a un endpoint propio (Node/Express, Firebase Functions, etc.)
 * que use un servicio como Resend, SendGrid o Nodemailer, por ejemplo:
 *
 *   await fetch('/api/send-order-email', {
 *     method: 'POST',
 *     headers: { 'Content-Type': 'application/json' },
 *     body: JSON.stringify({ to: email, pdfBase64, order }),
 *   });
 *
 * El PDF ya generado (ver pdf/generateOrderPdf.ts) se puede convertir a
 * base64 con `doc.output('datauristring')` y enviarlo en el body.
 */
export interface SendOrderEmailPayload {
  order: ServiceOrder;
  toEmail: string;
  pdfBase64: string;
}

export interface SendOrderEmailResult {
  success: boolean;
  message: string;
}

export const sendOrderEmail = async (
  payload: SendOrderEmailPayload
): Promise<SendOrderEmailResult> => {
  // Simulación de latencia de red para reflejar un envío real.
  await new Promise((resolve) => setTimeout(resolve, 600));

  console.info('[MOCK] Correo simulado enviado a:', payload.toEmail, {
    orden: payload.order.orderNumber,
  });

  return {
    success: true,
    message: `(Simulado) La orden ${payload.order.orderNumber} se "envió" a ${payload.toEmail}. Conecta un backend real para el envío efectivo.`,
  };
};
