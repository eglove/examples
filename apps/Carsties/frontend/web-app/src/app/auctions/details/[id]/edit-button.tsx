import { Button } from '@nextui-org/button';
import Link from 'next/link';
import { JSX } from 'react';

type EditButtonProperties = {
  readonly id: string;
};

export function EditButton({ id }: EditButtonProperties): JSX.Element {
  return (
    <Link href={`/auctions/update/${id}`}>
      <Button variant="bordered">Update Auction</Button>
    </Link>
  );
}
