import type { Metadata } from 'next';
import { PolicyPageLayout } from '@/components/policy-page-layout';

export const metadata: Metadata = {
  title: 'Cancellation Policy',
  description: 'Cancellation, late-arrival, deposit and refund information for spa appointment requests.',
};

export default function CancellationPage() {
  return (
    <PolicyPageLayout
      eyebrow="Policy"
      title="Cancellation & Refunds"
      intro="A clear framework for appointment changes, cancellations, late arrivals, no-shows and any applicable refunds."
      status="The real cancellation window, deposit rules, late-arrival handling, no-show policy and refund terms still need to be supplied. No percentages, deadlines or fees have been invented."
      sections={[
        {
          title: 'Cancellations and changes',
          body: <p>Before launch, this section must state the exact notice period required to cancel or move an appointment and explain how guests should request a change.</p>,
        },
        {
          title: 'Deposits and no-shows',
          body: <p>The business owner must confirm whether deposits are required, what happens to a deposit after a late cancellation or no-show and whether any exceptions apply.</p>,
        },
        {
          title: 'Late arrivals',
          body: <p>The final policy should explain whether a late arrival shortens the scheduled treatment, whether the end time can move and how significant delays are handled.</p>,
        },
        {
          title: 'Refunds',
          body: <p>Refund eligibility, payment method and expected processing timing should be published only after those rules are confirmed by the business.</p>,
        },
      ]}
    />
  );
}
