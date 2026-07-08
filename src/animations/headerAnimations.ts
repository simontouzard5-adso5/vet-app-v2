import type { Variants } from 'framer-motion';

/** El perro corre de izquierda a derecha, en bucle, con leve rebote vertical. */
export const dogRunVariants: Variants = {
  animate: {
    x: ['-10%', '110%'],
    y: [0, -4, 0, -4, 0],
    transition: {
      x: { duration: 9, repeat: Infinity, ease: 'linear' },
      y: { duration: 0.6, repeat: Infinity, ease: 'easeInOut' },
    },
  },
};

/** El gato camina en sentido contrario, más lento, con pausas tipo "jugando". */
export const catWalkVariants: Variants = {
  animate: {
    x: ['110%', '-10%'],
    transition: { duration: 13, repeat: Infinity, ease: 'linear', delay: 2 },
  },
};

/** Huellas que aparecen y se desvanecen progresivamente. */
export const pawFadeVariants: Variants = {
  animate: (i: number) => ({
    opacity: [0, 1, 1, 0],
    transition: { duration: 4, repeat: Infinity, delay: i * 0.5, ease: 'easeInOut' },
  }),
};
