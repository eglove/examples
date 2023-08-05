import { ReactNode, Suspense } from 'react';

import { PostsData } from './posts-data';

export function Posts(): ReactNode {
  return (
    <Suspense fallback="Posts Loading...">
      <PostsData />
    </Suspense>
  );
}
