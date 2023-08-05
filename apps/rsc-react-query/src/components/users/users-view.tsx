import Link from 'next/link';
import { ReactNode } from 'react';

type UsersViewProperties = {
  readonly users: Array<{
    id: number;
    username: string;
  }>;
};

export function UsersView({ users }: UsersViewProperties): ReactNode {
  return (
    <div>
      <h1 className="m-4 text-3xl font-bold">Users</h1>
      {users?.map(user => {
        return (
          <div className="m-4 border-2 p-2" key={user.id}>
            <Link className="underline" href={`/user/${user.id}`}>
              {user.username}
            </Link>
          </div>
        );
      })}
    </div>
  );
}
