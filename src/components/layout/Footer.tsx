import { Facebook, Instagram, PawPrint } from 'lucide-react';
import { siteConfig } from '@/config/siteConfig';

export const Footer = () => (
  <footer className="bg-petrol-dark text-cream/90 pt-16 pb-8">
    <div className="section-container grid md:grid-cols-3 gap-10 mb-10">
      <div>
        <div className="flex items-center gap-2.5 font-bold text-lg mb-3">
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-emerald text-white">
            <PawPrint size={18} />
          </span>
          {siteConfig.brandName}
        </div>
        <p className="text-sm text-cream/60 max-w-xs">{siteConfig.tagline}. Más de {siteConfig.yearsOfExperience} años cuidando a quienes más quieres.</p>
        <div className="flex gap-3 mt-4">
          <a href="#" aria-label="Facebook" className="p-2 rounded-full bg-white/10 hover:bg-emerald transition-colors"><Facebook size={16} /></a>
          <a href="#" aria-label="Instagram" className="p-2 rounded-full bg-white/10 hover:bg-emerald transition-colors"><Instagram size={16} /></a>
        </div>
      </div>

      <div>
        <h4 className="text-xs uppercase tracking-wide text-cream/50 mb-3">Contacto</h4>
        <ul className="space-y-2 text-sm text-cream/70">
          <li>{siteConfig.contact.contactPersonName}</li>
          <li>{siteConfig.contact.contactPersonPhone}</li>
          <li>{siteConfig.contact.mainAddress}</li>
          <li>{siteConfig.contact.branchAddress}</li>
        </ul>
      </div>

      <div>
        <h4 className="text-xs uppercase tracking-wide text-cream/50 mb-3">Horario</h4>
        <p className="text-sm text-cream/70">{siteConfig.footer.schedule}</p>
      </div>
    </div>

    <div className="section-container border-t border-white/10 pt-6 flex flex-col md:flex-row justify-between items-center gap-2 text-xs text-cream/50">
      <span>© {new Date().getFullYear()} {siteConfig.brandName}. Todos los derechos reservados. · {siteConfig.footer.versionLabel}</span>
      <span>Desarrollado por {siteConfig.footer.developedBy}</span>
    </div>
  </footer>
);
