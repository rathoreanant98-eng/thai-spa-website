'use client';

import { useState } from 'react';
import { Plus } from 'lucide-react';
import { spaGuide } from '@/data/spa-guide';

export function SpaGuideAccordion({ limit }: { limit?: number }) {
  const [open, setOpen] = useState<number | null>(0);
  const items = limit ? spaGuide.slice(0, limit) : spaGuide;
  return <div className="accordion">{items.map((item, index) => {
    const expanded = open === index;
    return <div className="accordion-item" key={item.title}>
      <h3><button aria-expanded={expanded} aria-controls={`guide-${index}`} onClick={() => setOpen(expanded ? null : index)}>{item.title}<Plus className={expanded ? 'rotate' : ''} size={19}/></button></h3>
      <div id={`guide-${index}`} className={`accordion-panel ${expanded ? 'is-open' : ''}`}><p>{item.body}</p></div>
    </div>;
  })}</div>;
}
