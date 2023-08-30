import type { ReactNode } from 'react';
import { Suspense } from 'react';

import { PostsData } from './posts-data';

export function Posts(): ReactNode {
  return (
    <Suspense fallback={<div>Posts Loading...</div>}>
      <PostsData />
    </Suspense>
  );
}
