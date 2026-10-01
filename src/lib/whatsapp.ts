import { business } from '@/data/business';
import { isConfigured } from '@/lib/config';

export const defaultWhatsAppBookingMessage =
  "Hello, I'd like to reserve a spa session. Please share the available treatments and timings.";

export function getWhatsAppBookingUrl(message = defaultWhatsAppBookingMessage) {
  if (!isConfigured(business.whatsAppNumber)) return '/contact/#book';

  const number = business.whatsAppNumber.replace(/\D/g, '');
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}

export function getTreatmentWhatsAppUrl(treatmentName: string) {
  return getWhatsAppBookingUrl(
    `Hello, I'd like to book ${treatmentName}. Please share the available dates and timings.`,
  );
}
