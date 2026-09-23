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
    outcome: 'A printed menu made for daily restaurant use.',
  },
  {
    slug: 'dimensional-lettering',
    title: 'Dimensional lettering',
    category: 'branding',
    image: '/media/joki-holdings-print-portfolio-12.jpeg',
    alt: 'Gold dimensional lettering prepared for installation',
    outcome: 'Gold dimensional letters prepared for installation.',
  },
  {
    slug: 'nyumba-dynamics-website',
    title: 'Nyumba Dynamics website',
    category: 'web',
    image: '/images/nyumba-dynamics-website.png',
    alt: 'Responsive Nyumba Dynamics website interface',
    outcome: 'A responsive website presenting services and contact information.',
  },
  {
    slug: 'corporate-uniform-range',
    title: 'Corporate uniform range',
    category: 'print',
    image: '/media/joki-holdings-print-portfolio-18.jpeg',
    alt: 'Colour coordinated corporate polo shirt production',
    outcome: 'Branded polo shirts produced in multiple colours.',
  },
  {
    slug: 'personalised-id-series',
    title: 'Personalised ID series',
    category: 'print',
    image: '/images/id-cards.jpeg',
    alt: 'Printed personalised identification cards',
    outcome: 'Personalised ID cards printed as a series.',
  },
  {
    slug: 'identity-craft-study',
    title: 'Identity craft study',
    category: 'branding',
    image: '/images/design-craft.png',
    alt: 'Identity craft study shown across printed matter',
    outcome: 'A study of colour, typography and printed applications.',
  },
];
