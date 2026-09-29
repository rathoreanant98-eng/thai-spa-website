export type Testimonial = {
  id: string;
  quote: string;
  name: string;
  source?: string;
};

// Never populate this with invented reviews. Add only verified testimonials.
export const testimonials: Testimonial[] = [];
