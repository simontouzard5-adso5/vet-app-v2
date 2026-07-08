import { ThemeProvider } from '@/contexts/ThemeContext';
import { ToastProvider } from '@/contexts/ToastContext';
import { HomePage } from '@/pages/HomePage';

/** Raíz de la aplicación: envuelve la app con los providers de tema y notificaciones. */
function App() {
  return (
    <ThemeProvider>
      <ToastProvider>
        <HomePage />
      </ToastProvider>
    </ThemeProvider>
  );
}

export default App;
