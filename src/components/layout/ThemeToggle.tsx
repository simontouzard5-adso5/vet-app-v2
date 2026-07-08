import { Sun, Moon } from 'lucide-react';
import { motion } from 'framer-motion';
import { useTheme } from '@/hooks/useTheme';

/** Botón de cambio de tema con transición animada del ícono. */
export const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <button
      onClick={toggleTheme}
      aria-label={isDark ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro'}
      aria-pressed={isDark}
      className="relative flex h-9 w-9 items-center justify-center rounded-full border border-petrol/15 dark:border-cream/15 hover:border-emerald transition-colors"
    >
      <motion.span
        key={theme}
        initial={{ opacity: 0, rotate: -90, scale: 0.6 }}
        animate={{ opacity: 1, rotate: 0, scale: 1 }}
        transition={{ duration: 0.3 }}
      >
        {isDark ? <Moon size={16} /> : <Sun size={16} />}
      </motion.span>
    </button>
  );
};
