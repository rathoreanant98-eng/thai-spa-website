export type Promotion = {
  id: string;
  title: string;
  description: string;
  active: boolean;
  bookingLabel: string;
};

// Intentionally empty until the business owner confirms a real offer.
export const promotions: Promotion[] = [];
