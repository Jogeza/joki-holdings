import React from 'react';

interface LogoProps {
  variant?: 'default' | 'light' | 'dark' | 'compact';
  alt?: string;
  className?: string;
}

/**
 * Reusable Logo component for Joki Holdings.
 *
 * Implementation notes:
 * - The authoritative raster logo should be placed at: /brand-assets/joki-logo.png
 * - An SVG may be added later at: /brand-assets/joki-logo.svg
 * - Consumers should not need to change when an SVG replaces the raster file.
 */
const Logo: React.FC<LogoProps> = ({ variant = 'default', alt = 'Joki Holdings', className = '' }) => {
  // Default to the public path so it works whether the app is served from root or from %PUBLIC_URL%.
  const src = process.env.PUBLIC_URL + '/brand-assets/joki-logo.png';
  const ariaLabel = alt;

  // Compact variant will render a smaller img with aria-hidden false
  const sizeClass = variant === 'compact' ? 'logo-compact' : 'logo-full';

  return (
    <img
      src={src}
      alt={ariaLabel}
      className={`joki-logo ${sizeClass} ${className}`}
      style={{ height: variant === 'compact' ? 36 : 'auto' }}
    />
  );
};

export default Logo;
