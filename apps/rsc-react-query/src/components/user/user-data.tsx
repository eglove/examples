'use client';

import { useQuery } from '@tanstack/react-query';
import type { ReactNode } from 'react';

import { api, getRequestKeys } from '../../app/api/api';
import { userSchema } from '../../app/api/types';
import { UserView } from './user-view';

type UserDataProperties = {
  readonly id: string;
};

export function UserData({ id }: UserDataProperties): ReactNode {
  const { data } = useQuery({
    async queryFn() {
      const response = await fetch(api.user(id));
      return userSchema.parse(await response.json());
    },
    queryKey: getRequestKeys(api.user(id)),
    suspense: true,
  });

  if (data === undefined) {
    return null;
  }

  return <UserView username={data.username} website={data.website} />;
}
