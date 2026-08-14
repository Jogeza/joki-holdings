import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Activates the site's fade_up / fade_down / fade_in / zoom_in reveal
 * classes as elements scroll into view. Re-runs on every route change
 * since React Router swaps page content without a full reload.
 */
const useScrollReveal = () => {
    const location = useLocation();

    useEffect(() => {
        const targets = document.querySelectorAll(
            '.fade_up, .fade_down, .fade_in, .zoom_in'
        );

        if (!('IntersectionObserver' in window) || targets.length === 0) {
            targets.forEach((el) => el.classList.add('in-view'));
            return;
        }

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('in-view');
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
        );

        targets.forEach((el) => observer.observe(el));

        return () => observer.disconnect();
    }, [location.pathname]);
};

export default useScrollReveal;

