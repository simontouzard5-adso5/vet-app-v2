/**
 * Interfaz de un miembro del equipo veterinario, usada en "Quiénes Somos".
 */
export interface TeamMember {
  id: string;
  fullName: string;
  role: string;
  university: string;
  bio: string;
  initials: string;
}
