import { useState } from 'react';
import { MainLayout } from '@/layouts/MainLayout';
import { ServicesGrid } from '@components/services/ServicesGrid';
import { AboutSection } from '@components/about/AboutSection';
import { ReviewsCarousel } from '@components/reviews/ReviewsCarousel';
import { BookingSection } from '@components/booking/BookingSection';
import { ContactSection } from '@components/contact/ContactSection';
import type { ServiceOptionId } from '@/types/service.types';

/**
 * Página principal (única página en esta etapa). Al hacer clic en "Solicitar"
 * en una tarjeta de servicio, se preselecciona ese servicio en el formulario
 * y se hace scroll suave hasta la sección de registro.
 */
export const HomePage = () => {
  const [preselectedServiceId, setPreselectedServiceId] = useState<ServiceOptionId | undefined>();

  const handleRequestService = (serviceId: ServiceOptionId) => {
    setPreselectedServiceId(serviceId);
    document.getElementById('reserva')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <MainLayout>
      <ServicesGrid onRequestService={handleRequestService} />
      <AboutSection />
      <ReviewsCarousel />
      <BookingSection preselectedServiceId={preselectedServiceId} />
      <ContactSection />
    </MainLayout>
  );
};
