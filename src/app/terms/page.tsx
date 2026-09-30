import type { Metadata } from 'next';
import { PolicyPageLayout } from '@/components/policy-page-layout';

export const metadata: Metadata = {
  title: 'Terms',
  description: 'Booking, treatment and commercial terms for the spa website.',
};

export default function TermsPage() {
  return (
    <PolicyPageLayout
      eyebrow="Legal"
      title="Terms"
      intro="The commercial and service terms that apply when requesting an appointment and using this website."
      status="Final pricing, payment, eligibility, liability, booking confirmation and other business-specific terms have not yet been supplied and must be reviewed before launch."
      sections={[
        {
          title: 'Appointment requests',
          body: <p>Website submissions are appointment requests rather than confirmed bookings unless and until the spa explicitly confirms the requested treatment, date and time.</p>,
        },
        {
          title: 'Treatment information',
          body: <p>Service descriptions on this website are wellness-oriented. They are not medical diagnosis, medical treatment or a substitute for advice from an appropriate healthcare professional.</p>,
        },
        {
          title: 'Business-specific terms',
          body: <p>Confirmed prices, deposits, accepted payment methods, late-arrival rules, cancellation windows, refund conditions and facility-specific restrictions must be inserted after the business owner confirms them.</p>,
        },
        {
          title: 'Professional environment',
          body: <p>The final terms should accurately describe the professional standards, guest conduct expectations and any circumstances in which a session may be declined or ended.</p>,
        },
      ]}
    />
  );
}
