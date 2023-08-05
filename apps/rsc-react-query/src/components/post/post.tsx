import { ReactNode, Suspense } from 'react';

import { PostData } from './post-data';

type PostProperties = {
  readonly id: string;
};

export function Post({ id }: PostProperties): ReactNode {
  return (
    <Suspense fallback="Post Loading...">
      <PostData id={id} />
    </Suspense>
  );
}
