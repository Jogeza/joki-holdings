import { useEffect } from 'react';
import { SITE } from '../data/site';

function upsertHead(selector, create, apply) {
  let element = document.head.querySelector(selector);
  if (!element) {
    element = create();
    document.head.appendChild(element);
  }
  apply(element);
}

function upsertMeta(attribute, key, content) {
  upsertHead(
    `meta[${attribute}="${key}"]`,
    () => {
      const node = document.createElement('meta');
      node.setAttribute(attribute, key);
      return node;
    },
    (node) => { node.content = content; },
  );
}

function upsertJsonLd(id, value) {
  upsertHead(
    `script#${id}`,
    () => {
      const node = document.createElement('script');
      node.id = id;
      node.type = 'application/ld+json';
      return node;
    },
    (node) => { node.textContent = JSON.stringify(value); },
  );
}

export default function Seo({ title, description, path, image = '/images/hero-kampala-studio-v2.png', noindex = false }) {
  useEffect(() => {
    const canonicalPath = path === '/' ? '/' : `/${path.replace(/^\/+|\/+$/g, '')}`;
    const url = new URL(canonicalPath, SITE.url).href;
    const imageUrl = new URL(image, SITE.url).href;
    const robots = noindex ? 'noindex,nofollow' : 'index,follow,max-image-preview:large';
    const breadcrumbItems = [
      { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE.url}/` },
      ...(path !== '/' ? [{ '@type': 'ListItem', position: 2, name: title.split('|')[0].trim(), item: url }] : []),
    ];

    document.title = title;
    document.documentElement.lang = 'en';
    upsertMeta('name', 'description', description);
    upsertMeta('name', 'robots', robots);
    upsertMeta('name', 'author', SITE.name);
    upsertMeta('name', 'twitter:card', 'summary_large_image');
    upsertMeta('name', 'twitter:title', title);
    upsertMeta('name', 'twitter:description', description);
    upsertMeta('name', 'twitter:image', imageUrl);
    upsertHead(
      'link[rel="canonical"]',
      () => {
        const node = document.createElement('link');
        node.rel = 'canonical';
        return node;
      },
      (node) => { node.href = url; },
    );
    upsertMeta('property', 'og:site_name', SITE.name);
    upsertMeta('property', 'og:locale', 'en_UG');
    upsertMeta('property', 'og:type', 'website');
    upsertMeta('property', 'og:title', title);
    upsertMeta('property', 'og:description', description);
    upsertMeta('property', 'og:url', url);
    upsertMeta('property', 'og:image', imageUrl);
    upsertMeta('property', 'og:image:alt', title);
    upsertJsonLd('joki-page-schema', {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'WebPage',
          '@id': `${url}#webpage`,
          url,
          name: title,
          description,
          inLanguage: 'en-UG',
          isPartOf: { '@id': `${SITE.url}/#website` },
          primaryImageOfPage: { '@type': 'ImageObject', url: imageUrl },
        },
        {
          '@type': 'BreadcrumbList',
          itemListElement: breadcrumbItems,
        },
      ],
    });
  }, [title, description, path, image, noindex]);
  return null;
}
