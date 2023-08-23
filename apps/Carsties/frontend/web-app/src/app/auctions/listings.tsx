'use client';
import { JSX, useEffect, useState } from 'react';
import { z } from 'zod';

import { getData } from '../actions/auction-actions';
import { AppPagination } from '../components/app-pagination';
import { AuctionCard } from './auction-card';
import { Filter } from './filter';
import { auctionsSchema } from './schema';

export function Listings(): JSX.Element {
  const [pageNumber, setPageNumber] = useState(1);
  const [pageSize, setPageSize] = useState(4);
  const [data, setData] = useState<z.output<typeof auctionsSchema>>({
    pageCount: 0,
    results: [],
    totalCount: 0,
  });

  useEffect(() => {
    getData(pageNumber, pageSize).then(data => {
      if (data) {
        setData(data);
      }
    });
  }, [pageNumber, pageSize]);

  if (data.results.length <= 0) {
    return <h3>Loading...</h3>;
  }

  return (
    <>
      <Filter pageSize={pageSize} setPageSize={setPageSize} />
      <div className="grid grid-cols-4 gap-6">
        {data.results.map(auction => {
          return <AuctionCard auction={auction} key={auction.id} />;
        })}
      </div>
      <div className="flex justify-center">
        <AppPagination
          currentPage={pageNumber}
          pageCount={data?.pageCount ?? 0}
          onPageChange={setPageNumber}
        />
      </div>
    </>
  );
}
