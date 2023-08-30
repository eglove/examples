import type { JSX } from 'react';

import { Heading } from '../../components/heading';
import { AuctionForm } from '../auction-form';

export default function CreateAuction(): JSX.Element {
  return (
    <div className="mx-auto max-w-[75%] rounded-lg bg-white p-10 shadow-lg">
      <Heading
        subtitle="Please enter the details of your car."
        title="Sell your car!"
      />
      <AuctionForm />
    </div>
  );
}
