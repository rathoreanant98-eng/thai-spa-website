'use client';

import { Phone, MessageCircle } from 'lucide-react';
import { business } from '@/data/business';
import { isConfigured } from '@/lib/config';
import { getWhatsAppBookingUrl } from '@/lib/whatsapp';

export function MobileActionBar() {
  const phoneReady = isConfigured(business.phone);
  const whatsappReady = isConfigured(business.whatsAppNumber);
  const actionCount = 1 + Number(phoneReady);

  return (
    <div className={`mobile-action-bar action-count-${actionCount}`} aria-label="Quick booking actions">
      {phoneReady ? <a href={`tel:${business.phone}`}><Phone size={18}/><span>Call</span></a> : null}
      {whatsappReady ? (
        <a href={getWhatsAppBookingUrl()} target="_blank" rel="noreferrer">
          <MessageCircle size={18}/><span>Reserve</span>
        </a>
      ) : (
        <a href="/contact/#book"><MessageCircle size={18}/><span>Reserve</span></a>
      )}
    </div>
  );
}
