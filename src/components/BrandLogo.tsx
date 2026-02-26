'use client';

import { useState } from 'react';

type BrandLogoProps = {
  className?: string;
  fallbackClassName?: string;
};

export function BrandLogo({ className, fallbackClassName }: BrandLogoProps) {
  const [imageError, setImageError] = useState(false);

  if (imageError) {
    return <span className={fallbackClassName}>JUMP STREET</span>;
  }

  return (
    <img
      src="/jump-street-logo.png"
      alt="Jump Street logo"
      width={320}
      height={80}
      className={className}
      onError={() => setImageError(true)}
    />
  );
}
