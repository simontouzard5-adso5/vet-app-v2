import { z } from 'zod';

/**
 * Esquema de validación del formulario de solicitud de servicio.
 * Se usa con @hookform/resolvers/zod en BookingForm.tsx.
 */
export const bookingSchema = z.object({
  owner: z.object({
    fullName: z.string().min(3, 'Ingresa tu nombre completo'),
    documentId: z.string().min(5, 'Ingresa un número de documento válido'),
    phone: z.string().min(7, 'Ingresa un celular válido'),
    email: z.string().email('Ingresa un correo electrónico válido'),
    address: z.string().min(5, 'Ingresa tu dirección'),
    city: z.string().min(2, 'Ingresa tu ciudad'),
  }),
  pet: z.object({
    name: z.string().min(1, 'Ingresa el nombre de tu mascota'),
    species: z.enum(['perro', 'gato', 'otro'], { message: 'Selecciona la especie' }),
    breed: z.string().min(1, 'Ingresa la raza'),
    sex: z.enum(['macho', 'hembra'], { message: 'Selecciona el sexo' }),
    age: z.string().min(1, 'Ingresa la edad aproximada'),
    weight: z.string().min(1, 'Ingresa el peso aproximado'),
    color: z.string().min(1, 'Ingresa el color'),
    isSterilized: z.boolean(),
    hasVaccines: z.boolean(),
    observations: z.string().optional(),
  }),
  serviceId: z.enum(
    ['consulta_medica', 'urgencias', 'vacunacion', 'desparasitacion', 'cirugia', 'grooming', 'hotel', 'guarderia', 'pasadia'],
    { message: 'Selecciona un servicio' }
  ),
  dataConsent: z.boolean().refine((val) => val === true, {
    message: 'Debes aceptar el tratamiento de datos personales para continuar',
  }),
});

export type BookingSchemaType = z.infer<typeof bookingSchema>;
