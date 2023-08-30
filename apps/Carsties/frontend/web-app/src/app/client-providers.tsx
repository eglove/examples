'use client';

import { NextUIProvider } from '@nextui-org/system';
import type { JSX, ReactNode } from 'react';

type ClientProvidersProperties = {
  readonly children: ReactNode;
};

export function ClientProviders({
  children,
}: ClientProvidersProperties): JSX.Element {
  return <NextUIProvider>{children}</NextUIProvider>;
}
