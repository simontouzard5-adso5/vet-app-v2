import { Clock, Check } from 'lucide-react';
import { motion } from 'framer-motion';
import type { ServiceInfo } from '@/types/service.types';
import { formatCurrency } from '@/utils/formatCurrency';
import { fadeUpVariants } from '@/animations/fadeVariants';

interface ServiceCardProps {
  service: ServiceInfo;
  onRequest: (serviceId: ServiceInfo['id']) => void;
}

/** Tarjeta individual de servicio: descripción, beneficios, duración, precio y CTA. */
export const ServiceCard = ({ service, onRequest }: ServiceCardProps) => (
  <motion.article variants={fadeUpVariants} className="card-surface flex flex-col overflow-hidden">
    <div className={`h-32 bg-gradient-to-br ${service.imageGradient} flex items-center justify-center text-white/90 text-sm font-semibold`}>
      {service.name}
    </div>
    <div className="p-6 flex flex-col flex-1">
      <p className="text-sm text-petrol/70 dark:text-cream/70 mb-3">{service.description}</p>

      <ul className="space-y-1.5 mb-4">
        {service.benefits.map((benefit) => (
          <li key={benefit} className="flex items-start gap-2 text-xs text-petrol/80 dark:text-cream/80">
            <Check size={14} className="text-emerald mt-0.5 shrink-0" />
            {benefit}
          </li>
        ))}
      </ul>

      <div className="flex items-center gap-1.5 text-xs text-petrol/50 dark:text-cream/50 mb-4">
        <Clock size={13} />
        {service.approximateDurationMinutes >= 60
          ? `${Math.round(service.approximateDurationMinutes / 60)} h aprox.`
          : `${service.approximateDurationMinutes} min aprox.`}
      </div>

      <div className="mt-auto flex items-center justify-between">
        <span className="font-bold text-lg">{formatCurrency(service.price)}</span>
        <button onClick={() => onRequest(service.id)} className="btn-primary text-xs px-4 py-2">
          Solicitar
        </button>
      </div>
    </div>
  </motion.article>
);
