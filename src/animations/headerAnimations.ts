import type { Variants } from 'framer-motion';

/**
 * El perro recorre el header de izquierda a derecha, en bucle, con leve
 * rebote vertical (simulando el trote).
 *
 * IMPORTANTE: se anima `left` (posición) y NO `x` (transform). Los
 * porcentajes de `x` se calculan respecto al tamaño del propio elemento
 * (el emoji, que es diminuto), por eso antes parecía "pegado" en una
 * esquina. `left` en cambio se calcula respecto al contenedor padre
 * (el header), que es el recorrido que realmente queremos.
 */
export const dogRunVariants: Variants = {
  animate: {
    left: ['-8%', '104%'],
    y: [0, -4, 0, -4, 0],
    transition: {
      left: { duration: 9, repeat: Infinity, ease: 'linear' },
      y: { duration: 0.6, repeat: Infinity, ease: 'easeInOut' },
    },
  },
};

/** Huellas que aparecen y se desvanecen progresivamente. */
export const pawFadeVariants: Variants = {
  animate: (i: number) => ({
    opacity: [0, 1, 1, 0],
    transition: { duration: 4, repeat: Infinity, delay: i * 0.5, ease: 'easeInOut' },
  }),
};