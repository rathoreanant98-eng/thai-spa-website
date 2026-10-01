export type BusinessConfig = {
  brandName: string;
  tagline: string;
  phone: string;
  whatsAppNumber: string;
  email: string;
  address: string;
  city: string;
  state: string;
  postalCode: string;
  country: string;
  openingHours: string;
  googleMapsUrl: string;
  instagramUrl: string;
  facebookUrl: string;
  bookingSettings: {
    currency: string;
    showPrices: boolean;
  };
};

export const business: BusinessConfig = {
  brandName: 'BRAND NAME',
  tagline: 'Private Thai-inspired wellness, designed around you.',
  phone: '[PHONE]',
  whatsAppNumber: '+91-7688866659',
  email: '[EMAIL]',
  address: '[FULL_ADDRESS]',
  city: '[CITY]',
  state: '[STATE]',
  postalCode: '[POSTAL_CODE]',
  country: 'India',
  openingHours: '[OPENING_HOURS]',
  googleMapsUrl: '[GOOGLE_MAP_URL]',
  instagramUrl: '[INSTAGRAM_URL]',
  facebookUrl: '[FACEBOOK_URL]',
  bookingSettings: {
    currency: 'INR',
    showPrices: false,
  },
};
