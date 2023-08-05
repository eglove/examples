'use client';

import { useQuery } from '@tanstack/react-query';
import { ReactNode } from 'react';

import { apiGet, getRequestKeys } from '../../app/api/api';
import { usersSchema } from '../../app/api/types';
import { UsersView } from './users-view';

export function UsersData(): ReactNode {
  const { data } = useQuery({
    async queryFn() {
      const response = await fetch(apiGet.users());
      return usersSchema.parse(await response.json());
    },
    queryKey: getRequestKeys(apiGet.users()),
    suspense: true,
  });

  if (data === undefined) {
    return null;
  }

  return <UsersView users={data} />;
}
