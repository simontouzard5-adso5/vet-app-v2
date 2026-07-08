/**
 * Genera un número consecutivo de orden con el formato VET-YYYYMMDD-XXX.
 * En producción, el consecutivo real (XXX) debería venir de una base de
 * datos o backend para garantizar unicidad entre sesiones y usuarios;
 * aquí se simula con un número aleatorio de 3 dígitos.
 */
export const generateOrderNumber = (): string => {
  const now = new Date();
  const yyyy = now.getFullYear();
  const mm = String(now.getMonth() + 1).padStart(2, '0');
  const dd = String(now.getDate()).padStart(2, '0');
  const consecutive = String(Math.floor(Math.random() * 900) + 100);
  return `VET-${yyyy}${mm}${dd}-${consecutive}`;
};

export const getReadableDate = (date: Date): string =>
  date.toLocaleDateString('es-CO', { year: 'numeric', month: 'long', day: 'numeric' });

export const getReadableTime = (date: Date): string =>
  date.toLocaleTimeString('es-CO', { hour: '2-digit', minute: '2-digit' });
