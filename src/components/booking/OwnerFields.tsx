import type { UseFormRegister, FieldErrors } from 'react-hook-form';
import type { BookingSchemaType } from '@/validation/bookingSchema';

interface OwnerFieldsProps {
  register: UseFormRegister<BookingSchemaType>;
  errors: FieldErrors<BookingSchemaType>;
}

/** Campos del propietario: nombre, documento, celular, correo, dirección y ciudad. */
export const OwnerFields = ({ register, errors }: OwnerFieldsProps) => (
  <fieldset className="space-y-4">
    <legend className="text-sm font-bold text-emerald mb-2">Datos del propietario</legend>

    <div className="grid sm:grid-cols-2 gap-4">
      <div>
        <label className="field-label" htmlFor="owner.fullName">Nombre completo</label>
        <input id="owner.fullName" className="input-base" {...register('owner.fullName')} />
        {errors.owner?.fullName && <p className="field-error">{errors.owner.fullName.message}</p>}
      </div>
      <div>
        <label className="field-label" htmlFor="owner.documentId">Documento</label>
        <input id="owner.documentId" className="input-base" {...register('owner.documentId')} />
        {errors.owner?.documentId && <p className="field-error">{errors.owner.documentId.message}</p>}
      </div>
    </div>

    <div className="grid sm:grid-cols-2 gap-4">
      <div>
        <label className="field-label" htmlFor="owner.phone">Celular</label>
        <input id="owner.phone" type="tel" className="input-base" {...register('owner.phone')} />
        {errors.owner?.phone && <p className="field-error">{errors.owner.phone.message}</p>}
      </div>
      <div>
        <label className="field-label" htmlFor="owner.email">Correo</label>
        <input id="owner.email" type="email" className="input-base" {...register('owner.email')} />
        {errors.owner?.email && <p className="field-error">{errors.owner.email.message}</p>}
      </div>
    </div>

    <div className="grid sm:grid-cols-2 gap-4">
      <div>
        <label className="field-label" htmlFor="owner.address">Dirección</label>
        <input id="owner.address" className="input-base" {...register('owner.address')} />
        {errors.owner?.address && <p className="field-error">{errors.owner.address.message}</p>}
      </div>
      <div>
        <label className="field-label" htmlFor="owner.city">Ciudad</label>
        <input id="owner.city" className="input-base" {...register('owner.city')} />
        {errors.owner?.city && <p className="field-error">{errors.owner.city.message}</p>}
      </div>
    </div>
  </fieldset>
);
