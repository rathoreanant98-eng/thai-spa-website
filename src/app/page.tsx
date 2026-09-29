import Link from 'next/link';
import { ArrowUpRight, Leaf, LockKeyhole, ShieldCheck, Sparkles, UserRoundCheck, Waves } from 'lucide-react';
import { business } from '@/data/business';
import { treatments } from '@/data/treatments';
import { isConfigured } from '@/lib/config';
import { MotionReveal } from '@/components/motion-reveal';
import { SectionHeading } from '@/components/section-heading';
import { TreatmentCard } from '@/components/treatment-card';
import { TreatmentFinder } from '@/components/treatment-finder';
import { GalleryGrid } from '@/components/gallery-grid';
import { SpaGuideAccordion } from '@/components/spa-guide-accordion';

const featured = treatments.filter(treatment => treatment.featured).slice(0, 6);
const signature = treatments.find(treatment => treatment.slug === 'signature')!;
const couples = treatments.find(treatment => treatment.slug === 'couples-therapy')!;
const hydro = treatments.find(treatment => treatment.slug === 'oil-jacuzzi')!;

export default function HomePage() {
  return (
    <>
      <section className="hero">
        <div className="hero-media"><img src="/visuals/hero.svg" alt="Decorative botanical-inspired wellness artwork" /></div>
        <div className="site-container hero-content">
          <div className="hero-copy">
            <p className="eyebrow">Premium Thai Wellness • {business.city}</p>
            <h1><span>A Moment Away.</span><span>A World Within.</span></h1>
            <p className="hero-sub">Personalized Thai-inspired wellness in a calm, private setting—designed around your preferred pressure, pace and way of unwinding.</p>
            <div className="hero-actions">
              <Link className="button button-gold" href="/therapies/">Explore Therapies <ArrowUpRight size={16}/></Link>
              <Link className="button button-outline" href="/contact/#book">Book Your Experience</Link>
            </div>
          </div>
          <div className="hero-trust" aria-label="Spa experience highlights">
            <div>Hours confirmed before launch</div><div>Private treatment setting</div><div>Professional service standards</div><div>Easy WhatsApp booking</div>
          </div>
        </div>
        <span className="hero-scroll">Scroll to discover</span>
      </section>

      <section className="page-section">
        <div className="site-container editorial-split">
          <MotionReveal className="editorial-image"><img src="/visuals/sanctuary.svg" alt="Abstract editorial wellness artwork" loading="lazy"/><span className="image-note">Temporary editorial artwork — replace with authentic spa photography before final launch.</span></MotionReveal>
          <MotionReveal className="editorial-copy" delay={100}>
            <p className="eyebrow">Our Philosophy</p>
            <h2 className="display-title">Wellness feels different when every detail feels considered.</h2>
            <p className="body-copy">The experience is built around calm hospitality rather than a one-size-fits-all treatment. Pressure, aroma, temperature and pace can be discussed before the session so the visit feels personal from the beginning.</p>
            <div className="attribute-list">
              {['Personalized Wellness','Private Treatment Spaces','Natural Oils & Botanicals','Professional Care','Calm & Hygienic Environment'].map((item, i) => <div key={item}><span>0{i+1}</span>{item}</div>)}
            </div>
          </MotionReveal>
        </div>
      </section>

      <section className="page-section stone-section">
        <div className="site-container">
          <MotionReveal><SectionHeading eyebrow="Featured Therapies" title="Treatments chosen for how you want to feel." intro="Begin with the kind of experience you want—quiet relaxation, stronger pressure, Thai-inspired mobility or a longer premium ritual." /></MotionReveal>
          <div className="featured-therapy-list">{featured.map((treatment, index) => <MotionReveal key={treatment.slug} delay={Math.min(index * 60, 180)}><TreatmentCard treatment={treatment}/></MotionReveal>)}</div>
          <div className="mt-12"><Link className="button button-dark" href="/therapies/">View All Therapies <ArrowUpRight size={15}/></Link></div>
        </div>
      </section>

      <section className="page-section dark-section">
        <div className="site-container">
          <MotionReveal><SectionHeading invert eyebrow="Find Your Treatment" title="Start with your preferences, not a medical promise." intro="Choose what you are looking for, your preferred pressure and how much time you have. The finder uses simple, transparent matching logic." /></MotionReveal>
          <MotionReveal delay={100}><TreatmentFinder /></MotionReveal>
        </div>
      </section>

      <section className="immersive-banner">
        <img src="/visuals/sanctuary.svg" alt="Abstract editorial sanctuary artwork" loading="lazy"/>
        <div className="site-container immersive-content">
          <div><p className="eyebrow">The Sanctuary</p><h2 className="display-title">Space to lower the volume of the day.</h2></div>
          <p>The physical experience should feel private, composed and unhurried. Final facilities—such as couples suites, steam or hydro areas—will only be presented as real once the business confirms them.</p>
        </div>
      </section>

      <section className="page-section">
        <div className="site-container">
          <SectionHeading eyebrow="Signature Experiences" title="Longer rituals. Fewer distractions." intro="Two premium experience concepts are ready in the architecture, with facility claims kept configurable until verified." />
          <div className="spotlight-grid mt-12">
            <article className="spotlight-card"><img src={signature.image} alt="" loading="lazy"/><div className="spotlight-content"><p className="eyebrow">Signature</p><h3>{signature.name}</h3><p>{signature.shortDescription}</p><Link className="text-link light-link" href={`/therapies/${signature.slug}/`}>Explore ritual <ArrowUpRight size={15}/></Link></div></article>
            <article className="spotlight-card"><img src={hydro.image} alt="" loading="lazy"/><div className="spotlight-content"><p className="eyebrow">Hydro Experience</p><h3>{hydro.name}</h3><p>{hydro.shortDescription}</p><Link className="text-link light-link" href={`/therapies/${hydro.slug}/`}>Explore experience <ArrowUpRight size={15}/></Link></div></article>
          </div>
          <div className="spotlight-grid mt-[2px]">
            <article className="spotlight-card"><img src={couples.image} alt="" loading="lazy"/><div className="spotlight-content"><p className="eyebrow">For Two</p><h3>{couples.name}</h3><p>{couples.shortDescription}</p><Link className="text-link light-link" href={`/therapies/${couples.slug}/`}>Explore couples <ArrowUpRight size={15}/></Link></div></article>
            <article className="spotlight-card"><img src="/visuals/ritual.svg" alt="" loading="lazy"/><div className="spotlight-content"><p className="eyebrow">Personalized</p><h3>Your pressure. Your pace.</h3><p>Preferences belong at the center of the experience, with clear boundaries, respectful service and ongoing comfort checks.</p><Link className="text-link light-link" href="/experience/">See the experience <ArrowUpRight size={15}/></Link></div></article>
          </div>
        </div>
      </section>

      <section className="page-section stone-section">
        <div className="site-container">
          <SectionHeading eyebrow="The Ritual" title="Arrival → Personalize → Restore → Renew" intro="A simple guest journey that keeps the experience calm, clear and easy to understand." />
          <div className="ritual-steps">
            {[['01','ARRIVE','Step away from the outside world and settle into the space.'],['02','PERSONALIZE','Choose treatment, pressure, aroma and comfort preferences.'],['03','RESTORE','Relax inside a private, professional treatment environment.'],['04','RENEW','Finish slowly and leave feeling refreshed rather than rushed.']].map(([n,t,d]) => <div className="ritual-step" key={n}><span className="step-number">{n}</span><h3>{t}</h3><p>{d}</p></div>)}
          </div>
        </div>
      </section>

      <section className="page-section dark-section">
        <div className="site-container">
          <SectionHeading invert eyebrow="Privacy & Professionalism" title="Trust is part of the treatment." intro="A premium spa should make standards visible without relying on invented badges, awards or qualifications." />
          <div className="trust-grid">
            {[
              [ShieldCheck,'Professional Environment','Clear service standards and respectful boundaries from arrival to departure.'],
              [LockKeyhole,'Guest Privacy','Private treatment settings and considered handling of personal preferences.'],
              [Sparkles,'Clean Treatment Spaces','Fresh linen and clean treatment spaces should be part of daily operating standards.'],
              [UserRoundCheck,'Personal Preferences','Pressure, temperature, aroma and areas to avoid can be discussed before treatment.'],
              [Leaf,'Considered Products','Natural oils and botanicals can be presented once the actual products used are confirmed.'],
              [Waves,'Zero-Tolerance Policy','Inappropriate, abusive or sexual behaviour is not part of a professional spa environment.'],
            ].map(([Icon,title,copy]) => { const I = Icon as typeof ShieldCheck; return <article className="trust-card" key={String(title)}><I size={24}/><h3>{String(title)}</h3><p>{String(copy)}</p></article>; })}
          </div>
        </div>
      </section>

      <section className="page-section">
        <div className="site-container"><SectionHeading eyebrow="Gallery Preview" title="A visual language of texture, warmth and stillness." intro="The current visuals are intentionally abstract placeholders so the website does not pretend to show facilities that have not been verified."/><GalleryGrid limit={6}/><div className="mt-10"><Link className="text-link" href="/gallery/">View full gallery <ArrowUpRight size={15}/></Link></div></div>
      </section>

      <section className="page-section stone-section">
        <div className="site-container page-intro-grid">
          <div><SectionHeading eyebrow="Before Your Visit" title="Arrive knowing what to expect." /></div>
          <div><SpaGuideAccordion limit={5}/><div className="mt-8"><Link className="text-link" href="/spa-guide/">Read the full spa guide <ArrowUpRight size={15}/></Link></div></div>
        </div>
      </section>

      <section className="page-section">
        <div className="site-container booking-layout">
          <div><SectionHeading eyebrow="Visit & Contact" title="Easy to find. Easy to book." intro="Real contact details remain centralized and will appear everywhere automatically once configured." />
            <div className="contact-facts">
              <div className="contact-fact"><span>Location</span><span>{isConfigured(business.address) ? business.address : 'Full address to be confirmed'}</span></div>
              <div className="contact-fact"><span>Hours</span><span>{isConfigured(business.openingHours) ? business.openingHours : 'Opening hours to be confirmed'}</span></div>
              <div className="contact-fact"><span>Phone</span><span>{isConfigured(business.phone) ? business.phone : 'Phone number to be confirmed'}</span></div>
            </div>
          </div>
          <div className="editorial-image !min-h-[480px]"><img src="/visuals/gallery-1.svg" alt="Abstract editorial location placeholder" loading="lazy"/></div>
        </div>
      </section>

      <section className="page-section dark-section">
        <div className="site-container text-center">
          <p className="eyebrow">Your Time, Reserved</p>
          <h2 className="display-title mx-auto">Choose the ritual. We’ll prepare the request.</h2>
          <p className="section-intro mx-auto">The booking form creates a structured appointment request and will open WhatsApp automatically once the real business number is configured.</p>
          <div className="mt-8"><Link className="button button-gold" href="/contact/#book">Request an Appointment <ArrowUpRight size={15}/></Link></div>
        </div>
      </section>
    </>
  );
}
