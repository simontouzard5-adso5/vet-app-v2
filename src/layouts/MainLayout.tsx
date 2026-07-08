import type { ReactNode } from 'react';
import { Header } from '@components/layout/Header';
import { Footer } from '@components/layout/Footer';
import { ToastContainer } from '@components/common/ToastContainer';

/** Layout general: header fijo con hero + contenido + footer + notificaciones. */
export const MainLayout = ({ children }: { children: ReactNode }) => (
  <div className="min-h-screen flex flex-col">
    <Header />
    <main className="flex-1">{children}</main>
    <Footer />
    <ToastContainer />
  </div>
);
