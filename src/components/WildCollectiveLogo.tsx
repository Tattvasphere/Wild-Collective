import React from 'react';

interface WildCollectiveLogoProps {
  className?: string;
  variant?: 'dark' | 'light' | 'gold';
  type?: 'full' | 'emblem' | 'compact';
  height?: number | string;
  onClick?: () => void;
}

export const WildCollectiveLogo: React.FC<WildCollectiveLogoProps> = ({
  className = '',
  variant = 'dark',
  height = 42,
  onClick
}) => {
  const src = variant === 'light' ? '/brand/logo-white.png' : '/brand/logo.png';

  const styleHeight = typeof height === 'number' ? `${height}px` : height;

  return (
    <div 
      className={`inline-flex items-center justify-center select-none ${className}`}
      onClick={onClick}
    >
      <img
        src={src}
        alt="Wild Collective"
        style={{ height: styleHeight, width: 'auto' }}
        className="max-h-full w-auto object-contain transition-transform duration-200"
        loading="eager"
      />
    </div>
  );
};
