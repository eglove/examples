'use client';
import { Button } from '@nextui-org/button';
import { JSX, useState } from 'react';

import {
  updateAuctionTest,
  UpdateAuctionTestReturn,
} from '../actions/auction-actions';

export function AuthTest(): JSX.Element {
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<UpdateAuctionTestReturn>();

  const handleUpdate = (): void => {
    setIsLoading(true);

    updateAuctionTest()
      .then(data => {
        setResult(data);
      })
      .finally(() => {
        return setIsLoading(false);
      });
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
