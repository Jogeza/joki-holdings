export const SERVICES = [
  {
    slug: 'design',
    path: '/design',
    label: 'Design',
    cardTitle: 'Brand identity',
    cardCopy: 'Distinctive visual systems with enough structure to stay coherent as the business grows.',
    heroTitle: 'Identity with enough structure to grow.',
    heroCopy: 'Distinctive visual systems for businesses that need to look coherent everywhere — from the first introduction to the final application.',
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
      ['Direct', 'A strong visual route with a clear reason.'],
      ['Build', 'Careful execution and focused feedback.'],
      ['Deliver', 'Finished, organised and ready to use.'],
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
    cardCopy: 'Menus, packaging, publications, signage and collateral prepared for production — not just presentation.',
    heroTitle: 'Made to be held. Made to last.',
    heroCopy: 'Print design shaped by paper, finish, quantity and use — not treated as an afterthought once the artwork is approved.',
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
      ['Direct', 'A strong visual route with a clear reason.'],
      ['Build', 'Careful execution and focused feedback.'],
      ['Deliver', 'Finished, organised and ready to use.'],
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
    cardCopy: 'Responsive websites designed around real customer journeys and clear business goals.',
    heroTitle: 'Clear, fast and unmistakably yours.',
    heroCopy: 'Websites designed around real customer journeys, responsive behaviour and a visual identity that does not disappear on screen.',
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
      ['Direct', 'A strong visual route with a clear reason.'],
      ['Build', 'Careful execution and focused feedback.'],
      ['Deliver', 'Finished, organised and ready to use.'],
    ],
    ctaTitle: 'Have a web project?',
    seoTitle: 'Web Design & Digital Experiences | Joki Holdings',
    seoDescription: 'Web design and front-end development services from Joki Holdings in Kampala.',
  },
];

export const getService = (slug) => SERVICES.find((service) => service.slug === slug);

export const HOME_PROCESS = [
  ['Brief', 'Goals, audience, deliverables and constraints.'],
  ['Direction', 'A focused creative route with reasons behind it.'],
  ['Make', 'Design, production and development with review points.'],
  ['Deliver', 'Final files, printed work or a tested live website.'],
];

export const WHY_POINTS = [
  ['◎', 'Direct access', 'You work with the people doing the work, from first conversation to final handover.'],
  ['↗', 'One system', 'Design, print and web are handled together, so every touchpoint follows the same visual logic.'],
  ['✓', 'Production-ready delivery', 'Files, printed pieces and websites arrive finished — not as presentation concepts.'],
];
