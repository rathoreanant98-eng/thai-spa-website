'use client';

import { useEffect, useRef, useState } from 'react';
import { X, ArrowUpRight } from 'lucide-react';
import { galleryItems } from '@/data/gallery';

export function GalleryGrid({ limit }: { limit?: number }) {
  const [active, setActive] = useState<(typeof galleryItems)[number] | null>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const items = limit ? galleryItems.slice(0, limit) : galleryItems;

  useEffect(() => {
    if (!active) return;
    const onKey = (event: KeyboardEvent) => event.key === 'Escape' && setActive(null);
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    closeRef.current?.focus();
    return () => { window.removeEventListener('keydown', onKey); document.body.style.overflow = ''; };
  }, [active]);

  return <>
    <div className="gallery-grid">{items.map((item, index) => <button key={item.id} className={`gallery-item gallery-item-${index+1}`} onClick={() => setActive(item)}>
      <img src={item.image} alt={item.alt} loading="lazy"/><span className="gallery-caption"><small>{item.category}</small><strong>{item.title}</strong><ArrowUpRight size={18}/></span>
    </button>)}</div>
    {active ? <div className="lightbox" role="dialog" aria-modal="true" aria-label={active.title} onMouseDown={(e) => { if (e.target === e.currentTarget) setActive(null); }}>
      <button ref={closeRef} className="lightbox-close" onClick={() => setActive(null)} aria-label="Close image"><X size={25}/></button>
      <figure><img src={active.image} alt={active.alt}/><figcaption><span>{active.category}</span><strong>{active.title}</strong><p>Temporary editorial artwork. Replace with authentic business photography before final launch.</p></figcaption></figure>
    </div> : null}
  </>;
}
