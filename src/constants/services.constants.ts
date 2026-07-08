import type { ServiceInfo } from '@/types/service.types';

/**
 * Catálogo único de servicios veterinarios. Toda la UI (tarjetas, formulario,
 * cálculo de cotización, PDF) se alimenta de este archivo, así que ajustar
 * precios o textos aquí se refleja en toda la aplicación automáticamente.
 * Precios de referencia para una veterinaria de nivel medio en Colombia (COP),
 * antes de IVA.
 */
export const SERVICES: ServiceInfo[] = [
  {
    id: 'consulta_medica',
    category: 'medico',
    name: 'Consulta Médica',
    shortDescription: 'Revisión general con médico veterinario.',
    description:
      'Evaluación clínica completa de tu mascota: signos vitales, estado general y diagnóstico inicial a cargo de nuestro equipo médico.',
    benefits: ['Diagnóstico temprano', 'Plan de tratamiento personalizado', 'Seguimiento profesional'],
    approximateDurationMinutes: 30,
    price: 60000,
    imageGradient: 'from-emerald-light to-petrol',
    recommendation: 'Garantiza que tu mascota llegue en ayunas si el médico lo solicita.',
  },
  {
    id: 'urgencias',
    category: 'medico',
    name: 'Urgencias',
    shortDescription: 'Atención prioritaria ante una emergencia.',
    description:
      'Atención inmediata para situaciones críticas: accidentes, intoxicaciones o cambios repentinos en la salud de tu mascota.',
    benefits: ['Atención prioritaria', 'Estabilización inmediata', 'Equipo preparado para emergencias'],
    approximateDurationMinutes: 45,
    price: 120000,
    imageGradient: 'from-red-400 to-petrol-dark',
    recommendation: 'Mantén la calma y transporta a tu mascota con cuidado, evitando movimientos bruscos.',
  },
  {
    id: 'vacunacion',
    category: 'medico',
    name: 'Vacunación',
    shortDescription: 'Esquema de vacunas al día.',
    description:
      'Aplicación de vacunas según el esquema recomendado para la edad y especie de tu mascota, con carné actualizado.',
    benefits: ['Previene enfermedades graves', 'Carné de vacunación al día', 'Refuerza el sistema inmune'],
    approximateDurationMinutes: 20,
    price: 45000,
    imageGradient: 'from-emerald to-emerald-dark',
    recommendation: 'Evita bañar a tu mascota los 3 días posteriores a la vacunación.',
  },
  {
    id: 'desparasitacion',
    category: 'medico',
    name: 'Desparasitación',
    shortDescription: 'Control interno y externo de parásitos.',
    description:
      'Tratamiento preventivo o correctivo contra parásitos internos y externos, adaptado al peso y edad de tu mascota.',
    benefits: ['Previene enfermedades parasitarias', 'Mejora la digestión', 'Protege a toda la familia'],
    approximateDurationMinutes: 15,
    price: 35000,
    imageGradient: 'from-petrol-light to-emerald',
    recommendation: 'Repite este proceso cada 3 a 6 meses según la indicación del veterinario.',
  },
  {
    id: 'cirugia',
    category: 'medico',
    name: 'Cirugía',
    shortDescription: 'Procedimientos quirúrgicos especializados.',
    description:
      'Intervenciones quirúrgicas (esterilización y otros procedimientos) realizadas con protocolos de bioseguridad y anestesia controlada.',
    benefits: ['Equipo especializado', 'Protocolos de bioseguridad', 'Acompañamiento postoperatorio'],
    approximateDurationMinutes: 90,
    price: 450000,
    imageGradient: 'from-petrol to-petrol-dark',
    recommendation: 'Tu mascota debe llegar en ayunas de al menos 8 horas. Prepara un espacio tranquilo para su recuperación.',
  },
  {
    id: 'grooming',
    category: 'grooming',
    name: 'Grooming',
    shortDescription: 'Baño, peluquería y cuidado estético completo.',
    description:
      'Baño medicado o tradicional, corte de pelo, corte de uñas, limpieza de oídos y cepillado dental para el bienestar de tu mascota.',
    benefits: ['Piel y pelaje saludables', 'Previene infecciones de oído', 'Mascota fresca y feliz'],
    approximateDurationMinutes: 90,
    price: 55000,
    imageGradient: 'from-cream-dark to-emerald-light',
    recommendation: 'Realiza este servicio cada 30 o 45 días para mantener una buena salud dermatológica.',
  },
  {
    id: 'hotel',
    category: 'hotel',
    name: 'Hotel para Mascotas',
    shortDescription: 'Hospedaje seguro y cómodo (por noche).',
    description:
      'Espacio seguro y confortable para que tu mascota se hospede mientras viajas, con alimentación y atención permanente.',
    benefits: ['Supervisión las 24 horas', 'Espacios cómodos y seguros', 'Rutina de ejercicio diaria'],
    approximateDurationMinutes: 1440,
    price: 40000,
    imageGradient: 'from-emerald-dark to-petrol',
    recommendation: 'Trae el alimento habitual de tu mascota para evitar cambios bruscos en su dieta.',
  },
  {
    id: 'guarderia',
    category: 'guarderia',
    name: 'Guardería',
    shortDescription: 'Cuidado y socialización durante el día.',
    description:
      'Cuidado diurno con actividades de socialización y juego, ideal para cuando no puedes estar en casa durante el día.',
    benefits: ['Socialización con otras mascotas', 'Reduce la ansiedad por separación', 'Actividades supervisadas'],
    approximateDurationMinutes: 480,
    price: 30000,
    imageGradient: 'from-emerald-light to-cream-dark',
    recommendation: 'Informa a nuestro equipo sobre el comportamiento de tu mascota con otros animales.',
  },
  {
    id: 'pasadia',
    category: 'pasadia',
    name: 'Pasadía',
    shortDescription: 'Estadía corta con actividades recreativas.',
    description:
      'Plan de algunas horas con juegos, ejercicio y atención personalizada, perfecto para una jornada especial de tu mascota.',
    benefits: ['Actividad física garantizada', 'Atención personalizada', 'Reporte de la jornada'],
    approximateDurationMinutes: 240,
    price: 25000,
    imageGradient: 'from-petrol-light to-emerald-light',
    recommendation: 'Ideal para mascotas jóvenes y activas: consulta si tu mascota tiene la energía adecuada para el plan.',
  },
];

export const getServiceById = (id: string): ServiceInfo | undefined =>
  SERVICES.find((service) => service.id === id);
