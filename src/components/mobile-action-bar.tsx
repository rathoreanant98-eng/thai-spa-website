'use client';

import Link from 'next/link';
import { Phone, MessageCircle, CalendarDays } from 'lucide-react';
import { business } from '@/data/business';
import { isConfigured } from '@/lib/config';

export function MobileActionBar() {
  return (
    <div className="mobile-action-bar" aria-label="Quick booking actions">
      {isConfigured(business.phone) ? <a href={`tel:${business.phone}`}><Phone size={18}/><span>Call</span></a> : <span className="is-disabled"><Phone size={18}/><span>Call</span></span>}
      {isConfigured(business.whatsAppNumber) ? <a href={`https://wa.me/${business.whatsAppNumber.replace(/\D/g, '')}`}><MessageCircle size={18}/><span>WhatsApp</span></a> : <span className="is-disabled"><MessageCircle size={18}/><span>WhatsApp</span></span>}
      <Link href="/contact/#book"><CalendarDays size={18}/><span>Book</span></Link>
    </div>
  );
}
