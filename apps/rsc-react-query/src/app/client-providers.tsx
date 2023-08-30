'use client';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryStreamedHydration } from '@tanstack/react-query-next-experimental';
import type { JSX, ReactNode } from 'react';

type ProvidersProperties = {
  children: ReactNode;
};

export const queryClient = new QueryClient();

export function ClientProviders({
  children,
}: Readonly<ProvidersProperties>): JSX.Element {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryStreamedHydration>{children}</ReactQueryStreamedHydration>
    </QueryClientProvider>
  );
}
