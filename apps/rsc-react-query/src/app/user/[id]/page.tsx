import { ReactNode } from 'react';

import { User } from '../../../components/user/user';

type UserPageProperties = {
  readonly params: {
    id: string;
  };
};

export default function UserPage({ params }: UserPageProperties): ReactNode {
  return <User id={params.id} />;
}
