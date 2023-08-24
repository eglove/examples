import Link from 'next/link';
import { JSX } from 'react';
import { z } from 'zod';

import { CardImage } from './card-image';
import { CountdownTimer } from './countdown-timer';
import { auctionSchema } from './schema';

type AuctionCardProperties = {
  readonly auction: z.output<typeof auctionSchema>;
};

export function AuctionCard({ auction }: AuctionCardProperties): JSX.Element {
  return (
    <Link className="group" href={`/auctions/details/${auction.id}`}>
      <div className="aspect-h-10 aspect-w-16 w-full overflow-hidden rounded-lg bg-gray-200">
        <CardImage
          alt={`${auction.color} ${auction.make} ${auction.model}`}
          imageUrl={auction.imageUrl}
        />
        <div className="absolute left-2 top-2 h-max w-max">
          <CountdownTimer auctionEnd={auction.auctionEnd} />
        </div>
      </div>
      <div className="mt-4 flex items-center justify-between">
        <h3 className="text-gray-700">
          {auction.make} {auction.model}
        </h3>
        <p className="text-sm font-semibold">{auction.year}</p>
      </div>
    </Link>
  );
}
