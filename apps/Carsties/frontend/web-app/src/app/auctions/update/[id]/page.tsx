import { isNil } from '@ethang/util/data';
import type { JSX } from 'react';

import { api } from '../../../../../lib/api';
import { Heading } from '../../../components/heading';
import { AuctionForm } from '../../auction-form';
import { auctionSchema } from '../../schema';

type UpdateAuctionProperties = {
  readonly params: {
    id: string;
  };
};

export default async function UpdateAuction({
  params,
}: UpdateAuctionProperties): Promise<JSX.Element | null> {
  const response = await api.fetch.getAuctionDetails({
    pathVariables: [params.id],
  });

  let data;
  if (!isNil(response)) {
    data = await api.parseJson(response, auctionSchema);
  }

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
