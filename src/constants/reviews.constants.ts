import type { Review } from '@/interfaces/review.interface';

/**
 * Reseñas de ejemplo (mock). En producción se recomienda reemplazar este
 * arreglo por datos reales obtenidos de Google Business Profile o de una
 * base de datos propia con reseñas moderadas.
 */
export const REVIEWS: Review[] = [
  {
    id: 'r1',
    name: 'Laura Méndez',
    petName: 'Toby',
    rating: 5,
    comment: 'Excelente atención, Toby siempre sale feliz de sus citas. Se nota el amor por los animales.',
    avatarInitials: 'LM',
  },
  {
    id: 'r2',
    name: 'Camilo Rojas',
    petName: 'Mia',
    rating: 5,
    comment: 'El servicio de hotel me dio total tranquilidad mientras viajaba. Mia volvió feliz y cuidada.',
    avatarInitials: 'CR',
  },
  {
    id: 'r3',
    name: 'Paula Sánchez',
    petName: 'Rocco',
    rating: 5,
    comment: 'El grooming quedó impecable y el proceso de reserva fue rapidísimo desde la página.',
    avatarInitials: 'PS',
  },
  {
    id: 'r4',
    name: 'Julián Vargas',
    petName: 'Luna',
    rating: 4,
    comment: 'Muy profesionales en la cirugía de Luna. El acompañamiento postoperatorio fue clave.',
    avatarInitials: 'JV',
  },
];
