/**
 * Configuración global del sitio: datos de la empresa, contacto y notificaciones.
 * Centralizado aquí para que cualquier cambio (correo, WhatsApp, dirección)
 * se haga en un solo lugar.
 */
export const siteConfig = {
  brandName: 'Clínica Veterinaria',
  tagline: 'Cuidamos a tu mascota como familia',
  yearsOfExperience: 10,
  ivaRate: 0.19,

  notificationEmail: 'simoninnovagro@gmail.com',
  whatsappCommercialNumber: '573204557785', // +57 320 455 7785, formato internacional sin signos

  contact: {
    contactPersonName: 'Cristina Otero',
    contactPersonPhone: '3204557786',
    mainAddress: 'Kilómetro 5 vía San Jorge',
    branchAddress: 'Calle 12 #20-23, Barrio Villa María, Zipaquirá',
    mapEmbedQuery: 'Zipaquir%C3%A1%2C%20Cundinamarca%2C%20Colombia',
  },

  footer: {
    schedule: 'Lun. a Sáb. 8:00 a.m. – 6:00 p.m.',
    developedBy: 'Simón Touzard Restrepo',
    versionLabel: 'Versión Beta',
  },
} as const;
