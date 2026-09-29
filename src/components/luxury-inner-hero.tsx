type LuxuryInnerHeroProps = {
  eyebrow: string;
  title: string;
  intro: string;
  image: string;
  index?: string;
};

export function LuxuryInnerHero({ eyebrow, title, intro, image, index = '02' }: LuxuryInnerHeroProps) {
  return (
    <section className="luxury-inner-hero">
      <div className="luxury-inner-media" aria-hidden="true"><img src={image} alt="" /></div>
      <div className="site-container luxury-inner-content">
        <div className="luxury-inner-index"><span>{index}</span><span>{eyebrow}</span></div>
        <h1>{title}</h1>
        <div className="luxury-inner-intro"><span className="luxury-inner-rule" aria-hidden="true" /><p>{intro}</p></div>
      </div>
    </section>
  );
}
