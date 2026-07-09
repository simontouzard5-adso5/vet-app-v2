import { motion } from 'framer-motion';
import { dogRunVariants, pawFadeVariants } from '@/animations/headerAnimations';
import { RunningDog } from './RunningDog';

/**
 * Escena decorativa del header: un perrito corriendo de izquierda a derecha
 * con un ciclo de carrera realista (patas, cola, oreja y sombra animadas
 * por separado, ver RunningDog.tsx), con huellas apareciendo/desapareciendo
 * detrás. Todo en SVG/CSS puro, sin imágenes externas.
 * Se respeta `prefers-reduced-motion` deshabilitando la animación.
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

      {/* Perrito corriendo de izquierda a derecha */}
      <motion.div initial={{ left: '-8%' }} variants={dogRunVariants} animate="animate" className="absolute bottom-0">
        <RunningDog />
      </motion.div>
    </div>
  );
};