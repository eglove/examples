'use client';

import { useQuery } from '@tanstack/react-query';
import { ReactNode } from 'react';

import { api, getRequestKeys } from '../../app/api/api';
import { postSchema } from '../../app/api/types';
import { PostView } from './post-view';

type PostsDataProperties = {
  readonly id: string;
};

export function PostData({ id }: PostsDataProperties): ReactNode {
  const { data } = useQuery({
    async queryFn() {
      const response = await fetch(api.post(id));
      return postSchema.parse(await response.json());
    },
    queryKey: getRequestKeys(api.post(id)),
    suspense: true,
  });

  if (data === undefined) {
    return null;
  }

  return <PostView body={data.body} title={data.title} />;
}
