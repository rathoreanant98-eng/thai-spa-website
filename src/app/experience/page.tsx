import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { ExperienceHero } from '@/components/experience-hero';
import { SectionHeading } from '@/components/section-heading';

export const metadata: Metadata = {
  title: 'Experience',
  description: 'Discover the personalization, atmosphere and professional standards shaping a considered Thai-inspired wellness experience.',
};

const principles = [
  ['01', 'Listen first', 'Pressure, pace, temperature and areas to avoid should be easy to discuss before the treatment begins.'],
  ['02', 'Protect the quiet', 'A calmer experience comes from considered pacing, clear communication and fewer unnecessary interruptions.'],
  ['03', 'Respect the guest', 'Professional boundaries, discretion and comfort are part of the service—not optional extras.'],
  ['04', 'Adjust in the moment', 'Preferences can change once a treatment begins. Guests should feel comfortable asking for an adjustment.'],
  ['05', 'Keep it composed', 'Presentation matters most when it supports cleanliness, order and ease rather than decoration for its own sake.'],
  ['06', 'Finish unhurried', 'The close of the session should feel as considered as the beginning, with time to reorient before leaving.'],
];

export default function ExperiencePage() {
  return <>
    <ExperienceHero />
    <section className="page-section experience-manifesto"><div className="site-container experience-manifesto-grid">
      <p className="experience-manifesto-statement">A sanctuary is not a list of amenities. It is the feeling that every detail has been considered before you need to ask.</p>
      <div className="experience-manifesto-copy"><p>The experience begins with listening. A guest should be able to share the pressure they prefer, what they want from the session and anything that would make the treatment more comfortable.</p><p>From there, the best service becomes quieter: professional, responsive and present without feeling performative.</p></div>
    </div></section>
    <section className="page-section stone-section" id="experience-principles"><div className="site-container">
      <SectionHeading eyebrow="Six principles" title="Small details. Consistent care." intro="The premium feeling is created through standards that support comfort, discretion and a sense of calm."/>
      <div className="experience-principles">{principles.map(([number,title,copy]) => <article className="experience-principle" key={number}><span>{number}</span><h3>{title}</h3><p>{copy}</p></article>)}</div>
    </div></section>
    <section className="immersive-banner experience-immersive"><img src="/visuals/sanctuary.svg" alt=""/><div className="site-container immersive-content"><div><p className="eyebrow">Quiet hospitality</p><h2 className="display-title">Nothing rushed. Nothing performative.</h2></div><p>From the first conversation to the final quiet minutes, the service should feel measured, respectful and easy to understand.</p></div></section>
    <section className="page-section"><div className="site-container">
      <SectionHeading eyebrow="The guest journey" title="One continuous rhythm." />
      <div className="ritual-steps">{[['01','ARRIVE','Leave enough room to settle and share preferences without rushing.'],['02','PERSONALIZE','Agree on treatment style, pressure, pacing and comfort.'],['03','RESTORE','Let the session unfold with clear communication when needed.'],['04','RETURN','Finish slowly and take a moment before stepping back into the day.']].map(([n,t,d]) => <div className="ritual-step" key={n}><span className="step-number">{n}</span><h3>{t}</h3><p>{d}</p></div>)}</div>
      <div className="experience-cta-row"><Link className="button button-dark" href="/therapies/">Explore therapies <ArrowUpRight size={15}/></Link><Link className="text-link" href="/contact/#book">Request an appointment <ArrowUpRight size={14}/></Link></div>
    </div></section>
  </>;
}
