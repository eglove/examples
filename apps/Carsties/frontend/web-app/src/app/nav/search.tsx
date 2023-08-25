'use client';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { Input } from '@nextui-org/input';
import { usePathname, useRouter } from 'next/navigation';
import { JSX } from 'react';

import { useParameterStore } from '../hooks/use-parameter-store';

export function Search(): JSX.Element {
  const router = useRouter();
  const pathname = usePathname();

  const setParameters = useParameterStore(state => {
    return state.setParameters;
  });

  const searchTerm = useParameterStore(state => {
    return state.searchTerm;
  });

  const setSearchTerm = (term: string): void => {
    setParameters({ searchTerm: term });
  };

  return (
    <Input
      placeholder="Search by make, model, or color"
      startContent={<MagnifyingGlassIcon height={24} width={24} />}
      type="text"
      value={searchTerm}
      variant="bordered"
      onValueChange={(value): void => {
        if (pathname !== '/') {
          router.push('/');
        }

        return setSearchTerm(value);
      }}
    />
  );
}
