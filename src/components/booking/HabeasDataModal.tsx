import { Modal } from '@components/common/Modal';

interface HabeasDataModalProps {
  isOpen: boolean;
  onClose: () => void;
}

/** Modal explicativo de la Ley de Habeas Data de Colombia (Ley 1581 de 2012). */
export const HabeasDataModal = ({ isOpen, onClose }: HabeasDataModalProps) => (
  <Modal isOpen={isOpen} onClose={onClose} title="Tratamiento de datos personales">
    <div className="space-y-3 text-sm text-petrol/80 dark:text-cream/80 leading-relaxed">
      <p>
        En Colombia, la <strong>Ley 1581 de 2012</strong> y el <strong>Decreto 1377 de 2013</strong> (conocidas como
        Ley de Habeas Data) protegen tu derecho a conocer, actualizar y controlar la información personal que
        entregas a las empresas.
      </p>
      <p>
        Los datos que nos compartas (tuyos y de tu mascota) se usarán <strong>únicamente</strong> para gestionar tu
        solicitud de servicio, generar tu orden y contactarte sobre tu cita. No serán vendidos ni compartidos con
        terceros ajenos a la prestación de este servicio.
      </p>
      <p>
        Puedes solicitar en cualquier momento conocer, actualizar, rectificar o eliminar tus datos escribiéndonos a
        nuestros canales de contacto oficiales.
      </p>
    </div>
  </Modal>
);
