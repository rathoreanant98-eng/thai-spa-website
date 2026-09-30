import Link from 'next/link';
import { ArrowDown } from 'lucide-react';

const principles = ['Listen first', 'Move with intention', 'Respect the guest'];

export function OurStoryHero() {
  return (
    <section className="story-hero" aria-labelledby="story-hero-title">
      <div className="story-hero-media" aria-hidden="true">
        <img
          src="/visuals/our-story-hero.webp"
          alt=""
          loading="eager"
          fetchPriority="high"
          decoding="async"
        />
      </div>

      <div className="site-container story-hero-shell">
        <div className="story-hero-copy">
          <nav className="story-breadcrumb" aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span aria-hidden="true">/</span>
            <span aria-current="page">Our Story</span>
          </nav>

          <div className="story-hero-index">
            <span>04</span>
            <span>Our point of view</span>
          </div>

          <h1 id="story-hero-title">
            <span>Wellness begins</span>
            <em>with attention.</em>
          </h1>

          <p className="story-hero-lead">
            Listen carefully, work with intention and create enough quiet for every guest to settle into the experience in their own way.
          </p>

          <div className="story-hero-principles" aria-label="Our principles">
            {principles.map((item, index) => (
              <span key={item}><small>0{index + 1}</small>{item}</span>
            ))}
          </div>

          <Link className="story-hero-scroll" href="#story-philosophy">
            Read our approach <ArrowDown size={14} />
          </Link>
        </div>
      </div>
    </section>
  );
}
