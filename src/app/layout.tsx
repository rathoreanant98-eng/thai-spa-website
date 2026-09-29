import type { Metadata, Viewport } from 'next';
import { Bodoni_Moda, Manrope } from 'next/font/google';
import './globals.css';
import { SiteHeader } from '@/components/site-header';
import { SiteFooter } from '@/components/site-footer';
import { MobileActionBar } from '@/components/mobile-action-bar';
import { StructuredData } from '@/components/structured-data';
import { business } from '@/data/business';
import { displayBrandName } from '@/lib/config';
import { getSiteUrl } from '@/lib/site-url';

const display = Bodoni_Moda({
  subsets: ['latin'],
  variable: '--font-display',
  weight: ['400', '500', '600'],
  style: ['normal', 'italic'],
  display: 'swap',
});

const body = Manrope({
  subsets: ['latin'],
  variable: '--font-body',
  weight: ['400', '500', '600'],
  display: 'swap',
});

const brand = displayBrandName(business.brandName);
const siteUrl = getSiteUrl();

export const metadata: Metadata = {
  ...(siteUrl ? { metadataBase: siteUrl } : {}),
  applicationName: brand,
  title: {
    default: `${brand} | Thai-Inspired Wellness`,
    template: `%s | ${brand}`,
  },
  description: 'Considered Thai-inspired massage and wellness experiences with personalized pressure, refined rituals and simple appointment requests.',
  robots: { index: true, follow: true },
  formatDetection: {
    telephone: false,
    email: false,
    address: false,
  },
  openGraph: {
    type: 'website',
    title: `${brand} | Thai-Inspired Wellness`,
    description: 'Considered Thai-inspired wellness experiences designed around your preferences.',
    siteName: brand,
  },
  twitter: {
    card: 'summary_large_image',
    title: `${brand} | Thai-Inspired Wellness`,
    description: 'Considered Thai-inspired wellness experiences designed around your preferences.',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#171210',
  colorScheme: 'light',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body>
        <a className="skip-link" href="#main-content">Skip to content</a>
        <StructuredData />
        <SiteHeader />
        <main id="main-content" tabIndex={-1}>{children}</main>
        <SiteFooter />
        <MobileActionBar />
      </body>
    </html>
  );
}
