'use client';

import { useQuery } from '@tanstack/react-query';
import { ReactNode } from 'react';

import { apiGet, getRequestKeys } from '../../app/api/api';
import { userSchema } from '../../app/api/types';
import { UserView } from './user-view';

type UserDataProperties = {
  readonly id: string;
};

export function UserData({ id }: UserDataProperties): ReactNode {
  const { data } = useQuery({
    async queryFn() {
      const response = await fetch(apiGet.user(id));
      return userSchema.parse(await response.json());
    },
    queryKey: getRequestKeys(apiGet.user(id)),
    suspense: true,
  });

  if (data === undefined) {
    return null;
  }

  return <UserView username={data.username} website={data.website} />;
}
