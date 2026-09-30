import Link from 'next/link';
import { ArrowDown } from 'lucide-react';

const guidePoints = [
  ['01', 'Arrive unhurried'],
  ['02', 'Share preferences'],
  ['03', 'Adjust anytime'],
];

export function SpaGuideHero() {
  return (
    <section className="spa-guide-hero" aria-labelledby="spa-guide-hero-title">
      <div className="spa-guide-hero-media" aria-hidden="true">
        <img
          src="/visuals/spa-guide-hero.webp"
          alt=""
          loading="eager"
          fetchPriority="high"
          decoding="async"
        />
      </div>

      <div className="site-container spa-guide-hero-shell">
        <div className="spa-guide-hero-copy">
          <nav className="spa-guide-breadcrumb" aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span aria-hidden="true">/</span>
            <span aria-current="page">Spa Guide</span>
          </nav>

          <div className="spa-guide-hero-index">
            <span>06</span>
            <span>Before your visit</span>
          </div>

          <h1 id="spa-guide-hero-title">
            <span>Calm starts</span>
            <em>with clarity.</em>
          </h1>

          <p className="spa-guide-hero-lead">
            Arrive without rushing, share what feels comfortable and know that pressure, temperature and pace can be adjusted throughout your visit.
          </p>

          <div className="spa-guide-hero-points" aria-label="Before your visit essentials">
            {guidePoints.map(([number, label]) => (
              <span key={number}><small>{number}</small>{label}</span>
            ))}
          </div>

          <Link className="spa-guide-hero-scroll" href="#spa-guide-content">
            Read the spa guide <ArrowDown size={14} />
          </Link>
        </div>
      </div>
    </section>
  );
}
