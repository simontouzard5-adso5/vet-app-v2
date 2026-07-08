import { Download, MessageCircle } from 'lucide-react';
import { Modal } from '@components/common/Modal';
import type { ServiceOrder } from '@/types/order.types';
import { formatCurrency } from '@/utils/formatCurrency';
import { generateOrderPdf } from '@/pdf/generateOrderPdf';
import { buildWhatsappClickToChatUrl } from '@/whatsapp/sendWhatsappNotification';
import { useToast } from '@/hooks/useToast';

interface OrderSummaryModalProps {
  order: ServiceOrder | null;
  onClose: () => void;
}

/**
 * Modal de confirmación tras enviar el formulario: muestra la orden generada
 * (número, cliente, mascota, servicio, precios, estado), la recomendación
 * asociada al servicio y las acciones de descarga de PDF / envío por WhatsApp.
 */
export const OrderSummaryModal = ({ order, onClose }: OrderSummaryModalProps) => {
  const { showToast } = useToast();

  if (!order) return null;

  const handleDownloadPdf = async () => {
    try {
      const doc = await generateOrderPdf(order);
      doc.save(`Orden-${order.orderNumber}.pdf`);
      showToast('PDF descargado correctamente', 'success');
    } catch {
      showToast('No se pudo generar el PDF. Intenta de nuevo.', 'error');
    }
  };

  return (
    <Modal isOpen={Boolean(order)} onClose={onClose} title={`Orden ${order.orderNumber}`}>
      <div className="space-y-4 text-sm">
        <div className="flex justify-between text-xs text-petrol/60 dark:text-cream/60">
          <span>{order.date} · {order.time}</span>
          <span className="px-2 py-0.5 rounded-full bg-amber-500/15 text-amber-600 dark:text-amber-400 font-medium">
            {order.status}
          </span>
        </div>

        <div>
          <p className="font-semibold">{order.owner.fullName}</p>
          <p className="text-petrol/60 dark:text-cream/60">Mascota: {order.pet.name} ({order.service.name})</p>
        </div>

        <table className="w-full">
          <tbody>
            <tr className="border-b border-black/5 dark:border-white/10">
              <td className="py-2">Valor del servicio</td>
              <td className="py-2 text-right">{formatCurrency(order.pricing.subtotal)}</td>
            </tr>
            <tr className="border-b border-black/5 dark:border-white/10">
              <td className="py-2">IVA ({Math.round(order.pricing.ivaRate * 100)}%)</td>
              <td className="py-2 text-right">{formatCurrency(order.pricing.ivaValue)}</td>
            </tr>
            <tr>
              <td className="py-2 font-bold text-emerald">Total</td>
              <td className="py-2 text-right font-bold text-emerald text-base">{formatCurrency(order.pricing.total)}</td>
            </tr>
          </tbody>
        </table>

        <div className="bg-emerald/10 border border-emerald/20 rounded-lg p-3.5 text-xs leading-relaxed">
          <strong className="block mb-1">Recomendación para tu servicio</strong>
          {order.service.recommendation}
        </div>

        <div className="flex flex-col sm:flex-row gap-2 pt-1">
          <button onClick={handleDownloadPdf} className="btn-secondary flex-1 text-xs">
            <Download size={15} /> Descargar PDF
          </button>
          <a
            href={buildWhatsappClickToChatUrl(order)}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-base flex-1 text-xs bg-[#1db954] text-white hover:opacity-90"
          >
            <MessageCircle size={15} /> Enviar por WhatsApp
          </a>
        </div>

        <p className="text-[11px] text-petrol/50 dark:text-cream/50 text-center">
          También enviamos una copia (simulada) al correo de nuestro equipo comercial.
        </p>
      </div>
    </Modal>
  );
};
