import type { JSX } from 'react';

import { api } from '../../../../../lib/api';
import { Heading } from '../../../components/heading';
import { AuctionForm } from '../../auction-form';

type UpdateAuctionProperties = {
  readonly params: {
    id: string;
  };
};

export default async function UpdateAuction({
  params,
}: UpdateAuctionProperties): Promise<JSX.Element> {
  const { data } = await api.fetch('getAuctionDetails', {
    pathVariables: {
      id: params.id,
    },
  });

  return (
    <div className="mx-auto max-w-[75%] rounded-lg bg-white p-10 shadow-lg">
      <Heading
        subtitle="Update the details of your auction"
        title="Update your auction"
      />
      <AuctionForm auction={data} />
    </div>
  );
}
