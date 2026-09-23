export const SERVICES = [
  {
    slug: 'design',
    path: '/design',
    label: 'Design',
    cardTitle: 'Brand identity',
    cardCopy: 'Logos, colours, type and guidelines that work across signs, print and screens.',
    heroTitle: 'A brand people can recognise.',
    heroCopy: 'We design logos, colour palettes, typography and guidelines you can use across your business.',
    image: '/images/design-craft.png',
    imageAlt: 'Brand identity artwork shown across printed applications',
    deliverables: [
      ['Brand identity', 'Logo systems, colour, typography and practical guidelines.'],
      ['Campaign design', 'Art direction and graphic systems for launches and promotions.'],
      ['Business collateral', 'Profiles, presentations, stationery and marketing material.'],
      ['Design support', 'Ongoing creative direction for growing brands.'],
    ],
    process: [
      ['Define', 'Goal, audience and practical constraints.'],
      ['Direct', 'Choose a design direction and review examples.'],
      ['Build', 'Refine the artwork using your feedback.'],
      ['Deliver', 'Supply the final files and usage guidance.'],
    ],
    ctaTitle: 'Have a design project?',
    seoTitle: 'Brand & Graphic Design | Joki Holdings',
    seoDescription: 'Brand identity and graphic design services from Joki Holdings in Kampala.',
  },
  {
    slug: 'print',
    path: '/print',
    label: 'Print',
    cardTitle: 'Print design',
    cardCopy: 'Menus, packaging, publications and signage designed for production.',
    heroTitle: 'Made to be held. Made to last.',
    heroCopy: 'We plan the format, paper, finish and quantity alongside the artwork, before it goes to print.',
    image: '/images/press.jpeg',
    imageAlt: 'Printed sheets running on a production press',
    deliverables: [
      ['Menus & publications', 'Clear editorial systems for repeated, practical use.'],
      ['Packaging & labels', 'Shelf-ready graphics prepared around real production constraints.'],
      ['Signage & display', 'Large-format work, dimensional lettering and branded environments.'],
      ['Business print', 'Cards, profiles, stationery and personalised production runs.'],
    ],
    process: [
      ['Define', 'Goal, audience and practical constraints.'],
      ['Direct', 'Agree on format, materials and finish.'],
      ['Build', 'Prepare artwork and check proofs.'],
      ['Deliver', 'Produce and hand over the finished pieces.'],
    ],
    ctaTitle: 'Have a print project?',
    seoTitle: 'Commercial Print & Production | Joki Holdings',
    seoDescription: 'Print design and production services from Joki Holdings in Kampala.',
  },
  {
    slug: 'web',
    path: '/web',
    label: 'Web',
    cardTitle: 'Web design',
    cardCopy: 'Websites that are easy to use on phones and desktops, with clear ways to get in touch.',
    heroTitle: 'Websites that work on every screen.',
    heroCopy: 'We design and build responsive websites with clear navigation, useful content and simple contact paths.',
    image: '/images/nyumba-dynamics-website.png',
    imageAlt: 'Nyumba Dynamics responsive website design',
    deliverables: [
      ['Business websites', 'Focused marketing sites with clear paths to enquiry.'],
      ['Portfolio sites', 'Visual systems that let strong work lead the story.'],
      ['UI direction', 'Interfaces and component systems for digital products.'],
      ['Build & launch', 'Responsive implementation, testing and handover.'],
    ],
    process: [
      ['Define', 'Goal, audience and practical constraints.'],
      ['Direct', 'Plan pages, navigation and content.'],
      ['Build', 'Design, develop and review the site.'],
      ['Deliver', 'Test on different screens and launch.'],
    ],
    ctaTitle: 'Have a web project?',
    seoTitle: 'Web Design & Digital Experiences | Joki Holdings',
    seoDescription: 'Web design and front-end development services from Joki Holdings in Kampala.',
  },
];

export const getService = (slug) => SERVICES.find((service) => service.slug === slug);

export const HOME_PROCESS = [
  ['Brief', 'Goals, audience, deliverables and constraints.'],
  ['Direction', 'Review a proposed design direction.'],
  ['Make', 'Design, production and development with review points.'],
  ['Deliver', 'Final files, printed work or a tested live website.'],
];

export const WHY_POINTS = [
  ['◎', 'Direct access', 'You work with the people doing the work, from first conversation to final handover.'],
  ['↗', 'One studio', 'We handle design, print and web in one place.'],
  ['✓', 'Production-ready delivery', 'Files, printed pieces and websites arrive finished — not as presentation concepts.'],
];
