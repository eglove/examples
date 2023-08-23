import { isEmpty } from 'lodash';
import { JSX } from 'react';
import { twMerge } from 'tailwind-merge';

type HeadingProperties = {
  readonly isCenter?: boolean;
  readonly subtitle?: string;
  readonly title: string;
};

export function Heading({
  subtitle,
  isCenter = false,
  title,
}: HeadingProperties): JSX.Element {
  return (
    <div className={twMerge(isCenter ? 'text-center' : 'text-start')}>
      <div className="text-2xl font-bold">{title}</div>
      {!isEmpty(subtitle) && (
        <div className="mt-2 font-light text-neutral-500">{subtitle}</div>
      )}
    </div>
  );
}
