/**
 * Interfaz de una reseña de cliente, usada en la sección "Reseñas".
 */
export interface Review {
  id: string;
  name: string;
  petName: string;
  rating: 1 | 2 | 3 | 4 | 5;
  comment: string;
  avatarInitials: string; // usado en vez de fotos reales (evita depender de imágenes externas)
}
