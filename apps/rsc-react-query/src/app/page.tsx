import { ReactNode } from 'react';

import { Posts } from '../components/posts/posts';
import { Users } from '../components/users/users';

export default function Home(): ReactNode {
  return (
    <main className="grid w-full grid-cols-2 justify-evenly">
      <Posts />
      <Users />
    </main>
  );
}
