import { JSX } from 'react';

type UpdateAuctionProperties = {
  readonly params: {
    id: string;
  };
};

export default function UpdateAuction({
  params,
}: UpdateAuctionProperties): JSX.Element {
  return <div>details {params.id}</div>;
}
