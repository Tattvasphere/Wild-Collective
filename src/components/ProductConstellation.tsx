import React, { useEffect, useRef } from 'react';

// Layered product views that drift at three depths as the mouse moves over them.
const ParallaxStage: React.FC<{ className: string; label: string; children: React.ReactNode }> = ({
  className,
  label,
  children,
}) => {
  const frame = useRef<number | null>(null);

  useEffect(() => () => {
    if (frame.current !== null) cancelAnimationFrame(frame.current);
  }, []);

  const setParallax = (el: HTMLDivElement, x: number, y: number) => {
    if (frame.current !== null) cancelAnimationFrame(frame.current);
    frame.current = requestAnimationFrame(() => {
      el.style.setProperty('--parallax-x-sm', `${10 * x}px`);
      el.style.setProperty('--parallax-y-sm', `${10 * y}px`);
      el.style.setProperty('--parallax-x-md', `${19 * x}px`);
      el.style.setProperty('--parallax-y-md', `${19 * y}px`);
      el.style.setProperty('--parallax-x-lg', `${31 * x}px`);
      el.style.setProperty('--parallax-y-lg', `${31 * y}px`);
      el.dataset.parallaxActive = x === 0 && y === 0 ? 'false' : 'true';
    });
  };

  return (
    <div
      className={className}
      data-parallax-active="false"
      role="img"
      aria-label={label}
      onPointerMove={(e) => {
        if (e.pointerType !== 'mouse') return;
        const r = e.currentTarget.getBoundingClientRect();
        setParallax(
          e.currentTarget,
          -((e.clientX - r.left) / r.width - 0.5) * 2,
          -((e.clientY - r.top) / r.height - 0.5) * 2
        );
      }}
      onPointerLeave={(e) => setParallax(e.currentTarget, 0, 0)}
    >
      {children}
    </div>
  );
};

export const ProductConstellation: React.FC<{ variant: 'apparel' | 'gifts'; className?: string }> = ({
  variant,
  className = '',
}) =>
  variant === 'apparel' ? (
    <ParallaxStage
      className={`product-constellation apparel-constellation ${className}`}
      label="Three views of a custom green collar T-shirt"
    >
      <span className="constellation-index" aria-hidden="true">COLLAR T-SHIRT / 03 VIEWS</span>
      <span className="constellation-line constellation-line-one" aria-hidden="true" />
      <span className="constellation-line constellation-line-two" aria-hidden="true" />
      <span className="constellation-layer depth-sm apparel-back" aria-hidden="true">
        <img src="/images/products/collar-tshirt-back.webp" alt="" />
      </span>
      <span className="constellation-layer depth-md apparel-side" aria-hidden="true">
        <img src="/images/products/collar-tshirt-side.webp" alt="" />
      </span>
      <span className="constellation-layer depth-lg apparel-main">
        <img src="/images/products/collar-tshirt-front.webp" alt="Model wearing a green custom collar T-shirt" />
      </span>
    </ParallaxStage>
  ) : (
    <ParallaxStage
      className={`product-constellation gift-constellation ${className}`}
      label="A diary, engraved pen and bottle arranged as a corporate gift set"
    >
      <span className="constellation-index" aria-hidden="true">GIFT SET / 03 PIECES</span>
      <span className="constellation-line constellation-line-one" aria-hidden="true" />
      <span className="constellation-line constellation-line-two" aria-hidden="true" />
      <span className="constellation-layer depth-sm gift-diary">
        <img src="/images/products/diary-black.png" alt="Black branded diary" />
      </span>
      <span className="constellation-layer depth-md gift-bottle">
        <img src="/images/products/corporate-gift-black-bottle.png" alt="Black custom bottle with a carry strap" />
      </span>
      <span className="constellation-layer depth-lg gift-pen">
        <img src="/images/products/metal-pen-customisation.png" alt="Custom engraved metal pen" />
      </span>
    </ParallaxStage>
  );
