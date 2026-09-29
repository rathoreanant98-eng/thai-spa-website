'use client';

import { CSSProperties, PointerEvent, useEffect, useRef, useState } from 'react';
import type { GalleryMotionProfile } from '@/data/gallery';

type CinematicHoverMediaProps = {
  src: string;
  alt: string;
  enabled?: boolean;
  className?: string;
  loading?: 'eager' | 'lazy';
  profile?: GalleryMotionProfile;
  objectPosition?: string;
  fit?: 'cover' | 'contain';
};

type MotionStyle = CSSProperties & {
  '--cinematic-x'?: string;
  '--cinematic-y'?: string;
  '--cinematic-pan-x'?: string;
  '--cinematic-pan-y'?: string;
  '--cinematic-position'?: string;
};

export function CinematicHoverMedia({
  src,
  alt,
  enabled = true,
  className = '',
  loading = 'lazy',
  profile = 'arrival',
  objectPosition = '50% 50%',
  fit = 'cover',
}: CinematicHoverMediaProps) {
  const frameRef = useRef<HTMLSpanElement>(null);
  const rafRef = useRef<number | null>(null);
  const [canHover, setCanHover] = useState(false);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const hover = window.matchMedia('(hover: hover) and (pointer: fine)');
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)');

    const update = () => {
      const allowed = enabled && hover.matches && !reduced.matches;
      setCanHover(allowed);
      if (!allowed) setActive(false);
    };

    update();
    hover.addEventListener('change', update);
    reduced.addEventListener('change', update);

    return () => {
      hover.removeEventListener('change', update);
      reduced.removeEventListener('change', update);
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
    };
  }, [enabled]);

  function updatePointer(event: PointerEvent<HTMLSpanElement>) {
    if (!canHover) return;

    const node = frameRef.current;
    if (!node) return;

    const rect = node.getBoundingClientRect();
    const px = Math.min(1, Math.max(0, (event.clientX - rect.left) / rect.width));
    const py = Math.min(1, Math.max(0, (event.clientY - rect.top) / rect.height));

    if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);

    rafRef.current = requestAnimationFrame(() => {
      node.style.setProperty('--cinematic-x', `${(px * 100).toFixed(2)}%`);
      node.style.setProperty('--cinematic-y', `${(py * 100).toFixed(2)}%`);
      node.style.setProperty('--cinematic-pan-x', `${((px - .5) * -8).toFixed(2)}px`);
      node.style.setProperty('--cinematic-pan-y', `${((py - .5) * -5.5).toFixed(2)}px`);
    });
  }

  function resetPointer() {
    if (!canHover) return;
    setActive(false);

    const node = frameRef.current;
    if (!node) return;

    node.style.setProperty('--cinematic-x', '50%');
    node.style.setProperty('--cinematic-y', '50%');
    node.style.setProperty('--cinematic-pan-x', '0px');
    node.style.setProperty('--cinematic-pan-y', '0px');
  }

  const style: MotionStyle = {
    '--cinematic-x': '50%',
    '--cinematic-y': '50%',
    '--cinematic-pan-x': '0px',
    '--cinematic-pan-y': '0px',
    '--cinematic-position': objectPosition,
  };

  return (
    <span
      ref={frameRef}
      className={`cinematic-hover-media is-profile-${profile} is-fit-${fit} ${enabled ? 'is-enabled' : ''} ${active ? 'is-active' : ''} ${className}`}
      style={style}
      onPointerEnter={() => canHover && setActive(true)}
      onPointerMove={updatePointer}
      onPointerLeave={resetPointer}
      aria-hidden={alt ? undefined : true}
    >
      <img className="cinematic-base" src={src} alt={alt} loading={loading} draggable={false} />

      {enabled ? (
        <>
          <span className="cinematic-depth cinematic-depth-left" aria-hidden="true"><img src={src} alt="" draggable={false} /></span>
          <span className="cinematic-depth cinematic-depth-right" aria-hidden="true"><img src={src} alt="" draggable={false} /></span>
          <span className="cinematic-light-shimmer" aria-hidden="true" />
          <span className="cinematic-reflection" aria-hidden="true" />
          <span className="cinematic-candles" aria-hidden="true" />
          <span className="cinematic-vignette" aria-hidden="true" />
        </>
      ) : null}
    </span>
  );
}
