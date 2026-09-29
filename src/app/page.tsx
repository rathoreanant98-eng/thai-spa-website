import Link from 'next/link';
import { ArrowUpRight, LockKeyhole, ShieldCheck, Sparkles, UserRoundCheck, Waves, HeartHandshake } from 'lucide-react';
import { business } from '@/data/business';
import { treatments } from '@/data/treatments';
import { isConfigured } from '@/lib/config';
import { MotionReveal } from '@/components/motion-reveal';
import { SectionHeading } from '@/components/section-heading';
import { TreatmentCard } from '@/components/treatment-card';
import { TreatmentFinder } from '@/components/treatment-finder';
import { GalleryGrid } from '@/components/gallery-grid';

const featured = treatments.filter(treatment => treatment.featured).slice(0, 4);
const signature = treatments.find(treatment => treatment.slug === 'signature')!;
const thai = treatments.find(treatment => treatment.slug === 'thai-massage')!;

export default function HomePage() {
  return (
    <>
      <section className="hero">
        <div className="hero-media">
          <img src="/visuals/hero-spa-premium.webp" alt="" loading="eager" fetchPriority="high" decoding="async" />
        </div>

        <div className="site-container hero-content">
          <div className="hero-grid">
            <div className="hero-copy">
              <div className="hero-index"><span>01</span><span>Thai-inspired wellness</span></div>
              <h1>
                <span>A quieter</span>
                <span className="hero-title-em">kind of luxury.</span>
              </h1>
              <p className="hero-sub">
                Considered massage and wellness rituals shaped around your preferred pressure, pace and way of unwinding.
              </p>
              <div className="hero-actions">
                <Link className="button button-gold" href="/therapies/">Explore therapies <ArrowUpRight size={16}/></Link>
                <Link className="button button-outline" href="/contact/#book">Reserve your time</Link>
              </div>
            </div>

            <aside className="hero-note" aria-label="Experience priorities">
              <span>Designed around you</span>
              <ul>
                <li>Pressure</li>
                <li>Pace</li>
                <li>Comfort</li>
                <li>Privacy</li>
              </ul>
            </aside>
          </div>

          <div className="hero-trust" aria-label="Experience highlights">
            <div>Personalized preferences</div>
            <div>Professional standards</div>
            <div>Privacy-led experience</div>
            <div>Simple booking request</div>
          </div>
        </div>
        <span className="hero-scroll">Scroll to discover</span>
      </section>

      <section className="page-section philosophy-section">
        <div className="site-container philosophy-split">
          <MotionReveal className="philosophy-copy">
            <div className="philosophy-index"><span>02</span><span>Our philosophy</span></div>
            <h2 className="display-title">More than <em>a massage.</em></h2>
            <p className="body-copy">
              A considered wellness experience is shaped by more than technique. Pressure, pace, privacy and the details around the treatment all contribute to how comfortably you can unwind.
            </p>
            <div className="philosophy-principles" aria-label="Experience principles">
              {['Personalized pressure','Calm preparation','Professional care','Guest privacy'].map((item, i) => <div key={item}><span>0{i+1}</span><strong>{item}</strong></div>)}
            </div>
            <Link className="button button-dark philosophy-cta" href="/our-story/">
              Our story <ArrowUpRight size={15}/>
            </Link>
          </MotionReveal>

          <MotionReveal className="philosophy-media" delay={100}>
            <img
              src="/visuals/more-than-a-massage.webp"
              alt="Thai-inspired spa therapist preparing towels, herbal compresses and treatment details in a warm private treatment room"
              loading="lazy"
            />
            <span className="philosophy-media-note">Preparation · ritual · care</span>
          </MotionReveal>
        </div>
      </section>

      <section className="page-section stone-section">
        <div className="site-container">
          <MotionReveal>
            <SectionHeading
              eyebrow="Selected therapies"
              title="Choose by how you want the experience to feel."
              intro="From flowing relaxation to firmer, more focused pressure, each therapy begins with your preferences."
            />
          </MotionReveal>
          <div className="featured-therapy-list">
            {featured.map((treatment, index) => (
              <MotionReveal key={treatment.slug} delay={Math.min(index * 70, 210)}>
                <TreatmentCard treatment={treatment}/>
              </MotionReveal>
            ))}
          </div>
          <div className="mt-12">
            <Link className="button button-dark" href="/therapies/">Explore all therapies <ArrowUpRight size={15}/></Link>
          </div>
        </div>
      </section>

      <section className="page-section dark-section">
        <div className="site-container">
          <MotionReveal>
            <SectionHeading
              invert
              eyebrow="Find your treatment"
              title="Start with the feeling you are looking for."
              intro="Choose your preferred pressure, style and time. We’ll narrow the options to the closest fit."
            />
          </MotionReveal>
          <MotionReveal delay={100}><TreatmentFinder /></MotionReveal>
        </div>
      </section>

      <section className="immersive-banner">
        <img src="/visuals/sanctuary.svg" alt="Abstract sanctuary-inspired artwork" loading="lazy"/>
        <div className="site-container immersive-content">
          <div>
            <p className="eyebrow">The atmosphere</p>
            <h2 className="display-title">Space to lower the volume of the day.</h2>
          </div>
          <p>
            The most memorable wellness experiences are often the quietest: considered pacing, respectful service and enough room to settle before anything begins.
          </p>
        </div>
      </section>

      <section className="page-section">
        <div className="site-container">
          <SectionHeading
            eyebrow="Signature experiences"
            title="Rituals with a stronger sense of place."
            intro="Two distinct directions for guests who want either a complete house ritual or the active, grounding character of Thai-inspired bodywork."
          />
          <div className="spotlight-grid mt-12">
            <article className="spotlight-card">
              <img src={signature.image} alt="" loading="lazy"/>
              <div className="spotlight-content">
                <p className="eyebrow">House ritual</p>
                <h3>{signature.name}</h3>
                <p>{signature.shortDescription}</p>
                <Link className="text-link light-link" href={`/therapies/${signature.slug}/`}>Explore ritual <ArrowUpRight size={15}/></Link>
              </div>
            </article>
            <article className="spotlight-card">
              <img src={thai.image} alt="" loading="lazy"/>
              <div className="spotlight-content">
                <p className="eyebrow">Thai-inspired</p>
                <h3>{thai.name}</h3>
                <p>{thai.shortDescription}</p>
                <Link className="text-link light-link" href={`/therapies/${thai.slug}/`}>Explore treatment <ArrowUpRight size={15}/></Link>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="page-section stone-section">
        <div className="site-container">
          <SectionHeading
            eyebrow="The guest journey"
            title="Arrive. Personalize. Restore. Return."
            intro="A simple rhythm that keeps the experience calm, clear and easy to understand."
          />
          <div className="ritual-steps">
            {[
              ['01','ARRIVE','Leave the pace of the day outside and settle into the experience.'],
              ['02','PERSONALIZE','Share pressure, comfort and treatment preferences before the session.'],
              ['03','RESTORE','Relax into a professional treatment shaped around your chosen pace.'],
              ['04','RETURN','Finish slowly, reset and carry a little more quiet back with you.']
            ].map(([n,t,d]) => (
              <div className="ritual-step" key={n}><span className="step-number">{n}</span><h3>{t}</h3><p>{d}</p></div>
            ))}
          </div>
        </div>
      </section>

      <section className="page-section dark-section">
        <div className="site-container">
          <SectionHeading
            invert
            eyebrow="Privacy & professionalism"
            title="Trust should be visible in the experience."
            intro="A premium wellness environment is built on clear boundaries, respectful service and thoughtful attention to guest preferences."
          />
          <div className="trust-grid">
            {[
              [ShieldCheck,'Professional Environment','Clear service standards and respectful boundaries throughout the visit.'],
              [LockKeyhole,'Guest Privacy','A considered approach to personal preferences and private treatment experiences.'],
              [Sparkles,'Thoughtful Presentation','A calm environment where cleanliness and preparation are treated as essentials.'],
              [UserRoundCheck,'Personal Preferences','Pressure, temperature and areas to avoid can be discussed before treatment.'],
              [HeartHandshake,'Respectful Care','Communication and comfort remain central from arrival to departure.'],
              [Waves,'Clear Boundaries','Inappropriate, abusive or sexual behaviour has no place in a professional wellness setting.'],
            ].map(([Icon,title,copy]) => {
              const I = Icon as typeof ShieldCheck;
              return <article className="trust-card" key={String(title)}><I size={24}/><h3>{String(title)}</h3><p>{String(copy)}</p></article>;
            })}
          </div>
        </div>
      </section>

      <section className="page-section">
        <div className="site-container">
          <SectionHeading
            eyebrow="Visual atmosphere"
            title="Texture, warmth and stillness."
            intro="A curated mix of architecture, treatment ritual and close sensory detail creates a richer, more dimensional view of the wellness atmosphere."
          />
          <GalleryGrid limit={6}/>
          <div className="mt-10"><Link className="text-link" href="/gallery/">View gallery <ArrowUpRight size={15}/></Link></div>
        </div>
      </section>

      <section className="page-section stone-section">
        <div className="site-container booking-layout">
          <div>
            <SectionHeading
              eyebrow="Visit & booking"
              title="Your time should be easy to reserve."
              intro="Choose the treatment that feels right, share your preferred time and send an appointment request when you are ready."
            />
            <div className="contact-facts">
              <div className="contact-fact"><span>Location</span><span>{isConfigured(business.address) ? business.address : 'Provided with appointment confirmation'}</span></div>
              <div className="contact-fact"><span>Hours</span><span>{isConfigured(business.openingHours) ? business.openingHours : 'Choose a preferred time in your request'}</span></div>
              <div className="contact-fact"><span>Enquiries</span><span>{isConfigured(business.phone) ? business.phone : 'Use the appointment request form'}</span></div>
            </div>
            <div className="mt-8"><Link className="button button-dark" href="/contact/#book">Request an appointment <ArrowUpRight size={15}/></Link></div>
          </div>
          <div className="editorial-image !min-h-[520px]">
            <img src="/visuals/premium-detail-sensory-shot.webp" alt="Close-up spa ritual detail with warm oil, candlelight and an ornate bowl" loading="lazy"/>
          </div>
        </div>
      </section>

      <section className="page-section dark-section">
        <div className="site-container text-center">
          <p className="eyebrow">Your time, reserved</p>
          <h2 className="display-title mx-auto">Make room for a quieter hour.</h2>
          <p className="section-intro mx-auto">
            Explore the therapies, choose the experience that feels right and send an appointment request when you are ready.
          </p>
          <div className="mt-8"><Link className="button button-gold" href="/contact/#book">Reserve your time <ArrowUpRight size={15}/></Link></div>
        </div>
      </section>
    </>
  );
}
