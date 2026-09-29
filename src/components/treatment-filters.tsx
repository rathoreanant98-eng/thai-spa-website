'use client';

import { useState } from 'react';
import { treatments, treatmentFilters } from '@/data/treatments';
import { TreatmentCard } from './treatment-card';

export function TreatmentFilters() {
  const [filter, setFilter] = useState<(typeof treatmentFilters)[number]>('All Treatments');
  const filtered = filter === 'All Treatments' ? treatments : treatments.filter(treatment => treatment.discoveryTags.includes(filter));

  return <div className="treatment-browser">
    <div className="filter-toolbar">
      <div className="filter-row" role="group" aria-label="Filter therapies">
        {treatmentFilters.map(item => <button type="button" key={item} className={filter === item ? 'is-active' : ''} aria-pressed={filter === item} onClick={() => setFilter(item)}>{item}</button>)}
      </div>
      <p className="filter-count" aria-live="polite">{String(filtered.length).padStart(2, '0')} experiences</p>
    </div>
    <div className="therapy-grid">{filtered.map((treatment, index) => <TreatmentCard key={treatment.slug} treatment={treatment} feature={index === 0 || index === 4}/>)}</div>
  </div>;
}
