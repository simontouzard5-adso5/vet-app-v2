/**
 * Tipos relacionados con los servicios veterinarios ofrecidos.
 */

export type ServiceCategory =
  | 'medico'
  | 'grooming'
  | 'hotel'
  | 'guarderia'
  | 'pasadia';

/** Cada opción concreta que el cliente puede solicitar en el formulario. */
export type ServiceOptionId =
  | 'consulta_medica'
  | 'urgencias'
  | 'vacunacion'
  | 'desparasitacion'
  | 'cirugia'
  | 'grooming'
  | 'hotel'
  | 'guarderia'
  | 'pasadia';

/** Ficha completa de un servicio, usada en la sección "Servicios". */
export interface ServiceInfo {
  id: ServiceOptionId;
  category: ServiceCategory;
  name: string;
  shortDescription: string;
  description: string;
  benefits: string[];
  approximateDurationMinutes: number;
  price: number; // valor antes de IVA, en COP
  imageGradient: string; // gradiente CSS usado como placeholder visual del servicio
  recommendation: string; // recomendación mostrada tras solicitar el servicio
}
