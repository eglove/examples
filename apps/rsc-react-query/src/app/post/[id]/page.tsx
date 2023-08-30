import type { ReactNode } from 'react';

import { Post } from '../../../components/post/post';

type PostPageProperties = {
  readonly params: {
    id: string;
  };
};

export default function PostPage({ params }: PostPageProperties): ReactNode {
  return <Post id={params.id} />;
}
