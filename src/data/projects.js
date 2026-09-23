export const CATEGORIES = [
  ['all', 'All'],
  ['print', 'Print'],
  ['web', 'Web'],
  ['branding', 'Branding'],
];

export const categoryLabel = (slug) => CATEGORIES.find(([value]) => value === slug)?.[1] ?? slug;

export const PROJECTS = [
  {
    slug: 'restaurant-menu',
    title: 'Restaurant menu system',
    category: 'print',
    image: '/media/joki-holdings-print-portfolio-01.jpg',
    alt: 'Finished restaurant menu photographed in service',
    outcome: 'A durable, tactile menu designed for everyday hospitality service.',
  },
  {
    slug: 'dimensional-lettering',
    title: 'Dimensional lettering',
    category: 'branding',
    image: '/media/joki-holdings-print-portfolio-12.jpeg',
    alt: 'Gold dimensional lettering prepared for installation',
    outcome: 'Letterforms, material and finish aligned for a strong physical presence.',
  },
  {
    slug: 'nyumba-dynamics-website',
    title: 'Nyumba Dynamics website',
    category: 'web',
    image: '/images/nyumba-dynamics-website.png',
    alt: 'Responsive Nyumba Dynamics website interface',
    outcome: 'A service-led digital experience designed for clear discovery and enquiry.',
  },
  {
    slug: 'corporate-uniform-range',
    title: 'Corporate uniform range',
    category: 'print',
    image: '/media/joki-holdings-print-portfolio-18.jpeg',
    alt: 'Colour coordinated corporate polo shirt production',
    outcome: 'A consistent branded apparel range prepared across multiple colourways.',
  },
  {
    slug: 'personalised-id-series',
    title: 'Personalised ID series',
    category: 'print',
    image: '/images/id-cards.jpeg',
    alt: 'Printed personalised identification cards',
    outcome: 'Consistent output across a variable-data production run.',
  },
  {
    slug: 'identity-craft-study',
    title: 'Identity craft study',
    category: 'branding',
    image: '/images/design-craft.png',
    alt: 'Identity craft study shown across printed matter',
    outcome: 'Colour, typography and printed matter shown as one system.',
  },
];
