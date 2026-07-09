import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { fileURLToPath, URL } from 'node:url';

/**
 * Configuración de Vite.
 * `base` se ajusta al nombre del repositorio para que funcione en GitHub Pages
 * (rutas relativas tipo https://usuario.github.io/nombre-repo/).
 * Si despliegas en un dominio propio, cambia `base` a "/".
 *
 * IMPORTANTE: estos alias deben coincidir exactamente con los definidos en
 * tsconfig.json ("paths"). TypeScript solo los usa para el chequeo de tipos;
 * Vite necesita esta configuración aparte para resolverlos en tiempo de build.
 */
export default defineConfig({
  plugins: [react()],
  base: '/',
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      '@components': fileURLToPath(new URL('./src/components', import.meta.url)),
      '@hooks': fileURLToPath(new URL('./src/hooks', import.meta.url)),
      '@contexts': fileURLToPath(new URL('./src/contexts', import.meta.url)),
      '@types': fileURLToPath(new URL('./src/types', import.meta.url)),
      '@interfaces': fileURLToPath(new URL('./src/interfaces', import.meta.url)),
      '@services': fileURLToPath(new URL('./src/services', import.meta.url)),
      '@utils': fileURLToPath(new URL('./src/utils', import.meta.url)),
      '@constants': fileURLToPath(new URL('./src/constants', import.meta.url)),
      '@config': fileURLToPath(new URL('./src/config', import.meta.url)),
      '@pdf': fileURLToPath(new URL('./src/pdf', import.meta.url)),
      '@validation': fileURLToPath(new URL('./src/validation', import.meta.url)),
      '@animations': fileURLToPath(new URL('./src/animations', import.meta.url)),
    },
  },
  build: {
    outDir: 'dist',
    sourcemap: false,
  },
});
