'use client';

import { Button } from '@nextui-org/button';
import { signIn } from 'next-auth/react';
import { JSX } from 'react';

export function Login(): JSX.Element {
  return (
    <Button
      color="primary"
      variant="bordered"
      onClick={(): void => {
        signIn('id-server', { callbackUrl: '/' });
      }}
    >
      Login
    </Button>
  );
}
