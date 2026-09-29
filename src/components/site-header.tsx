'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Phone, MessageCircle, ArrowUpRight } from 'lucide-react';
import { useEffect, useState } from 'react';
import { business } from '@/data/business';
import { navigation } from '@/data/navigation';
import { displayBrandName, isConfigured } from '@/lib/config';

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [compact, setCompact] = useState(false);
  const brand = displayBrandName(business.brandName);

  useEffect(() => {
    const onScroll = () => setCompact(window.scrollY > 32);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  return (
    <>
      <header className={`site-header ${compact ? 'is-compact' : ''}`}>
        <div className="site-container header-inner">
          <Link className="brand-mark" href="/" aria-label={`${brand} home`}>
            <span className="brand-kicker">Thai-inspired wellness</span>
            <span>{brand}</span>
          </Link>

          <nav className="desktop-nav" aria-label="Primary navigation">
            {navigation.map((item) => {
              const active = item.href === '/' ? pathname === '/' : pathname.startsWith(item.href.replace(/\/$/, ''));
              return <Link key={item.href} className={active ? 'active' : ''} href={item.href}>{item.label}</Link>;
            })}
          </nav>

          <div className="header-actions">
            <Link className="button button-light header-book" href="/contact/#book">
              Reserve your time <ArrowUpRight size={15} />
            </Link>
            <button className="menu-button" onClick={() => setOpen(true)} aria-label="Open menu" aria-expanded={open}>
              <Menu size={24} />
            </button>
          </div>
        </div>
      </header>

      <div className={`mobile-menu ${open ? 'is-open' : ''}`} aria-hidden={!open}>
        <div className="mobile-menu-top">
          <Link className="brand-mark text-ivory" href="/" onClick={() => setOpen(false)}>
            <span className="brand-kicker">Thai-inspired wellness</span>
            <span>{brand}</span>
          </Link>
          <button className="menu-button menu-close" onClick={() => setOpen(false)} aria-label="Close menu">
            <X size={26} />
          </button>
        </div>

        <nav className="mobile-nav" aria-label="Mobile navigation">
          {navigation.map((item, index) => (
            <Link key={item.href} href={item.href} onClick={() => setOpen(false)}>
              <span className="nav-number">{String(index + 1).padStart(2, '0')}</span>{item.label}
            </Link>
          ))}
        </nav>

        <div className="mobile-menu-actions">
          <Link className="button button-gold" href="/contact/#book" onClick={() => setOpen(false)}>Reserve your time</Link>
          <div className="mobile-contact-row">
            {isConfigured(business.phone)
              ? <a href={`tel:${business.phone}`}><Phone size={18}/> Call</a>
              : <Link href="/contact/" onClick={() => setOpen(false)}><Phone size={18}/> Enquire</Link>}
            {isConfigured(business.whatsAppNumber)
              ? <a href={`https://wa.me/${business.whatsAppNumber.replace(/\D/g, '')}`}><MessageCircle size={18}/> WhatsApp</a>
              : <Link href="/contact/#book" onClick={() => setOpen(false)}><MessageCircle size={18}/> Request</Link>}
          </div>
        </div>
      </div>
    </>
  );
}
