# Clínica Veterinaria — Web App

Aplicación web (React 19 + TypeScript + Vite + Tailwind CSS) para la solicitud
de servicios veterinarios, con generación automática de Orden de Servicio y
cotización en PDF.

## Instalación local

```bash
npm install
npm run dev
```

## Build de producción

```bash
npm run build
npm run preview   # para probar el build localmente
```

## Estructura de carpetas

```
src/
├── assets/         Recursos estáticos (iconos, imágenes futuras)
├── components/      Componentes de UI, organizados por dominio:
│   ├── common/       Button, Modal, Loader, Toast — reutilizables en todo el sitio
│   ├── layout/        Header, Footer, Navbar, ThemeToggle
│   ├── header/        Escena animada de mascotas del encabezado
│   ├── services/      Tarjeta y grid de servicios
│   ├── about/         Sección "Quiénes Somos"
│   ├── reviews/        Carrusel de reseñas
│   ├── contact/        Sección de contacto + mapa
│   └── booking/        Formulario de solicitud, modal de habeas data y resumen de orden
├── layouts/         Estructura general de página (MainLayout)
├── pages/           Páginas (HomePage; preparado para crecer a multi-página)
├── hooks/           Hooks personalizados (useTheme, useToast)
├── contexts/        Contextos de React (tema claro/oscuro, notificaciones)
├── types/           Tipos TypeScript de dominio (servicio, reserva, orden)
├── interfaces/      Interfaces de entidades (reseña, miembro del equipo)
├── services/        Lógica de negocio (cálculo de precios, construcción de orden)
├── api/             Capa de acceso a datos (mock; reemplazar por API real)
├── pdf/             Generación del PDF de la orden (jsPDF + QR)
├── emails/          Envío de correo (mock, documentado para producción)
├── whatsapp/        Notificación por WhatsApp (click-to-chat funcional + stub de API)
├── validation/      Esquemas de validación con Zod
├── utils/           Utilidades puras (formateo de moneda, fechas, consecutivos)
├── constants/       Catálogo de servicios, equipo, reseñas (fuente única de verdad)
├── config/          Configuración global del sitio (contacto, IVA, notificaciones)
├── styles/          CSS global (directivas Tailwind + clases reutilizables)
└── animations/      Variantes de Framer Motion reutilizables
```

## Lo que está simulado (mock) y cómo activarlo en producción

| Funcionalidad | Estado actual | Qué falta para producción |
|---|---|---|
| Envío de correo con PDF adjunto | Simulado en `src/emails/sendOrderEmail.ts` | Backend propio (Node/Firebase Functions) + servicio como Resend/SendGrid |
| Envío automático por WhatsApp | El botón abre WhatsApp con el mensaje ya escrito (funcional) | Para automatizarlo sin clic manual: WhatsApp Business Platform (Meta) o Twilio, ver `src/whatsapp/sendWhatsappNotification.ts` |
| Persistencia de la orden | Simulada en `src/api/mockApi.ts` | Base de datos real (Firestore, PostgreSQL, etc.) |

## Despliegue en GitHub Pages

Ver el paso a paso completo en la respuesta del asistente. Resumen: el
workflow `.github/workflows/deploy.yml` construye y publica automáticamente
en cada push a `main`, usando GitHub Actions + GitHub Pages.

---
Desarrollado por Simón Touzard Restrepo — Versión Beta
