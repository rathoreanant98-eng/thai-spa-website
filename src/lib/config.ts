export function isConfigured(value: string) {
  return Boolean(value) && !value.includes('[') && !value.includes(']');
}

export function displayBrandName(value: string) {
  if (!value || value === 'BRAND NAME' || !isConfigured(value)) return 'Thai Wellness';
  return value;
}

export function formatPrice(price: number | null, currency = 'INR') {
  if (price === null) return 'Pricing on request';
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency,
    maximumFractionDigits: 0,
  }).format(price);
}
