import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

export default function NotFound() {
  return (
    <section className="not-found-page" aria-labelledby="not-found-title">
      <div className="not-found-orbit" aria-hidden="true" />
      <div className="site-container not-found-shell">
        <div className="not-found-number" aria-hidden="true">404</div>

        <div className="not-found-copy">
          <div className="not-found-index">
            <span>Lost path</span>
            <span>Thai-inspired wellness</span>
          </div>

          <h1 id="not-found-title">
            <span>This path</span>
            <em>is resting.</em>
          </h1>

          <p>
            The page you were looking for is not here. Return to the main experience or continue by exploring the therapy collection.
          </p>

          <div className="not-found-actions">
            <Link className="button button-gold" href="/">
              Return home <ArrowUpRight size={15}/>
            </Link>
            <Link className="button button-outline" href="/therapies/">
              Explore therapies
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
