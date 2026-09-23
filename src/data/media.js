const pad = (value) => String(value).padStart(2, '0');

const portfolioLabels = [
  'Restaurant menu production', 'Industrial coverall — gold', 'Industrial coverall — blue',
  'Custom product display print', 'Framed portrait finishing', 'Acrylic studio signage',
  'Staff identity card run', 'Identity card artwork proof', 'Large-format calendar print',
  'Offset press setup', 'Production finishing detail', 'Raised metallic lettering',
  'Dimensional lettering sample', 'Institutional portrait framing', 'Framed portrait collection',
  'High-visibility apparel order', 'Branded workwear production', 'Custom polo shirt colourways',
  'Corporate uniform range', 'Packaged uniform delivery', 'Branded carrier bag production',
  'Training programme print run', 'Joki studio wall signage', 'School prefect ID card run',
  'Die-cut studio sticker', 'Heat-press production', 'Screen-printing setup',
];

const craftLabels = [
  'Laser-cut wedding tags', 'Resin silhouette keyring', 'Colour resin keyring series',
  'Glitter wedding keyrings', 'Cultural wedding keepsakes', 'Graduation presentation keepsake',
  'Engraved anniversary plaque', 'Production proof test', 'Engraved exam-success flasks',
  'Anniversary wooden notebooks', 'Institutional branded folio', 'Engraved family portrait',
  'University engraved notebooks', 'Personalised portrait keepsake', 'Personalised wooden photo album',
  'Environmental agency notebooks', 'Branded leather folio', 'Branded folio detail',
  'Precision engraving detail', 'Personalised exam flasks', 'Engraved name tumbler',
  'Personalised card wallet', 'Wooden bottle-opener keyrings', 'Wedding calendar plaque',
  'Campaign wristbands', 'Custom event wristbands',
];

const motionLabels = [
  'Offset production run', 'Print finishing in motion', 'Studio production reel',
  'Apparel production reel', 'Pressroom process', 'Heat-transfer process', 'Workshop reel',
];

const portfolio = Array.from({ length: 27 }, (_, index) => {
  const number = index + 1;
  const extension = number <= 3 ? 'jpg' : 'jpeg';
  return {
    src: `/media/joki-holdings-print-portfolio-${pad(number)}.${extension}`,
    type: 'image',
    group: 'portfolio',
    label: portfolioLabels[index],
  };
});

const scans = Array.from({ length: 26 }, (_, index) => ({
  src: `/media/Scanned_20260907-1246-${pad(index + 1)}.jpg`,
  type: 'image',
  group: 'craft',
  label: craftLabels[index],
}));

const studio = [
  { src: '/media/IMG-20260409-WA0010.jpeg', type: 'image', group: 'studio', label: 'Joki studio signage' },
  { src: '/media/IMG-20260409-WA0010(1).jpeg', type: 'image', group: 'studio', label: 'Joki studio detail' },
];

const videos = [
  'joki-holdings-print-portfolio-video-01.mp4',
  'joki-holdings-print-portfolio-video-02.mp4',
  'VID-20260822-WA0284.mp4',
  'VID-20260822-WA0301.mp4',
  'VID-20260825-WA0049.mp4',
  'VID-20260826-WA0117.mp4',
  'VID-20260828-WA0048.mp4',
].map((name, index) => ({
  src: `/media/${name}`,
  type: 'video',
  group: 'motion',
  label: motionLabels[index],
}));

export const MEDIA_ARCHIVE = [...studio, ...portfolio, ...scans, ...videos];

export const MEDIA_FILTERS = [
  ['all', 'All work'],
  ['portfolio', 'Print & production'],
  ['craft', 'Personalised craft'],
  ['studio', 'Studio details'],
  ['motion', 'Process films'],
];

export const CURATED_MEDIA = {
  design: [portfolio[0], portfolio[5], portfolio[11]],
  print: [portfolio[0], portfolio[11], portfolio[23], videos[0]],
  web: [portfolio[5], scans[8], videos[2]],
  about: [studio[0], portfolio[25], scans[12]],
};
