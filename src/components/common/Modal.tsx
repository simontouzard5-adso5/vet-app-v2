import { type ReactNode, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { X } from 'lucide-react';
import { modalBackdropVariants, modalContentVariants } from '@/animations/fadeVariants';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: ReactNode;
}

/**
 * Modal accesible reutilizable: cierra con Escape, bloquea el scroll del
 * body mientras está abierto y usa roles ARIA de diálogo.
 */
export const Modal = ({ isOpen, onClose, title, children }: ModalProps) => {
  useEffect(() => {
    if (!isOpen) return;
    document.body.style.overflow = 'hidden';
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKeyDown);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 backdrop-blur-sm p-4"
          variants={modalBackdropVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
          onClick={onClose}
        >
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
            className="card-surface w-full max-w-lg max-h-[85vh] overflow-y-auto p-6 md:p-8"
            variants={modalContentVariants}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between mb-4">
              <h3 id="modal-title" className="text-lg font-bold">{title}</h3>
              <button
                onClick={onClose}
                aria-label="Cerrar"
                className="p-1 rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition"
              >
                <X size={20} />
              </button>
            </div>
            {children}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
