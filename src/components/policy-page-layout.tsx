import Link from 'next/link';

type PolicySection = {
  title: string;
  body: React.ReactNode;
};

export function PolicyPageLayout({
  eyebrow,
  title,
  intro,
  status,
  sections,
}: {
  eyebrow: string;
  title: string;
  intro: string;
  status: string;
  sections: PolicySection[];
}) {
  return (
    <>
      <section className="policy-hero" aria-labelledby="policy-page-title">
        <div className="site-container policy-hero-shell">
          <nav className="policy-breadcrumb" aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span aria-hidden="true">/</span>
            <span aria-current="page">{title}</span>
          </nav>

          <div className="policy-hero-grid">
            <div>
              <p className="policy-hero-eyebrow">{eyebrow}</p>
              <h1 id="policy-page-title">{title}</h1>
            </div>
            <p className="policy-hero-intro">{intro}</p>
          </div>
        </div>
      </section>

      <section className="policy-page">
        <div className="site-container policy-page-grid">
          <aside className="policy-status">
            <span>Publication status</span>
            <strong>Draft framework</strong>
            <p>{status}</p>
          </aside>

          <div className="policy-article">
            {sections.map((section, index) => (
              <section className="policy-section" key={section.title}>
                <span className="policy-section-number">{String(index + 1).padStart(2, '0')}</span>
                <div>
                  <h2>{section.title}</h2>
                  <div className="policy-section-body">{section.body}</div>
                </div>
              </section>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
