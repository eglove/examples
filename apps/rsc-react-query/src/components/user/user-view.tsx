import type { ReactNode } from 'react';

type UserViewProperties = {
  readonly username: string;
  readonly website: string;
};

export function UserView({ username, website }: UserViewProperties): ReactNode {
  return (
    <div className="m-4">
      <h1 className="my-4 text-3xl font-bold">{website}</h1>
      <p>{username}</p>
    </div>
  );
}
