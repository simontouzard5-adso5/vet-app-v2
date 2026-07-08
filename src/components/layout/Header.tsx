import { motion } from 'framer-motion';
import { Navbar } from './Navbar';
import { AnimatedHeaderScene } from '@components/header/AnimatedHeaderScene';
import { siteConfig } from '@/config/siteConfig';

/**
 * Header principal: navegación + hero + escena animada de mascotas.
 * El fondo usa un degradado suave con la paleta esmeralda/petróleo.
 */
export const Header = () => (
  <header
    id="inicio"
    className="relative overflow-hidden bg-gradient-to-br from-cream via-emerald-light/10 to-petrol-light/10 dark:from-petrol-dark dark:via-petrol dark:to-petrol-dark"
  >
    <Navbar />

    <div className="section-container pt-10 pb-24 md:pt-16 md:pb-32 grid md:grid-cols-2 gap-12 items-center">
      <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
        <span className="inline-block text-xs font-semibold tracking-wide uppercase text-emerald bg-emerald/10 px-3 py-1 rounded-full mb-5">
          + {siteConfig.yearsOfExperience} años cuidando mascotas
        </span>
        <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-5">
          {siteConfig.tagline}, <span className="text-emerald">con la confianza que se merece</span>
        </h1>
        <p className="text-base md:text-lg text-petrol/70 dark:text-cream/70 mb-8 max-w-lg">
          Consultas médicas, grooming, hotel, guardería y pasadía: todo lo que tu mascota necesita,
          agendado en minutos y con profesionales que la tratan como familia.
        </p>
        <div className="flex flex-wrap gap-4">
          <a href="#reserva" className="btn-primary">Solicitar Servicio</a>
          <a href="#servicios" className="btn-secondary">Ver Servicios</a>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.92 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, delay: 0.1 }}
        className="relative"
      >
        <div className="card-surface aspect-[4/3] flex items-center justify-center text-8xl">
          🐶🐱
        </div>
      </motion.div>
    </div>

    <AnimatedHeaderScene />
  </header>
);
