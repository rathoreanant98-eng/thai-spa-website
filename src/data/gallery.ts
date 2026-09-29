export type GalleryItem = {
  id: number;
  title: string;
  category: string;
  image: string;
  alt: string;
  motion?: boolean;
  motionProfile?: 'arrival' | 'treatment';
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
  { id: 3, title: 'Warm Stone Ritual', category: 'Warmth', image: '/visuals/gallery-3.svg', alt: 'Abstract editorial composition inspired by warm stone and soft light' },
  { id: 4, title: 'Private Calm', category: 'Stillness', image: '/visuals/gallery-4.svg', alt: 'Abstract calm interior-inspired composition with deep warm contrast' },
  { id: 5, title: 'Aromatic Notes', category: 'Aroma', image: '/visuals/gallery-5.svg', alt: 'Abstract aromatherapy-inspired composition with botanical details' },
  { id: 6, title: 'Shared Ritual', category: 'For two', image: '/visuals/gallery-6.svg', alt: 'Abstract editorial wellness composition designed around two guests' },
  { id: 7, title: 'Steam & Stone', category: 'Steam ritual', image: '/visuals/gallery-7.svg', alt: 'Abstract steam-inspired composition in stone and muted light' },
  { id: 8, title: 'Water & Stillness', category: 'Water ritual', image: '/visuals/gallery-8.svg', alt: 'Abstract hydro-inspired composition with calm water-like forms' },
];
