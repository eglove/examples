import { isNil } from 'lodash';
import { JSX } from 'react';

import { api } from '../../../../../lib/api';
import { getCurrentUser } from '../../../actions/auth-actions';
import { Heading } from '../../../components/heading';
import { CardImage } from '../../card-image';
import { CountdownTimer } from '../../countdown-timer';
import { DeleteButton } from './delete-button';
import DetailedSpecs from './detailed-specs';
import { EditButton } from './edit-button';

type AuctionDetailsProperties = {
  readonly params: {
    id: string;
  };
};

export default async function AuctionDetails({
  params,
}: AuctionDetailsProperties): Promise<JSX.Element | null> {
  const user = await getCurrentUser();
  const { data } = await api.fetch('getAuctionDetails', {
    pathVariables: {
      id: params.id,
    },
  });

  if (isNil(data)) {
    return null;
  }

  return (
    <div>
      <div className="flex justify-between">
        <div className="flex flex-wrap items-center gap-3">
          <Heading title={`${data.make} ${data.model}`} />
          {user?.username === data.seller && <EditButton id={data.id} />}
          {user?.username === data.seller && <DeleteButton id={data.id} />}
        </div>
        <div className="flex gap-3">
          <h3 className="text-2xl font-semibold">Time Remaining:</h3>
          <CountdownTimer auctionEnd={data.auctionEnd} />
        </div>
      </div>
      <div className="mt-3 grid grid-cols-2 gap-6">
        <div className="aspect-h-10 aspect-w-16 w-full overflow-hidden rounded-lg bg-gray-200">
          <CardImage
            alt={`${data.make} ${data.model}`}
            imageUrl={data.imageUrl}
          />
        </div>
        <div className="rounded-lg border-2 bg-gray-100 p-2">
          <Heading title="Bids" />
        </div>
      </div>
      <div className="mt-3 grid grid-cols-1 rounded-lg">
        <DetailedSpecs auction={data} />
      </div>
    </div>
  );
}
