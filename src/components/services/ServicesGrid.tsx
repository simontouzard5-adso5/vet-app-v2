import { motion } from 'framer-motion';
import { SERVICES } from '@/constants/services.constants';
import { ServiceCard } from './ServiceCard';
import { fadeUpVariants, staggerContainer } from '@/animations/fadeVariants';
import type { ServiceOptionId } from '@/types/service.types';

interface ServicesGridProps {
  onRequestService: (serviceId: ServiceOptionId) => void;
}

/** Sección "Servicios": grid de las 9 fichas generadas desde el catálogo único. */
export const ServicesGrid = ({ onRequestService }: ServicesGridProps) => (
  <section id="servicios" className="section-container section-padding">
    <motion.div
      variants={fadeUpVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className="max-w-xl mb-12"
    >
      <span className="text-xs font-semibold uppercase tracking-wide text-emerald">Nuestros servicios</span>
      <h2 className="text-3xl md:text-4xl font-extrabold mt-2 mb-3">Todo lo que tu mascota necesita</h2>
      <p className="text-petrol/70 dark:text-cream/70">
        Desde una consulta médica hasta un fin de semana de hotel: elige el servicio y solicita tu cotización al instante.
      </p>
    </motion.div>

    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
    >
      {SERVICES.map((service) => (
        <ServiceCard key={service.id} service={service} onRequest={onRequestService} />
      ))}
    </motion.div>
  </section>
);
