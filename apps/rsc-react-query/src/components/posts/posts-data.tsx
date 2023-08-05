'use client';

import { useQuery } from '@tanstack/react-query';
import { ReactNode } from 'react';

import { api, getRequestKeys } from '../../app/api/api';
import { postsSchema } from '../../app/api/types';
import { PostsView } from './posts-view';

export function PostsData(): ReactNode {
  const { data } = useQuery({
    async queryFn() {
      const response = await fetch(api.posts());
      return postsSchema.parse(await response.json());
    },
    queryKey: getRequestKeys(api.posts()),
    suspense: true,
  });

  if (data === undefined) {
    return null;
  }

  return <PostsView posts={data} />;
}
