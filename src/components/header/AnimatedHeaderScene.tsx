import { motion } from 'framer-motion';
import { dogRunVariants, catWalkVariants, pawFadeVariants } from '@/animations/headerAnimations';

/**
 * Escena decorativa del header: un perro corriendo, un gato caminando en
 * sentido contrario y huellas que aparecen/desaparecen. Todo con SVG simple
 * (sin imágenes externas) para mantener el peso de la página bajo.
 * Se respeta `prefers-reduced-motion` deshabilitando las animaciones.
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

      {/* Perro corriendo */}
      <motion.div variants={dogRunVariants} animate="animate" className="absolute bottom-1 text-2xl">
        🐕
      </motion.div>

      {/* Gato jugando en sentido contrario */}
      <motion.div variants={catWalkVariants} animate="animate" className="absolute bottom-1 text-2xl">
        🐈
      </motion.div>
    </div>
  );
};
