'use client';

import { useState } from 'react';
import { treatments, treatmentFilters } from '@/data/treatments';
import { TreatmentCard } from './treatment-card';

export function TreatmentFilters() {
  const [filter, setFilter] = useState<(typeof treatmentFilters)[number]>('All Treatments');
  const filtered = filter === 'All Treatments' ? treatments : treatments.filter(t => t.discoveryTags.includes(filter));
  return (
    <div>
      <div className="filter-row" role="group" aria-label="Filter therapies">
        {treatmentFilters.map(item => <button key={item} className={filter === item ? 'is-active' : ''} onClick={() => setFilter(item)}>{item}</button>)}
      </div>
      <div className="therapy-grid">
        {filtered.map((treatment, index) => <TreatmentCard key={treatment.slug} treatment={treatment} feature={index === 0 || index === 4}/>) }
      </div>
    </div>
  );
}
