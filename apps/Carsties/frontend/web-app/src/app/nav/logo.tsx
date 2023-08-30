'use client';
import { TruckIcon } from '@heroicons/react/24/outline';
import { useRouter } from 'next/navigation';
import type { JSX } from 'react';

import { useParameterStore } from '../hooks/use-parameter-store';

export function Logo(): JSX.Element {
  const router = useRouter();

  const reset = useParameterStore(state => {
    return state.reset;
  });

  const handleReset = (): void => {
    reset();
    router.push('/');
  };

  return (
    <div
      className="flex items-center gap-2 text-3xl font-semibold text-red-500"
      role="button"
      tabIndex={0}
      onClick={handleReset}
      onKeyUp={handleReset}
    >
      <TruckIcon height={34} width={34} />
      <div>Carsties Auctions</div>
    </div>
  );
}
