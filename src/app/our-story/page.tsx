import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { LuxuryInnerHero } from '@/components/luxury-inner-hero';
import { SectionHeading } from '@/components/section-heading';

export const metadata: Metadata = {
  title: 'Our Story',
  description: 'The point of view behind a considered Thai-inspired wellness experience built around attention, comfort and professional care.',
};

const values = [
  ['01', 'Listen first', 'The treatment starts with what the guest prefers rather than a fixed idea of what relaxation should feel like.'],
  ['02', 'Move with intention', 'Thai-inspired craft, pressure and pacing should feel deliberate rather than hurried or mechanical.'],
  ['03', 'Respect the guest', 'Privacy, comfort and professional boundaries shape the experience from beginning to end.'],
];

export default function OurStoryPage() {
  return <>
    <LuxuryInnerHero index="04" eyebrow="Our point of view" title="Wellness begins with attention." intro="The philosophy is simple: listen carefully, work with intention and create enough quiet for the guest to settle into the experience." image="/visuals/sanctuary.svg" />
    <section className="page-section story-opening"><div className="site-container page-intro-grid"><p className="lead">Thai-inspired wellness is most compelling when treatment craft, hospitality and personal comfort are treated with equal respect.</p><div className="copy"><p>There is no single pressure, pace or ritual that suits everyone. The starting point is a conversation about what you enjoy, what you would rather avoid and how you want the session to feel.</p><p>The environment should support the same idea: considered light, clear communication, an uncluttered sense of order and service that remains professional throughout.</p></div></div></section>
    <section className="page-section stone-section"><div className="site-container">
      <SectionHeading eyebrow="Three principles" title="A quieter definition of premium." />
      <div className="story-values">{values.map(([number,title,copy]) => <article className="story-value" key={number}><span>{number}</span><h3>{title}</h3><p>{copy}</p></article>)}</div>
    </div></section>
    <section className="page-section"><div className="site-container editorial-split story-editorial">
      <div className="editorial-image"><img src="/visuals/gallery-2.svg" alt="" loading="lazy"/></div>
      <div className="editorial-copy"><SectionHeading eyebrow="The approach" title="Personal, private and intentionally unhurried."/><p className="body-copy">The strongest luxury experiences rarely need to announce themselves. They are felt in consistency: careful preparation, respectful service and the freedom to personalize what matters to you.</p><div className="attribute-list">{['Thai-inspired treatment craft','Personalized pressure and pace','Respectful professional boundaries','A calm sensory approach','Clear, considered communication'].map((item,index) => <div key={item}><span>0{index+1}</span>{item}</div>)}</div></div>
    </div></section>
    <section className="page-section dark-section"><div className="site-container text-center"><SectionHeading invert align="center" eyebrow="Continue" title="Find the treatment that fits your pace."/><div className="mt-8"><Link className="button button-gold" href="/therapies/">Explore therapies <ArrowUpRight size={15}/></Link></div></div></section>
  </>;
}
