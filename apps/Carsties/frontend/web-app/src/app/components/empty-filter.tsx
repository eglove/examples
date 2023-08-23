import { Button } from '@nextui-org/button';
import { JSX } from 'react';

import { useParameterStore } from '../hooks/use-parameter-store';
import { Heading } from './heading';

type EmptyFilterProperties = {
  readonly isShowingReset: boolean;
  readonly subtitle?: string;
  readonly title?: string;
};

export function EmptyFilter({
  title = 'No matches found',
  subtitle = 'Try a different filter',
  isShowingReset = false,
}: EmptyFilterProperties): JSX.Element {
  const reset = useParameterStore(state => {
    return state.reset;
  });

  return (
    <div className="flex h-[40vh] flex-col items-center justify-center gap-2 shadow-lg">
      <Heading isCenter subtitle={subtitle} title={title} />
      {isShowingReset && (
        <div className="mt-4">
          <Button color="primary" onClick={reset}>
            Remove Filters
          </Button>
        </div>
      )}
    </div>
  );
}
