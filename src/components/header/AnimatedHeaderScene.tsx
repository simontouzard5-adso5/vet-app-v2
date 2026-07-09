import { motion } from 'framer-motion';
import { dogRunVariants, pawFadeVariants } from '@/animations/headerAnimations';
import { RunningDog } from './RunningDog';

export const AnimatedHeaderScene = () => {
  const prefersReducedMotion =
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (prefersReducedMotion) return null;

  return (
    <div
      className="pointer-events-none absolute left-0 bottom-0 w-full h-32 overflow-hidden"
      aria-hidden="true"
    >
      {/* Césped */}
      <div className="absolute bottom-0 w-full h-5 bg-gradient-to-r from-emerald-500 via-emerald-400 to-emerald-500" />

      {/* Sombra del suelo */}
      <div className="absolute bottom-5 w-full h-10 bg-gradient-to-t from-emerald-300/30 to-transparent" />

      {/* Huellas */}
      <div className="absolute bottom-7 left-0 right-0 flex justify-around opacity-40">
        {Array.from({ length: 10 }).map((_, i) => (
          <motion.span
            key={i}
            custom={i}
            variants={pawFadeVariants}
            animate="animate"
            className="text-xl text-gray-400"
          >
            🐾
          </motion.span>
        ))}
      </div>

      {/* Perrito */}
      <motion.div
        variants={dogRunVariants}
        animate="animate"
        initial={{ left: '-15%' }}
        className="absolute bottom-2"
        style={{
          transform: 'scale(2)',
          transformOrigin: 'bottom left',
        }}
      >
        <RunningDog />
      </motion.div>
    </div>
  );
};