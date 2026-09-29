export type GalleryItem = {
  id: number;
  title: string;
  category: string;
  image: string;
  alt: string;
  motion?: boolean;
  motionProfile?: 'arrival' | 'treatment' | 'thai' | 'aroma' | 'hotstone';
};

export const galleryItems: GalleryItem[] = [
  {
    id: 1,
    title: 'Quiet Arrival',
    category: 'Arrival mood',
    image: '/visuals/reception-arrival-premium.webp',
    alt: 'Warm Thai-inspired spa arrival atmosphere with layered hospitality details',
    motion: true,
    motionProfile: 'arrival',
  },
  {
    id: 2,
    title: 'Treatment Ritual',
    category: 'Treatment atmosphere',
    image: '/visuals/treatment-room.webp',
    alt: 'Thai-inspired massage treatment scene with therapist, guest, candlelight and tropical spa surroundings',
    motion: true,
    motionProfile: 'treatment',
  },
  {
    id: 3,
    title: 'Thai Stretch Ritual',
    category: 'Traditional Thai',
    image: '/visuals/thai-massage-setup.webp',
    alt: 'Thai-inspired floor massage scene with therapist guiding a guest through an assisted stretch in a warm tropical spa setting',
    motion: true,
    motionProfile: 'thai',
  },
  {
    id: 4,
    title: 'Aromatic Oil Ritual',
    category: 'Aromatherapy',
    image: '/visuals/serene_thai_spa_massage_retreat.webp',
    alt: 'Thai-inspired aromatherapy massage with a therapist using warm oils on a male guest in a candlelit spa setting',
    motion: true,
    motionProfile: 'aroma',
  },
  {
    id: 5,
    title: 'Hot Stone Ritual',
    category: 'Thermo stone',
    image: '/visuals/hot-stone-ritual-detail.webp',
    alt: 'Thai-inspired hot stone massage with black basalt stones arranged across a male guest’s back in a warm candlelit spa setting',
    motion: true,
    motionProfile: 'hotstone',
  },
  { id: 6, title: 'Shared Ritual', category: 'For two', image: '/visuals/gallery-6.svg', alt: 'Abstract editorial wellness composition designed around two guests' },
  { id: 7, title: 'Steam & Stone', category: 'Steam ritual', image: '/visuals/gallery-7.svg', alt: 'Abstract steam-inspired composition in stone and muted light' },
  { id: 8, title: 'Water & Stillness', category: 'Water ritual', image: '/visuals/gallery-8.svg', alt: 'Abstract hydro-inspired composition with calm water-like forms' },
];
