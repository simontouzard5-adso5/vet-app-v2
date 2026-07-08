import { Phone, MapPin, Clock } from 'lucide-react';
import { siteConfig } from '@/config/siteConfig';

/** Sección "Contacto": datos de contacto + mapa embebido de Google Maps. */
export const ContactSection = () => (
  <section id="contacto" className="section-container section-padding grid md:grid-cols-2 gap-10 items-start">
    <div>
      <span className="text-xs font-semibold uppercase tracking-wide text-emerald">Contacto</span>
      <h2 className="text-3xl md:text-4xl font-extrabold mt-2 mb-6">Visítanos o escríbenos</h2>

      <ul className="space-y-4 text-sm">
        <li className="flex items-start gap-3">
          <Phone size={18} className="text-emerald mt-0.5" />
          <span>{siteConfig.contact.contactPersonName} · {siteConfig.contact.contactPersonPhone}</span>
        </li>
        <li className="flex items-start gap-3">
          <MapPin size={18} className="text-emerald mt-0.5" />
          <span>Sede principal: {siteConfig.contact.mainAddress}</span>
        </li>
        <li className="flex items-start gap-3">
          <MapPin size={18} className="text-emerald mt-0.5" />
          <span>Sucursal: {siteConfig.contact.branchAddress}</span>
        </li>
        <li className="flex items-start gap-3">
          <Clock size={18} className="text-emerald mt-0.5" />
          <span>{siteConfig.footer.schedule}</span>
        </li>
      </ul>
    </div>

    <div className="card-surface overflow-hidden aspect-video">
      <iframe
        title="Ubicación de la clínica veterinaria"
        src={`https://maps.google.com/maps?q=${siteConfig.contact.mapEmbedQuery}&output=embed`}
        width="100%"
        height="100%"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  </section>
);
