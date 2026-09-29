'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { treatments } from '@/data/treatments';

const goals = ['Relaxation', 'Strong Pressure', 'Stretching & Mobility', 'Couples Experience', 'Warm Stone Experience', 'Steam Ritual', 'Jacuzzi Experience'] as const;
const pressures = ['Gentle', 'Medium', 'Firm'] as const;
const times = [60, 90, 120] as const;

function scoreTreatment(tags: string[], pressure: string, duration: number, goal: string, treatmentPressure: string, durations: number[]) {
  let score = 0;
  const goalTag: Record<string, string> = {
    'Relaxation': 'Relaxation',
    'Strong Pressure': 'Deep Pressure',
    'Stretching & Mobility': 'Thai & Stretch',
    'Couples Experience': 'Couples',
    'Warm Stone Experience': 'Hot Stone',
    'Steam Ritual': 'Hammam',
    'Jacuzzi Experience': 'Hydro / Jacuzzi',
  };

  if (tags.includes(goalTag[goal])) score += 5;
  if (durations.includes(duration)) score += 3;
  if (pressure === 'Gentle' && /Gentle|Personalized/.test(treatmentPressure)) score += 2;
  if (pressure === 'Medium' && /Medium|Personalized/.test(treatmentPressure)) score += 2;
  if (pressure === 'Firm' && /Firm|Personalized/.test(treatmentPressure)) score += 2;
  return score;
}

export function TreatmentFinder() {
  const [goal, setGoal] = useState<(typeof goals)[number]>('Relaxation');
  const [pressure, setPressure] = useState<(typeof pressures)[number]>('Medium');
  const [time, setTime] = useState<(typeof times)[number]>(60);

  const results = useMemo(
    () => treatments
      .map(treatment => ({
        ...treatment,
        score: scoreTreatment(treatment.discoveryTags, pressure, time, goal, treatment.pressureLevel, treatment.durationOptions),
      }))
      .sort((a, b) => b.score - a.score || a.name.localeCompare(b.name))
      .slice(0, 3),
    [goal, pressure, time],
  );

  return (
    <div className="finder-shell">
      <div className="finder-controls">
        <fieldset>
          <legend>01 — What are you looking for?</legend>
          <div className="choice-grid">
            {goals.map(item => <button type="button" key={item} aria-pressed={goal === item} onClick={() => setGoal(item)} className={goal === item ? 'is-selected' : ''}>{item}</button>)}
          </div>
        </fieldset>

        <fieldset>
          <legend>02 — Preferred pressure?</legend>
          <div className="choice-grid compact">
            {pressures.map(item => <button type="button" key={item} aria-pressed={pressure === item} onClick={() => setPressure(item)} className={pressure === item ? 'is-selected' : ''}>{item}</button>)}
          </div>
        </fieldset>

        <fieldset>
          <legend>03 — How much time do you have?</legend>
          <div className="choice-grid compact">
            {times.map(item => <button type="button" key={item} aria-pressed={time === item} onClick={() => setTime(item)} className={time === item ? 'is-selected' : ''}>{item} min</button>)}
          </div>
        </fieldset>
      </div>

      <div className="finder-results" aria-live="polite" aria-atomic="true">
        <p className="eyebrow">Based on your preferences</p>
        <h3>Three experiences to explore.</h3>
        <p className="finder-note">This preference finder is not medical advice. Comfort, pressure and suitability should still be discussed before a session.</p>
        <div>
          {results.map((item, index) => (
            <Link key={item.slug} href={`/therapies/${item.slug}/`} className="finder-result">
              <span>0{index + 1}</span>
              <div><strong>{item.name}</strong><small>{item.durationOptions.join(' / ')} min · {item.pressureLevel}</small></div>
              <ArrowUpRight size={17}/>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
