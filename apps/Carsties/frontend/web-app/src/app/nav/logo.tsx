'use client';
import { TruckIcon } from '@heroicons/react/24/outline';
import { JSX } from 'react';

import { useParameterStore } from '../hooks/use-parameter-store';

export function Logo(): JSX.Element {
  const reset = useParameterStore(state => {
    return state.reset;
  });

  return (
    <div
      className="flex items-center gap-2 text-3xl font-semibold text-red-500"
      role="button"
      tabIndex={0}
      onClick={reset}
      onKeyUp={reset}
    >
      <TruckIcon height={34} width={34} />
      <div>Carsties Auctions</div>
    </div>
  );
}
