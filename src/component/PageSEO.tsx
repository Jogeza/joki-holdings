import { useEffect } from 'react';

interface PageSEOProps {
    title: string;
    description: string;
}

const SITE_NAME = 'Nyumba Dynamics';

/**
 * Sets the document title and meta description for the current page.
 * No react-helmet dependency needed - CRA's build is a single-page app,
 * so a simple effect on mount/route-change covers what search engines
 * and social previews need for a client-rendered site like this one.
 */
const PageSEO: React.FC<PageSEOProps> = ({ title, description }) => {

    useEffect(() => {
        const fullTitle = `${title} | ${SITE_NAME}`;
        document.title = fullTitle;

        let metaDescription = document.querySelector('meta[name="description"]');
        if (!metaDescription) {
            metaDescription = document.createElement('meta');
            metaDescription.setAttribute('name', 'description');
            document.head.appendChild(metaDescription);
        }
        metaDescription.setAttribute('content', description);

        let ogTitle = document.querySelector('meta[property="og:title"]');
        if (!ogTitle) {
            ogTitle = document.createElement('meta');
            ogTitle.setAttribute('property', 'og:title');
            document.head.appendChild(ogTitle);
        }
        ogTitle.setAttribute('content', fullTitle);

        let ogDescription = document.querySelector('meta[property="og:description"]');
        if (!ogDescription) {
            ogDescription = document.createElement('meta');
            ogDescription.setAttribute('property', 'og:description');
            document.head.appendChild(ogDescription);
        }
        ogDescription.setAttribute('content', description);

    }, [title, description]);

    return null;
};

export default PageSEO;
