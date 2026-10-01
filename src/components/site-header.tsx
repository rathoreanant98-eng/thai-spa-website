'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Phone, MessageCircle, ArrowUpRight } from 'lucide-react';
import { useCallback, useEffect, useRef, useState } from 'react';
import { business } from '@/data/business';
import { navigation } from '@/data/navigation';
import { displayBrandName, isConfigured } from '@/lib/config';
import { getWhatsAppBookingUrl } from '@/lib/whatsapp';

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [compact, setCompact] = useState(false);
  const openButtonRef = useRef<HTMLButtonElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const brand = displayBrandName(business.brandName);

  useEffect(() => {
    const onScroll = () => setCompact(window.scrollY > 84);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const closeMenu = useCallback((returnFocus = true) => {
    setOpen(false);
    if (returnFocus) requestAnimationFrame(() => openButtonRef.current?.focus());
  }, []);

  useEffect(() => {
    if (!open) {
      document.body.style.overflow = '';
      return;
    }

    document.body.style.overflow = 'hidden';
    closeButtonRef.current?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        event.preventDefault();
        closeMenu();
        return;
      }

      if (event.key !== 'Tab') return;

      const focusable = Array.from(
        menuRef.current?.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
        ) ?? [],
      ).filter(element => !element.hasAttribute('hidden'));

      if (!focusable.length) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener('keydown', onKeyDown);
    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = '';
    };
  }, [open, closeMenu]);

  return (
    <>
      <header className={`site-header ${compact ? 'is-compact' : ''}`}>
        <div className="site-container header-inner">
          <Link className="brand-mark" href="/" aria-label={`${brand} home`}>
            <span className="brand-kicker">Thai-inspired wellness</span>
            <span>{brand}</span>
          </Link>

          <nav className="desktop-nav" aria-label="Primary navigation">
            {navigation.map(item => {
              const active = item.href === '/' ? pathname === '/' : pathname.startsWith(item.href.replace(/\/$/, ''));
              return (
                <Link key={item.href} className={active ? 'active' : ''} aria-current={active ? 'page' : undefined} href={item.href}>
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="header-actions">
            <a className="button button-light header-book" href={getWhatsAppBookingUrl()} target="_blank" rel="noreferrer">
              Reserve your time <ArrowUpRight size={15} />
            </a>
            <button ref={openButtonRef} className="menu-button" onClick={() => setOpen(true)} aria-label="Open menu" aria-expanded={open} aria-controls="mobile-navigation">
              <Menu size={24} />
            </button>
          </div>
        </div>
      </header>

      <div
        ref={menuRef}
        id="mobile-navigation"
        className={`mobile-menu ${open ? 'is-open' : ''}`}
        aria-hidden={!open}
        role="dialog"
        aria-modal={open ? 'true' : undefined}
        aria-label="Site navigation"
      >
        <div className="mobile-menu-top">
          <Link className="brand-mark text-ivory" href="/" onClick={() => closeMenu(false)}>
            <span className="brand-kicker">Thai-inspired wellness</span>
            <span>{brand}</span>
          </Link>
          <button ref={closeButtonRef} className="menu-button menu-close" onClick={() => closeMenu()} aria-label="Close menu">
            <X size={26} />
          </button>
        </div>

        <nav className="mobile-nav" aria-label="Mobile navigation">
          {navigation.map((item, index) => {
            const active = item.href === '/' ? pathname === '/' : pathname.startsWith(item.href.replace(/\/$/, ''));
            return (
              <Link key={item.href} href={item.href} aria-current={active ? 'page' : undefined} onClick={() => closeMenu(false)}>
                <span className="nav-number">{String(index + 1).padStart(2, '0')}</span>{item.label}
              </Link>
            );
          })}
        </nav>

        <div className="mobile-menu-actions">
          <a className="button button-gold" href={getWhatsAppBookingUrl()} target="_blank" rel="noreferrer" onClick={() => closeMenu(false)}>Reserve your time</a>
          <div className="mobile-contact-row">
            {isConfigured(business.phone)
              ? <a href={`tel:${business.phone}`}><Phone size={18}/> Call</a>
              : <Link href="/contact/" onClick={() => closeMenu(false)}><Phone size={18}/> Enquire</Link>}
            {isConfigured(business.whatsAppNumber)
              ? <a href={getWhatsAppBookingUrl()} target="_blank" rel="noreferrer"><MessageCircle size={18}/> WhatsApp</a>
              : <Link href="/contact/#book" onClick={() => closeMenu(false)}><MessageCircle size={18}/> Request</Link>}
          </div>
        </div>
      </div>
    </>
  );
}
