export type GalleryItem = {
  id: number;
  title: string;
  category: string;
  image: string;
  alt: string;
  motion?: boolean;
  motionProfile?: 'arrival' | 'treatment' | 'thai' | 'aroma' | 'hotstone' | 'couples' | 'sensory' | 'architecture';
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
  {
    id: 6,
    title: 'Shared Sanctuary',
    category: 'Couples ritual',
    image: '/visuals/couples-treatment-room.webp',
    alt: 'Couples massage suite with two guests receiving simultaneous treatments in a warm candlelit Thai-inspired spa setting',
    motion: true,
    motionProfile: 'couples',
  },
  {
    id: 7,
    title: 'Golden Ritual Detail',
    category: 'Sensory detail',
    image: '/visuals/premium-detail-sensory-shot.webp',
    alt: 'Close-up spa ritual detail with warm oil being poured by hand over an ornate bowl with candlelight, flowers and rising steam',
    motion: true,
    motionProfile: 'sensory',
  },
  {
    id: 8,
    title: 'Sanctuary Architecture',
    category: 'Spa atmosphere',
    image: '/visuals/wider-spa-architectural-atmosphere.webp',
    alt: 'Wide Thai-inspired luxury spa pavilion with reflective water, carved timber, lanterns, tropical landscaping and warm architectural lighting',
    motion: true,
    motionProfile: 'architecture',
  },
];
