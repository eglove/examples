import { ReactNode, Suspense } from 'react';

import { UsersData } from './users-data';

export function Users(): ReactNode {
  return (
    <Suspense fallback={<div>Users loading...</div>}>
      <UsersData />
    </Suspense>
  );
}
