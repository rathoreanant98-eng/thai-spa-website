import type { Metadata } from 'next';
import { PolicyPageLayout } from '@/components/policy-page-layout';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Privacy information for appointment requests and spa communications.',
};

export default function PrivacyPage() {
  return (
    <PolicyPageLayout
      eyebrow="Legal"
      title="Privacy Policy"
      intro="A clear account of the information used to handle appointment requests and communicate with guests."
      status="The final business data practices, analytics tools, booking channels and privacy contact details still need to be confirmed before public launch."
      sections={[
        {
          title: 'Information collected',
          body: <p>The booking experience is designed to collect the details needed to prepare an appointment request: name, mobile number, treatment preference, preferred date and time, guest count and any optional notes you choose to provide.</p>,
        },
        {
          title: 'How information is used',
          body: <p>Once the final booking channel is configured, submitted information should be used only for appointment handling, guest communication and legitimate business administration as described in the finalized policy.</p>,
        },
        {
          title: 'Third-party services',
          body: <p>Any final use of WhatsApp, analytics, maps, advertising tools or other third-party services must be documented here accurately, including the relevant data-handling information and links.</p>,
        },
        {
          title: 'Retention and contact',
          body: <p>The business owner must confirm how long booking information is retained, how deletion or access requests are handled and which contact details should be used for privacy enquiries.</p>,
        },
      ]}
    />
  );
}
