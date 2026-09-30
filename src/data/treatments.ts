import { business } from './business';
import { displayBrandName } from '@/lib/config';

export type PressureLevel = 'Gentle' | 'Gentle–Medium' | 'Medium' | 'Medium–Firm' | 'Firm' | 'Personalized';

export type Treatment = {
  id: string;
  slug: string;
  name: string;
  shortName: string;
  category: string;
  discoveryTags: string[];
  shortDescription: string;
  fullDescription: string;
  durationOptions: number[];
  startingPrice: number | null;
  pressureLevel: PressureLevel;
  recommendedFor: string[];
  highlights: string[];
  image: string;
  featured: boolean;
  bookingLabel: string;
  signature?: boolean;
};

export const treatments: Treatment[] = [
  {
    id: '01', slug: 'thai-massage', name: 'Traditional Thai Massage', shortName: 'Thai Massage',
    category: 'Traditional / Mobility', discoveryTags: ['Thai & Stretch'],
    shortDescription: 'Rhythmic pressure and assisted stretching for guests who enjoy an active, grounding treatment.',
    fullDescription: 'A Thai-inspired bodywork experience combining assisted stretching, rhythmic pressure and controlled movement. The session is designed to encourage relaxation, mobility and an overall sense of physical refreshment without making medical claims.',
    durationOptions: [60, 90], startingPrice: null, pressureLevel: 'Medium–Firm',
    recommendedFor: ['Guests who enjoy assisted stretching', 'Everyday muscular tension', 'A more active wellness experience'],
    highlights: ['Assisted stretching', 'Rhythmic pressure', 'Personalized pace'], image: '/visuals/traditional-thai-massage-single.webp', featured: true,
    bookingLabel: 'Book Thai Massage',
  },
  {
    id: '02', slug: 'aroma-therapy', name: 'Aroma Therapy Massage', shortName: 'Aroma Therapy',
    category: 'Relaxation', discoveryTags: ['Relaxation'],
    shortDescription: 'A gentle oil-based ritual with aromatic blends and slow, calming movements.',
    fullDescription: 'A relaxing oil-based treatment using aromatic essential-oil blends selected to create a soothing sensory environment. Gentle flowing movements are designed to help guests unwind and settle into a quieter pace.',
    durationOptions: [60, 90], startingPrice: null, pressureLevel: 'Gentle–Medium',
    recommendedFor: ['Deep relaxation', 'First-time spa guests', 'Guests who prefer lighter pressure'],
    highlights: ['Aromatic oils', 'Slow-flowing movements', 'Sensory calm'], image: '/visuals/aroma-therapy-massage-single.webp', featured: true,
    bookingLabel: 'Book Aroma Therapy',
  },
  {
    id: '03', slug: 'reflexology', name: 'Reflexology Therapy', shortName: 'Reflexology',
    category: 'Focused Wellness', discoveryTags: ['Relaxation'],
    shortDescription: 'A focused pressure-point experience for tired feet and post-travel refreshment.',
    fullDescription: 'A focused treatment primarily involving the feet, using considered pressure and massage techniques to create a calming, restorative-feeling experience. It is presented as wellness care rather than treatment for medical conditions.',
    durationOptions: [45, 60], startingPrice: null, pressureLevel: 'Medium',
    recommendedFor: ['Tired feet', 'After travel or long days', 'A focused shorter session'],
    highlights: ['Foot-focused care', 'Targeted pressure', 'Calm finish'], image: '/visuals/reflexology-therapy.webp', featured: false,
    bookingLabel: 'Book Reflexology',
  },
  {
    id: '04', slug: 'hot-stone', name: 'Thermo Stone Therapy', shortName: 'Hot Stone',
    category: 'Warmth & Relaxation', discoveryTags: ['Hot Stone', 'Relaxation'],
    shortDescription: 'Smooth heated stones and measured massage techniques for a warm, deeply relaxing experience.',
    fullDescription: 'Smooth heated stones become part of a measured massage ritual designed around warmth, comfort and deep relaxation. Temperature and pressure can be personalized throughout the experience.',
    durationOptions: [60, 90], startingPrice: null, pressureLevel: 'Medium',
    recommendedFor: ['Guests who enjoy warmth', 'Tired muscles', 'A premium sensory ritual'],
    highlights: ['Heated stones', 'Temperature preferences', 'Slow relaxation'], image: '/visuals/thermo-stone-therapy.webp', featured: false,
    bookingLabel: 'Book Hot Stone Therapy',
  },
  {
    id: '05', slug: 'swedish-massage', name: 'Classic Swedish Massage', shortName: 'Swedish Massage',
    category: 'Relaxation & Stress Relief', discoveryTags: ['Relaxation'],
    shortDescription: 'Gentle-to-medium flowing movements for comfortable, full-body relaxation.',
    fullDescription: 'A classic full-body oil massage using smooth, flowing movements at gentle-to-medium pressure. It is a comfortable choice for visitors seeking a familiar relaxation experience or their first spa treatment.',
    durationOptions: [60, 90], startingPrice: null, pressureLevel: 'Gentle–Medium',
    recommendedFor: ['Overall relaxation', 'Lighter pressure', 'First spa experience'],
    highlights: ['Flowing movements', 'Comfortable pressure', 'Full-body treatment'], image: '/visuals/classic-swedish-massage.webp', featured: false,
    bookingLabel: 'Book Swedish Massage',
  },
  {
    id: '06', slug: 'deep-tissue', name: 'Deep Tissue Massage', shortName: 'Deep Tissue',
    category: 'Deep Muscle & Recovery', discoveryTags: ['Deep Pressure'],
    shortDescription: 'Firm, controlled pressure focused on commonly tense areas such as the back, shoulders and legs.',
    fullDescription: 'A stronger-pressure massage for guests who prefer firmer, more focused work. The therapist can concentrate on commonly tense areas such as the back, shoulders, neck and legs while continually adjusting pressure to guest preference.',
    durationOptions: [60, 90], startingPrice: null, pressureLevel: 'Firm',
    recommendedFor: ['Guests who prefer stronger pressure', 'Back and shoulder focus', 'General muscular tightness'],
    highlights: ['Firm pressure', 'Focused areas', 'Pressure check-ins'], image: '/visuals/deep-tissue-massage.webp', featured: true,
    bookingLabel: 'Book Deep Tissue',
  },
  {
    id: '07', slug: 'couples-therapy', name: 'Couples Luxury Therapy', shortName: 'Couples Therapy',
    category: 'Couples', discoveryTags: ['Couples'],
    shortDescription: 'A coordinated side-by-side treatment designed for two guests to unwind together.',
    fullDescription: 'A premium side-by-side wellness experience for two guests, with coordinated therapy, personalized pressure and aromatherapy preferences. The experience is designed to feel private, polished and occasion-worthy without sexualized presentation.',
    durationOptions: [60, 90], startingPrice: null, pressureLevel: 'Personalized',
    recommendedFor: ['Two guests booking together', 'Special occasions', 'A shared relaxation experience'],
    highlights: ['Two-guest booking', 'Coordinated therapy', 'Aromatherapy options'], image: '/visuals/couples-luxury-therapy.webp', featured: true,
    bookingLabel: 'Book Couples Therapy',
  },
  {
    id: '08', slug: 'hammam', name: 'Cleansing Hammam Ritual', shortName: 'Hammam Ritual',
    category: 'Ritual / Steam', discoveryTags: ['Hammam'],
    shortDescription: 'A hammam-inspired sequence of warm steam, cleansing and exfoliation for a refreshed skin feel.',
    fullDescription: 'A premium hammam-inspired wellness ritual that can combine warm steam, cleansing and exfoliation according to the facilities actually available at the spa. The experience is positioned around comfort and refreshed-feeling skin, not detoxification claims.',
    durationOptions: [60, 90], startingPrice: null, pressureLevel: 'Gentle–Medium',
    recommendedFor: ['Ritual-led spa experiences', 'Guests who enjoy steam', 'Skin-refreshing exfoliation'],
    highlights: ['Warm steam', 'Cleansing', 'Exfoliation'], image: '/visuals/cleansing-hammam-ritual.webp', featured: false,
    bookingLabel: 'Book Hammam Ritual',
  },
  {
    id: '09', slug: 'oil-jacuzzi', name: 'Oil + Jacuzzi Sanctuary', shortName: 'Oil + Jacuzzi',
    category: 'Hydro / Premium Experience', discoveryTags: ['Hydro / Jacuzzi', 'Relaxation'],
    shortDescription: 'A longer-form premium experience combining aromatic oil massage with private hydro relaxation where available.',
    fullDescription: 'A premium combination experience designed around aromatic oils, massage and private hydro relaxation where the business confirms a Jacuzzi facility. It is intentionally configured so the facility claim can be removed if it is not part of the real operation.',
    durationOptions: [60, 90, 120], startingPrice: null, pressureLevel: 'Personalized',
    recommendedFor: ['Longer premium bookings', 'Guests seeking hydro relaxation', 'Special occasions'],
    highlights: ['Aromatic oils', 'Extended duration', 'Private hydro experience'], image: '/visuals/oil-jacuzzi-sanctuary.webp', featured: true,
    bookingLabel: 'Book Oil + Jacuzzi',
  },
  {
    id: '10', slug: 'signature', name: `Signature ${displayBrandName(business.brandName)} Ritual`, shortName: 'Signature Ritual',
    category: 'Signature', discoveryTags: ['Signature', 'Relaxation', 'Thai & Stretch', 'Hot Stone'],
    shortDescription: 'A customizable house ritual combining warmth, aroma, Thai-inspired movement and personalized pressure.',
    fullDescription: 'The house signature is designed as a distinctive combination ritual that can bring together heated stones, aromatic oils, Thai-inspired stretching and personalized pressure. Its final sequence should be aligned with the treatments the business actually offers.',
    durationOptions: [60, 90], startingPrice: null, pressureLevel: 'Personalized',
    recommendedFor: ['A complete premium experience', 'Guests who want variety in one session', 'First-time visitors seeking a signature treatment'],
    highlights: ['Signature sequence', 'Personalized pressure', 'Multiple sensory elements'], image: '/visuals/signature.svg', featured: true,
    bookingLabel: 'Book Signature Ritual', signature: true,
  },
];

export const treatmentFilters = ['All Treatments', 'Relaxation', 'Thai & Stretch', 'Deep Pressure', 'Hot Stone', 'Couples', 'Hammam', 'Hydro / Jacuzzi', 'Signature'] as const;

export function getTreatment(slug: string) {
  return treatments.find((treatment) => treatment.slug === slug);
}
