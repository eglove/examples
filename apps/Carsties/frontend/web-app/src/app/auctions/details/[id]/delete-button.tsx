'use client';
import { Button } from '@nextui-org/button';
import { useRouter } from 'next/navigation';
import { JSX, useState } from 'react';

import { deleteAuction } from '../../../../../lib/requests';

type DeleteButtonProperties = {
  readonly id: string;
};

export function DeleteButton({ id }: DeleteButtonProperties): JSX.Element {
  const router = useRouter();

  const [isLoading, setIsLoading] = useState(false);

  const handleDelete = (): void => {
    setIsLoading(true);
    deleteAuction(id)
      .then(results => {
        if (results.errors && results.errors?.length > 0) {
          throw new Error(results.errors[0]);
        }

        router.push('/');
      })
      .catch(() => {
        // Do nothing
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <Button
      color="danger"
      isDisabled={isLoading}
      variant="bordered"
      onClick={handleDelete}
    >
      Delete Auction
    </Button>
  );
}
