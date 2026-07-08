import jsPDF from 'jspdf';
import 'jspdf-autotable';
import QRCode from 'qrcode';
import type { ServiceOrder } from '@/types/order.types';
import { formatCurrency } from '@/utils/formatCurrency';
import { siteConfig } from '@/config/siteConfig';

/**
 * Genera el PDF profesional de la Orden de Servicio / cotización.
 * Incluye logo simplificado, datos del cliente y la mascota, desglose de
 * precios, nota de estado, firma digital y un código QR con el número de
 * orden (útil para verificación rápida en recepción).
 *
 * Requiere `jspdf`, `jspdf-autotable` y `qrcode` instalados (ver package.json).
 */
export const generateOrderPdf = async (order: ServiceOrder): Promise<jsPDF> => {
  const doc = new jsPDF({ unit: 'pt', format: 'a4' });
  const pageW = doc.internal.pageSize.getWidth();
  const margin = 48;
  let y = 0;

  // ---- Encabezado ----
  doc.setFillColor(15, 61, 77); // petrol
  doc.rect(0, 0, pageW, 90, 'F');
  doc.setFillColor(15, 157, 114); // emerald
  doc.triangle(pageW * 0.72, 0, pageW, 0, pageW, 90, 'F');

  // Logo simplificado: círculo con una huella estilizada (dos óvalos + puntos)
  doc.setFillColor(255, 255, 255);
  doc.circle(margin + 23, 45, 23, 'F');
  doc.setFillColor(15, 61, 77);
  doc.ellipse(margin + 23, 50, 8, 10, 'F');
  doc.circle(margin + 14, 36, 4, 'F');
  doc.circle(margin + 32, 36, 4, 'F');
  doc.circle(margin + 9, 46, 3.2, 'F');
  doc.circle(margin + 37, 46, 3.2, 'F');

  doc.setTextColor(255, 255, 255);
  doc.setFont('helvetica', 'bold'); doc.setFontSize(17);
  doc.text(siteConfig.brandName, margin + 58, 42);
  doc.setFont('helvetica', 'normal'); doc.setFontSize(10);
  doc.text(siteConfig.tagline, margin + 58, 58);

  doc.setFontSize(10);
  doc.text(`Orden N.° ${order.orderNumber}`, pageW - margin, 38, { align: 'right' });
  doc.text(`${order.date} · ${order.time}`, pageW - margin, 52, { align: 'right' });

  y = 122;
  doc.setTextColor(20, 20, 20);

  const titulo = (t: string) => {
    doc.setFont('helvetica', 'bold'); doc.setFontSize(11); doc.setTextColor(15, 157, 114);
    doc.text(t.toUpperCase(), margin, y); doc.setTextColor(20, 20, 20); y += 16;
  };
  const parrafo = (t: string, size = 10.5, lh = 14) => {
    doc.setFont('helvetica', 'normal'); doc.setFontSize(size);
    const lines = doc.splitTextToSize(t, pageW - margin * 2);
    doc.text(lines, margin, y); y += lines.length * lh + 6;
  };

  titulo('Datos del propietario');
  parrafo(`${order.owner.fullName} · Documento: ${order.owner.documentId}`);
  parrafo(`${order.owner.phone} · ${order.owner.email}`);
  parrafo(`${order.owner.address}, ${order.owner.city}`);

  titulo('Datos de la mascota');
  parrafo(
    `${order.pet.name} · ${order.pet.species} · Raza: ${order.pet.breed} · Sexo: ${order.pet.sex}`
  );
  parrafo(
    `Edad: ${order.pet.age} · Peso: ${order.pet.weight} · Color: ${order.pet.color} · ` +
      `Esterilizada: ${order.pet.isSterilized ? 'Sí' : 'No'} · Vacunas al día: ${order.pet.hasVaccines ? 'Sí' : 'No'}`
  );
  if (order.observations) parrafo(`Observaciones: ${order.observations}`);

  titulo('Servicio solicitado');
  parrafo(order.service.name);

  titulo('Cotización');
  const rows: [string, string][] = [
    ['Valor del servicio', formatCurrency(order.pricing.subtotal)],
    [`IVA (${Math.round(order.pricing.ivaRate * 100)}%)`, formatCurrency(order.pricing.ivaValue)],
    ['TOTAL', formatCurrency(order.pricing.total)],
  ];
  // @ts-expect-error -- autoTable se registra como plugin de jsPDF en tiempo de ejecución
  doc.autoTable({
    startY: y,
    head: [['Concepto', 'Valor']],
    body: rows,
    margin: { left: margin, right: margin },
    styles: { font: 'helvetica', fontSize: 10, cellPadding: 6 },
    headStyles: { fillColor: [15, 61, 77], textColor: 255 },
    didParseCell: (data: { row: { index: number }; section: string; cell: { styles: { fontStyle: string; fontSize: number } } }) => {
      if (data.row.index === 2 && data.section === 'body') {
        data.cell.styles.fontStyle = 'bold';
        data.cell.styles.fontSize = 12;
      }
    },
  });
  // @ts-expect-error -- añadido en tiempo de ejecución por jspdf-autotable
  y = doc.lastAutoTable.finalY + 26;

  titulo('Estado de la orden');
  parrafo(`${order.status} — sujeta a confirmación por parte de nuestro equipo.`);

  // ---- Firma digital + código QR ----
  doc.setDrawColor(190, 190, 190);
  doc.line(margin, y + 30, margin + 170, y + 30);
  doc.setFont('helvetica', 'italic'); doc.setFontSize(12);
  doc.text(siteConfig.brandName, margin, y + 22);
  doc.setFont('helvetica', 'normal'); doc.setFontSize(8.5);
  doc.setTextColor(120, 120, 120);
  doc.text('Firma digital autorizada', margin, y + 42);

  try {
    const qrDataUrl = await QRCode.toDataURL(order.orderNumber, { margin: 1, width: 160 });
    doc.addImage(qrDataUrl, 'PNG', pageW - margin - 70, y - 6, 70, 70);
    doc.setFontSize(8);
    doc.text('Escanea para verificar la orden', pageW - margin - 70, y + 74, { align: 'left' });
  } catch {
    // Si la generación del QR falla (por ejemplo, sin conexión), el PDF se
    // genera igual sin el código, sin interrumpir la descarga.
  }

  const totalPages = doc.getNumberOfPages();
  for (let i = 1; i <= totalPages; i++) {
    doc.setPage(i);
    doc.setFontSize(8); doc.setTextColor(150, 150, 150);
    doc.text(
      `${siteConfig.brandName} · Orden ${order.orderNumber} · Página ${i} de ${totalPages}`,
      pageW / 2,
      820,
      { align: 'center' }
    );
  }

  return doc;
};
