import type { Metadata } from 'next';
import { Cormorant_Garamond, Manrope } from 'next/font/google';
import './globals.css';
import { SiteHeader } from '@/components/site-header';
import { SiteFooter } from '@/components/site-footer';
import { MobileActionBar } from '@/components/mobile-action-bar';
import { business } from '@/data/business';

const display = Cormorant_Garamond({ subsets: ['latin'], variable: '--font-display', weight: ['400','500','600'], display: 'swap' });
const body = Manrope({ subsets: ['latin'], variable: '--font-body', weight: ['400','500','600'], display: 'swap' });

export const metadata: Metadata = {
  title: {
    default: `${business.brandName} | Premium Thai Wellness`,
    template: `%s | ${business.brandName}`,
  },
  description: 'Private Thai-inspired massage and wellness experiences with personalized pressure, refined rituals and easy appointment requests.',
  robots: { index: true, follow: true },
  openGraph: {
    type: 'website',
    title: `${business.brandName} | Premium Thai Wellness`,
    description: 'Private Thai-inspired massage and wellness experiences designed around your preferences.',
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body>
        <a className="skip-link" href="#main-content">Skip to content</a>
        <SiteHeader />
        <main id="main-content">{children}</main>
        <SiteFooter />
        <MobileActionBar />
      </body>
    </html>
  );
}
