import { ReactNode, Suspense } from 'react';

import { UserData } from './user-data';

type UserProperties = {
  readonly id: string;
};

export function User({ id }: UserProperties): ReactNode {
  return (
    <Suspense fallback="User Loading...">
      <UserData id={id} />
    </Suspense>
  );
}
