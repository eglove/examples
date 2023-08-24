import { JSX } from 'react';

type AuctionDetailsProperties = {
  readonly params: {
    id: string;
  };
};

export default function AuctionDetails({
  params,
}: AuctionDetailsProperties): JSX.Element {
  return <div>details {params.id}</div>;
}
