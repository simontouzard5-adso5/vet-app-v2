import type { Variants } from 'framer-motion';

/** Variantes reutilizables de aparición al hacer scroll. */
export const fadeUpVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

export const staggerContainer: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

export const modalBackdropVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

export const modalContentVariants: Variants = {
  hidden: { opacity: 0, scale: 0.95, y: 12 },
  visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.3, ease: 'easeOut' } },
};
