import { Button } from '@nextui-org/button';
import { signIn } from 'next-auth/react';
import type { JSX } from 'react';

import { useParameterStore } from '../hooks/use-parameter-store';
import { Heading } from './heading';

type EmptyFilterProperties = {
  readonly callbackUrl?: string;
  readonly isShowingLogin?: boolean;
  readonly isShowingReset: boolean;
  readonly subtitle?: string;
  readonly title?: string;
};

export function EmptyFilter({
  title = 'No matches found',
  subtitle = 'Try a different filter',
  isShowingReset = false,
  isShowingLogin,
  callbackUrl,
}: EmptyFilterProperties): JSX.Element {
  const reset = useParameterStore(state => {
    return state.reset;
  });

  return (
    <div className="mt-4 flex h-[40vh] flex-col items-center justify-center gap-2 shadow-lg">
      <Heading isCenter subtitle={subtitle} title={title} />
      <div className="mt-4">
        {isShowingReset && (
          <Button color="primary" onClick={reset}>
            Remove Filters
          </Button>
        )}
        {isShowingLogin === true && (
          <Button
            color="primary"
            onClick={(): void => {
              signIn('id-server', { callbackUrl });
            }}
          >
            Login
          </Button>
        )}
      </div>
    </div>
  );
}
