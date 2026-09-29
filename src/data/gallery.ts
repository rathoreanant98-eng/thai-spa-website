export type GalleryMotionProfile =
  | 'arrival'
  | 'treatment'
  | 'thai'
  | 'aroma'
  | 'hotstone'
  | 'couples'
  | 'sensory'
  | 'architecture';

export type GalleryItem = {
  id: number;
  title: string;
  category: string;
  image: string;
  alt: string;
  description: string;
  motion?: boolean;
  motionProfile?: GalleryMotionProfile;
  focalPoint?: string;
};

export const galleryItems: GalleryItem[] = [
  {
    id: 1,
    title: 'Quiet Arrival',
    category: 'Arrival mood',
    image: '/visuals/reception-arrival-premium.webp',
    alt: 'Warm Thai-inspired spa arrival atmosphere with layered hospitality details',
    description: 'An editorial arrival study built around warm stone, tropical planting, softened light and a sense of calm before the treatment begins.',
    motion: true,
    motionProfile: 'arrival',
    focalPoint: '50% 50%',
  },
  {
    id: 2,
    title: 'Treatment Ritual',
    category: 'Treatment atmosphere',
    image: '/visuals/treatment-room.webp',
    alt: 'Thai-inspired massage treatment scene with therapist, guest, candlelight and tropical spa surroundings',
    description: 'A treatment-focused atmosphere study balancing professional care, warm light and quiet visual depth.',
    motion: true,
    motionProfile: 'treatment',
    focalPoint: '54% 50%',
  },
  {
    id: 7,
    title: 'Golden Ritual Detail',
    category: 'Sensory detail',
    image: '/visuals/premium-detail-sensory-shot.webp',
    alt: 'Close-up spa ritual detail with warm oil being poured by hand over an ornate bowl with candlelight, flowers and rising steam',
    description: 'A close sensory composition of warm oil, metal, steam and candlelight designed to bring texture and ritual into the gallery.',
    motion: true,
    motionProfile: 'sensory',
    focalPoint: '61% 47%',
  },
  {
    id: 3,
    title: 'Thai Stretch Ritual',
    category: 'Traditional Thai',
    image: '/visuals/thai-massage-setup.webp',
    alt: 'Thai-inspired floor massage scene with therapist guiding a guest through an assisted stretch in a warm tropical spa setting',
    description: 'An active Thai-inspired bodywork scene centred on assisted movement, grounding pressure and a composed treatment environment.',
    motion: true,
    motionProfile: 'thai',
    focalPoint: '50% 50%',
  },
  {
    id: 8,
    title: 'Sanctuary Architecture',
    category: 'Spa atmosphere',
    image: '/visuals/wider-spa-architectural-atmosphere.webp',
    alt: 'Wide Thai-inspired luxury spa pavilion with reflective water, carved timber, lanterns, tropical landscaping and warm architectural lighting',
    description: 'A wide architectural study using reflective water, carved timber, tropical planting and lantern light to create spatial calm.',
    motion: true,
    motionProfile: 'architecture',
    focalPoint: '52% 50%',
  },
  {
    id: 6,
    title: 'Shared Sanctuary',
    category: 'Couples ritual',
    image: '/visuals/couples-treatment-room.webp',
    alt: 'Couples massage suite with two guests receiving simultaneous treatments in a warm candlelit Thai-inspired spa setting',
    description: 'A balanced couples ritual composition designed around privacy, symmetry and the feeling of sharing the same quiet experience.',
    motion: true,
    motionProfile: 'couples',
    focalPoint: '50% 49%',
  },
  {
    id: 4,
    title: 'Aromatic Oil Ritual',
    category: 'Aromatherapy',
    image: '/visuals/serene_thai_spa_massage_retreat.webp',
    alt: 'Thai-inspired aromatherapy massage with a therapist using warm oils on a male guest in a candlelit spa setting',
    description: 'A warm aromatherapy study where oil, candlelight and slow treatment gestures create the sensory focus.',
    motion: true,
    motionProfile: 'aroma',
    focalPoint: '56% 50%',
  },
  {
    id: 5,
    title: 'Hot Stone Ritual',
    category: 'Thermo stone',
    image: '/visuals/hot-stone-ritual-detail.webp',
    alt: 'Thai-inspired hot stone massage with black basalt stones arranged across a male guest’s back in a warm candlelit spa setting',
    description: 'A thermo-stone treatment study emphasizing polished basalt, warmth and carefully controlled pressure.',
    motion: true,
    motionProfile: 'hotstone',
    focalPoint: '53% 51%',
  },
];
