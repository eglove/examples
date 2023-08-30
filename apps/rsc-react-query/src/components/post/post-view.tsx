import type { ReactNode } from 'react';

type PostViewProperties = {
  readonly body: string;
  readonly title: string;
};

export function PostView({ body, title }: PostViewProperties): ReactNode {
  return (
    <div className="m-4">
      <h1 className="my-4 text-3xl font-bold">{title}</h1>
      <p>{body}</p>
    </div>
  );
}
