import { motion } from 'framer-motion';
import { dogRunVariants, pawFadeVariants } from '@/animations/headerAnimations';

/**
 * Escena decorativa del header: un perrito recorriendo el header de
 * izquierda a derecha, con huellas que aparecen/desaparecen detrás.
 * Todo con emojis (sin imágenes externas) para mantener el peso de la
 * página bajo. Se respeta `prefers-reduced-motion` deshabilitando la animación.
 */
export const AnimatedHeaderScene = () => {
  const prefersReducedMotion =
    typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (prefersReducedMotion) return null;

  return (
    <div className="pointer-events-none absolute inset-x-0 bottom-0 h-14 overflow-hidden" aria-hidden="true">
      {/* Huellas de fondo */}
      <div className="absolute inset-0 flex items-end justify-around pb-1 opacity-70">
        {Array.from({ length: 6 }).map((_, i) => (
          <motion.span
            key={i}
            custom={i}
            variants={pawFadeVariants}
            animate="animate"
            className="text-emerald/50 text-sm"
          >
            🐾
          </motion.span>
        ))}
      </div>

      {/* Perrito recorriendo el header de izquierda a derecha */}
      <motion.div
        initial={{ left: '-8%' }}
        variants={dogRunVariants}
        animate="animate"
        className="absolute bottom-1 text-2xl"
      >
        🐕
      </motion.div>
    </div>
  );
};