'use client';

import Link from 'next/link';
import { Phone, MessageCircle, CalendarDays } from 'lucide-react';
import { business } from '@/data/business';
import { isConfigured } from '@/lib/config';

export function MobileActionBar() {
  const phoneReady = isConfigured(business.phone);
  const whatsappReady = isConfigured(business.whatsAppNumber);
  const actionCount = 1 + Number(phoneReady) + Number(whatsappReady);

  return (
    <div className={`mobile-action-bar action-count-${actionCount}`} aria-label="Quick booking actions">
      {phoneReady ? <a href={`tel:${business.phone}`}><Phone size={18}/><span>Call</span></a> : null}
      {whatsappReady ? <a href={`https://wa.me/${business.whatsAppNumber.replace(/\D/g, '')}`}><MessageCircle size={18}/><span>WhatsApp</span></a> : null}
      <Link href="/contact/#book"><CalendarDays size={18}/><span>Reserve</span></Link>
    </div>
  );
}
