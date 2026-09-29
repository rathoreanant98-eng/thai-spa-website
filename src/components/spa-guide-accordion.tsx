'use client';

import { useState } from 'react';
import { Plus } from 'lucide-react';
import { spaGuide } from '@/data/spa-guide';

export function SpaGuideAccordion({ limit }: { limit?: number }) {
  const [open, setOpen] = useState<number | null>(0);
  const items = limit ? spaGuide.slice(0, limit) : spaGuide;
  return <div className="accordion guide-accordion">{items.map((item,index) => {
    const expanded = open === index;
    const panelId = `guide-${index}`;
    return <div className="accordion-item" key={item.title}>
      <h3><button type="button" aria-expanded={expanded} aria-controls={panelId} onClick={() => setOpen(expanded ? null : index)}><span className="guide-accordion-number">{String(index+1).padStart(2,'0')}</span><span className="guide-accordion-title">{item.title}</span><Plus className={expanded ? 'rotate' : ''} size={19}/></button></h3>
      <div id={panelId} className={`accordion-panel ${expanded ? 'is-open' : ''}`}><p>{item.body}</p></div>
    </div>;
  })}</div>;
}
