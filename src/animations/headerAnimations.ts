import type { Variants } from 'framer-motion';

/**
 * Desplazamiento horizontal del perrito a lo largo del header, en bucle.
 * El rebote, el movimiento de patas, cola y oreja ahora los maneja el
 * propio SVG (ver RunningDog.tsx + los keyframes "dog-*" en
 * tailwind.config.ts), así que aquí solo animamos la posición `left`.
 *
 * IMPORTANTE: se anima `left` (posición) y NO `x` (transform). Los
 * porcentajes de `x` se calculan respecto al tamaño del propio elemento,
 * por eso antes parecía "pegado" en una esquina. `left` en cambio se
 * calcula respecto al contenedor padre (el header), que es el recorrido
 * que realmente queremos.
 */
export const dogRunVariants: Variants = {
  animate: {
    left: ['-8%', '104%'],
    transition: { duration: 9, repeat: Infinity, ease: 'linear' },
  },
};

/** Huellas que aparecen y se desvanecen progresivamente. */
export const pawFadeVariants: Variants = {
  animate: (i: number) => ({
    opacity: [0, 1, 1, 0],
    transition: { duration: 4, repeat: Infinity, delay: i * 0.5, ease: 'easeInOut' },
  }),
};