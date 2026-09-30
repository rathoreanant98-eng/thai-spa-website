import Link from 'next/link';
import { ArrowDown } from 'lucide-react';

export function ExperienceHero() {
  return (
    <section className="experience-hero" aria-labelledby="experience-hero-title">
      <div className="experience-hero-media" aria-hidden="true">
        <img
          src="/visuals/experience-page-hero.webp"
          alt=""
          loading="eager"
          fetchPriority="high"
          decoding="async"
        />
      </div>

      <div className="site-container experience-hero-shell">
        <div className="experience-hero-copy">
          <nav className="experience-breadcrumb" aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span aria-hidden="true">/</span>
            <span aria-current="page">Experience</span>
          </nav>

          <div className="experience-hero-index">
            <span>03</span>
            <span>The experience</span>
          </div>

          <h1 id="experience-hero-title">
            <span>The luxury is in what you notice—</span>
            <em>and what you don’t.</em>
          </h1>

          <p className="experience-hero-lead">
            A composed wellness experience is built from small decisions: how preferences are discussed, how the pace is set and how comfortably the visit unfolds.
          </p>

          <div className="experience-hero-principles" aria-label="Experience principles">
            <span>Pressure</span>
            <span>Pace</span>
            <span>Privacy</span>
            <span>Comfort</span>
          </div>

          <Link className="experience-hero-scroll" href="#experience-principles">
            Discover the details <ArrowDown size={14} />
          </Link>
        </div>
      </div>
    </section>
  );
}
