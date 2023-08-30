'use client';
import { Button } from '@nextui-org/button';
import type { JSX } from 'react';
import { useState } from 'react';

export function AuthTest(): JSX.Element {
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<{ id: string }>();

  const handleUpdate = (): void => {
    setIsLoading(true);

    setResult({ id: '1' });
  };

  return (
    <div className="flex items-center gap-4">
      <Button isDisabled={isLoading} variant="bordered" onClick={handleUpdate}>
        Test auth
      </Button>
      <div>{JSON.stringify(result, null, 2)}</div>
    </div>
  );
}
