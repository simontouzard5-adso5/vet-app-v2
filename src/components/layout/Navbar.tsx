import { useState } from 'react';
import { Menu, X, PawPrint } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';
import { siteConfig } from '@/config/siteConfig';

const NAV_LINKS = [
  { href: '#inicio', label: 'Inicio' },
  { href: '#servicios', label: 'Servicios' },
  { href: '#quienes-somos', label: 'Quiénes Somos' },
  { href: '#resenas', label: 'Reseñas' },
  { href: '#reserva', label: 'Registro' },
  { href: '#contacto', label: 'Contacto' },
];

/** Barra de navegación principal, con menú responsive para celular. */
export const Navbar = () => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  return (
    <nav className="relative z-10 section-container flex items-center justify-between py-4">
      <a href="#inicio" className="flex items-center gap-2.5 font-bold text-lg">
        <span className="flex h-9 w-9 items-center justify-center rounded-full bg-emerald text-white">
          <PawPrint size={18} />
        </span>
        {siteConfig.brandName}
      </a>

      <ul className="hidden md:flex items-center gap-7 text-sm font-medium">
        {NAV_LINKS.map((link) => (
          <li key={link.href}>
            <a href={link.href} className="hover:text-emerald transition-colors">
              {link.label}
            </a>
          </li>
        ))}
      </ul>

      <div className="hidden md:flex items-center gap-3">
        <ThemeToggle />
        <a href="#reserva" className="btn-primary text-sm">Solicitar Servicio</a>
      </div>

      <button
        className="md:hidden p-2"
        onClick={() => setIsMobileOpen((prev) => !prev)}
        aria-label={isMobileOpen ? 'Cerrar menú' : 'Abrir menú'}
        aria-expanded={isMobileOpen}
      >
        {isMobileOpen ? <X size={22} /> : <Menu size={22} />}
      </button>

      {isMobileOpen && (
        <div className="absolute top-full left-0 right-0 md:hidden card-surface mx-4 mt-2 p-5 flex flex-col gap-4">
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setIsMobileOpen(false)} className="text-sm font-medium">
              {link.label}
            </a>
          ))}
          <div className="flex items-center justify-between pt-2 border-t border-black/5 dark:border-white/10">
            <ThemeToggle />
            <a href="#reserva" onClick={() => setIsMobileOpen(false)} className="btn-primary text-sm">
              Solicitar Servicio
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};
