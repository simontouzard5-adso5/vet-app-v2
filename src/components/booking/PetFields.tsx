import type { UseFormRegister, FieldErrors } from 'react-hook-form';
import type { BookingSchemaType } from '@/validation/bookingSchema';

interface PetFieldsProps {
  register: UseFormRegister<BookingSchemaType>;
  errors: FieldErrors<BookingSchemaType>;
}

/** Campos de la mascota: nombre, especie, raza, sexo, edad, peso, color, salud. */
export const PetFields = ({ register, errors }: PetFieldsProps) => (
  <fieldset className="space-y-4">
    <legend className="text-sm font-bold text-emerald mb-2">Datos de la mascota</legend>

    <div className="grid sm:grid-cols-2 gap-4">
      <div>
        <label className="field-label" htmlFor="pet.name">Nombre</label>
        <input id="pet.name" className="input-base" {...register('pet.name')} />
        {errors.pet?.name && <p className="field-error">{errors.pet.name.message}</p>}
      </div>
      <div>
        <label className="field-label" htmlFor="pet.species">Especie</label>
        <select id="pet.species" className="input-base" {...register('pet.species')}>
          <option value="">Selecciona...</option>
          <option value="perro">Perro</option>
          <option value="gato">Gato</option>
          <option value="otro">Otro</option>
        </select>
        {errors.pet?.species && <p className="field-error">{errors.pet.species.message}</p>}
      </div>
    </div>

    <div className="grid sm:grid-cols-2 gap-4">
      <div>
        <label className="field-label" htmlFor="pet.breed">Raza</label>
        <input id="pet.breed" className="input-base" {...register('pet.breed')} />
        {errors.pet?.breed && <p className="field-error">{errors.pet.breed.message}</p>}
      </div>
      <div>
        <label className="field-label" htmlFor="pet.sex">Sexo</label>
        <select id="pet.sex" className="input-base" {...register('pet.sex')}>
          <option value="">Selecciona...</option>
          <option value="macho">Macho</option>
          <option value="hembra">Hembra</option>
        </select>
        {errors.pet?.sex && <p className="field-error">{errors.pet.sex.message}</p>}
      </div>
    </div>

    <div className="grid sm:grid-cols-3 gap-4">
      <div>
        <label className="field-label" htmlFor="pet.age">Edad</label>
        <input id="pet.age" placeholder="Ej. 2 años" className="input-base" {...register('pet.age')} />
        {errors.pet?.age && <p className="field-error">{errors.pet.age.message}</p>}
      </div>
      <div>
        <label className="field-label" htmlFor="pet.weight">Peso</label>
        <input id="pet.weight" placeholder="Ej. 8 kg" className="input-base" {...register('pet.weight')} />
        {errors.pet?.weight && <p className="field-error">{errors.pet.weight.message}</p>}
      </div>
      <div>
        <label className="field-label" htmlFor="pet.color">Color</label>
        <input id="pet.color" className="input-base" {...register('pet.color')} />
        {errors.pet?.color && <p className="field-error">{errors.pet.color.message}</p>}
      </div>
    </div>

    <div className="flex flex-wrap gap-6">
      <label className="flex items-center gap-2 text-sm">
        <input type="checkbox" className="accent-emerald" {...register('pet.isSterilized')} />
        ¿Está esterilizada?
      </label>
      <label className="flex items-center gap-2 text-sm">
        <input type="checkbox" className="accent-emerald" {...register('pet.hasVaccines')} />
        ¿Tiene vacunas al día?
      </label>
    </div>

    <div>
      <label className="field-label" htmlFor="pet.observations">Observaciones <span className="opacity-60">(opcional)</span></label>
      <textarea id="pet.observations" rows={3} className="input-base" {...register('pet.observations')} />
    </div>
  </fieldset>
);
