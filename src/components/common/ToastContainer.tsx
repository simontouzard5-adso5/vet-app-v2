import { AnimatePresence, motion } from 'framer-motion';
import { CheckCircle2, Info, XCircle, X } from 'lucide-react';
import { useToast } from '@/hooks/useToast';
import type { ToastVariant } from '@/contexts/ToastContext';

const ICONS: Record<ToastVariant, React.ReactNode> = {
  success: <CheckCircle2 size={18} className="text-emerald" />,
  error: <XCircle size={18} className="text-red-500" />,
  info: <Info size={18} className="text-petrol-light" />,
};

/** Contenedor fijo de notificaciones toast, montado una sola vez en App.tsx. */
export const ToastContainer = () => {
  const { toasts, dismissToast } = useToast();

  return (
    <div className="fixed bottom-5 right-5 z-[200] flex flex-col gap-2 w-[min(360px,90vw)]" aria-live="polite">
      <AnimatePresence>
        {toasts.map((toast) => (
          <motion.div
            key={toast.id}
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 40 }}
            className="card-surface flex items-start gap-3 px-4 py-3"
          >
            {ICONS[toast.variant]}
            <p className="text-sm flex-1">{toast.message}</p>
            <button onClick={() => dismissToast(toast.id)} aria-label="Cerrar notificación">
              <X size={16} className="opacity-50 hover:opacity-100" />
            </button>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};
