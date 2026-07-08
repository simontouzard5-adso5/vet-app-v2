import type { OrderPricing } from '@/types/order.types';
import { siteConfig } from '@/config/siteConfig';

/**
 * Calcula el desglose de precios (subtotal, IVA y total) para un servicio.
 * Centralizado para que el cálculo sea idéntico en el resumen en pantalla,
 * la orden y el PDF.
 */
export const calculatePricing = (basePrice: number): OrderPricing => {
  const ivaRate = siteConfig.ivaRate;
  const ivaValue = Math.round(basePrice * ivaRate);
  const total = basePrice + ivaValue;
  return { subtotal: basePrice, ivaRate, ivaValue, total };
};
