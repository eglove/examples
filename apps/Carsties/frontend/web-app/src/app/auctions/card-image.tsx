'use client';
import Image from 'next/image';
import type { JSX } from 'react';
import { useState } from 'react';
import { twMerge } from 'tailwind-merge';

type CardImageProperties = {
  readonly alt: string;
  readonly imageUrl: string;
};

export function CardImage({ imageUrl, alt }: CardImageProperties): JSX.Element {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <Image
      fill
      priority
      alt={alt}
      sizes="(max-width:768px) 100vw, (max-width: 1200px) 50vw, 25vw"
      src={imageUrl}
      className={twMerge(
        'object-cover duration-200 ease-in-out group-hover:opacity-75',
        isLoading && 'grayscale blur-2xl',
      )}
      onLoadingComplete={(): void => {
        return setIsLoading(false);
      }}
    />
  );
}
