type Props = {
  eyebrow?: string;
  title: string;
  intro?: string;
  align?: 'left' | 'center';
  invert?: boolean;
};

export function SectionHeading({ eyebrow, title, intro, align = 'left', invert = false }: Props) {
  return (
    <div className={`section-heading ${align === 'center' ? 'text-center mx-auto' : ''} ${invert ? 'text-ivory' : ''}`}>
      {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
      <h2 className="display-title">{title}</h2>
      {intro ? <p className={`section-intro ${align === 'center' ? 'mx-auto' : ''}`}>{intro}</p> : null}
    </div>
  );
}
