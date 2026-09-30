import Link from 'next/link';
import { ArrowDown, ArrowUpRight } from 'lucide-react';

const trustItems = [
  'Personalized pressure',
  'Flexible durations',
  'Professional care',
  'Private experience',
];

export function TherapiesHero() {
  return (
    <section className="therapies-hero" aria-labelledby="therapies-hero-title">
      <div className="therapies-hero-media" aria-hidden="true">
        <img
          src="/visuals/therapies-page-hero.webp"
          alt=""
          loading="eager"
          fetchPriority="high"
          decoding="async"
        />
      </div>

      <div className="site-container therapies-hero-content">
        <nav className="therapies-breadcrumb" aria-label="Breadcrumb">
          <Link href="/">Home</Link>
          <span aria-hidden="true">/</span>
          <span aria-current="page">Therapies</span>
        </nav>

        <div className="therapies-hero-copy">
          <p className="therapies-hero-eyebrow">Our therapies</p>
          <h1 id="therapies-hero-title">
            <span>Treatments shaped around</span>
            <em>how you want to feel.</em>
          </h1>
          <p className="therapies-hero-lead">
            Explore Thai-inspired bodywork, relaxation rituals and focused treatments, then personalize the pressure, pace and duration to suit you.
          </p>

          <div className="therapies-hero-actions">
            <Link className="button button-gold therapies-primary-cta" href="/contact/#book">
              Book a session <ArrowUpRight size={15} />
            </Link>
            <Link className="button button-outline therapies-secondary-cta" href="#therapy-collection">
              Explore therapies <ArrowDown size={15} />
            </Link>
          </div>
        </div>

        <div className="therapies-hero-trust" aria-label="Therapy experience principles">
          {trustItems.map(item => <span key={item}>{item}</span>)}
        </div>
      </div>
    </section>
  );
}
