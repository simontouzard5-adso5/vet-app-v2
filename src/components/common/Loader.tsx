/** Loader moderno reutilizable: huella animada con puntos girando. */
export const Loader = ({ label = 'Cargando...' }: { label?: string }) => (
  <div className="flex flex-col items-center justify-center gap-3 py-10" role="status" aria-live="polite">
    <div className="relative h-10 w-10">
      <div className="absolute inset-0 rounded-full border-2 border-emerald/20" />
      <div className="absolute inset-0 rounded-full border-2 border-emerald border-t-transparent animate-spin" />
    </div>
    <span className="text-xs text-petrol/60 dark:text-cream/60">{label}</span>
  </div>
);
