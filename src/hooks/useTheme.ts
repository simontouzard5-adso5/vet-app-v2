import { useContext } from 'react';
import { ThemeContext } from '@/contexts/ThemeContext';

/**
 * Hook de acceso al contexto de tema. Lanza un error explícito si se usa
 * fuera de <ThemeProvider>, para detectar errores de integración temprano.
 */
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme debe usarse dentro de un <ThemeProvider>');
  }
  return context;
};
