'use client';

import { useEffect, useRef, useState } from 'react';
import { X, ArrowUpRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { galleryItems } from '@/data/gallery';

export function GalleryGrid({ limit }: { limit?: number }) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const items = limit ? galleryItems.slice(0, limit) : galleryItems;
  const active = activeIndex === null ? null : items[activeIndex];

  function previous() { if (activeIndex !== null) setActiveIndex((activeIndex - 1 + items.length) % items.length); }
  function next() { if (activeIndex !== null) setActiveIndex((activeIndex + 1) % items.length); }

  useEffect(() => {
    if (activeIndex === null) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setActiveIndex(null);
      if (event.key === 'ArrowLeft') setActiveIndex(index => index === null ? null : (index - 1 + items.length) % items.length);
      if (event.key === 'ArrowRight') setActiveIndex(index => index === null ? null : (index + 1) % items.length);
    };
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    closeRef.current?.focus();
    return () => { window.removeEventListener('keydown', onKey); document.body.style.overflow = ''; };
  }, [activeIndex, items.length]);

  return <>
    <div className="gallery-grid">{items.map((item,index) => <button type="button" key={item.id} className={`gallery-item gallery-item-${index+1}`} onClick={() => setActiveIndex(index)} aria-label={`Open ${item.title}`}>
      <img src={item.image} alt={item.alt} loading="lazy"/><span className="gallery-caption"><small>{item.category}</small><strong>{item.title}</strong><ArrowUpRight size={18}/></span>
    </button>)}</div>
    {active ? <div className="lightbox" role="dialog" aria-modal="true" aria-label={active.title} onMouseDown={event => { if (event.target === event.currentTarget) setActiveIndex(null); }}>
      <div className="lightbox-toolbar"><span>{String((activeIndex ?? 0)+1).padStart(2,'0')} / {String(items.length).padStart(2,'0')}</span><button ref={closeRef} className="lightbox-close" onClick={() => setActiveIndex(null)} aria-label="Close image"><X size={22}/></button></div>
      <figure><div className="lightbox-image-wrap"><img src={active.image} alt={active.alt}/></div><figcaption><span>{active.category}</span><strong>{active.title}</strong><p>A visual note in the wider language of warmth, texture and stillness.</p><div className="lightbox-nav"><button type="button" onClick={previous}><ChevronLeft size={17}/> Previous</button><button type="button" onClick={next}>Next <ChevronRight size={17}/></button></div></figcaption></figure>
    </div> : null}
  </>;
}
