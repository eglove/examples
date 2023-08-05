import Link from 'next/link';
import { ReactNode } from 'react';

type PostsViewProperties = {
  readonly posts: Array<{
    id: number;
    title: string;
  }>;
};

export function PostsView({ posts }: PostsViewProperties): ReactNode {
  return (
    <div>
      <h1 className="m-4 text-3xl font-bold">Posts</h1>
      {posts?.map(post => {
        return (
          <div className="m-4 border-2 p-2" key={post.id}>
            <Link className="underline" href={`/post/${post.id}`}>
              {post.title}
            </Link>
          </div>
        );
      })}
    </div>
  );
}
