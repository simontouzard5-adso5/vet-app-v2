import type { ServiceOptionId } from './service.types';

/**
 * Tipos del formulario de solicitud de servicio (propietario + mascota + servicio).
 */

export type PetSpecies = 'perro' | 'gato' | 'otro';
export type PetSex = 'macho' | 'hembra';

export interface OwnerData {
  fullName: string;
  documentId: string;
  phone: string;
  email: string;
  address: string;
  city: string;
}

export interface PetData {
  name: string;
  species: PetSpecies;
  breed: string;
  sex: PetSex;
  age: string;
  weight: string;
  color: string;
  isSterilized: boolean;
  hasVaccines: boolean;
  observations?: string;
}

export interface BookingFormValues {
  owner: OwnerData;
  pet: PetData;
  serviceId: ServiceOptionId;
  dataConsent: boolean;
}
