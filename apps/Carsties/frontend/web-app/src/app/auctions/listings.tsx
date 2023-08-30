'use client';
import { debounce, isNil } from 'lodash';
import type { JSX } from 'react';
import { useEffect, useState } from 'react';
import type { z } from 'zod';

import { api } from '../../../lib/api';
import { AppPagination } from '../components/app-pagination';
import { EmptyFilter } from '../components/empty-filter';
import { useParameterStore } from '../hooks/use-parameter-store';
import { AuctionCard } from './auction-card';
import { Filter } from './filter';
import type { auctionsSchema } from './schema';

export function Listings(): JSX.Element {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState<z.output<typeof auctionsSchema>>({
    pageCount: 0,
    results: [],
    totalCount: 0,
  });

  const orderBy = useParameterStore(state => {
    return state.orderBy;
  });
  const filterBy = useParameterStore(state => {
    return state.filterBy;
  });
  const pageNumber = useParameterStore(state => {
    return state.pageNumber;
  });
  const pageSize = useParameterStore(state => {
    return state.pageSize;
  });
  const searchTerm = useParameterStore(state => {
    return state.searchTerm;
  });
  const winner = useParameterStore(state => {
    return state.winner;
  });
  const seller = useParameterStore(state => {
    return state.seller;
  });

  useEffect(() => {
    setIsLoading(true);
    debounce(async () => {
      const { data } = await api
        .fetch('search', {
          searchParams: {
            filterBy,
            orderBy,
            pageNumber,
            pageSize,
            searchTerm,
            seller,
            winner,
          },
        })
        .finally(() => {
          setIsLoading(false);
        });

      if (!isNil(data)) {
        setData(data);
      }
    }, 300)();
  }, [filterBy, orderBy, pageNumber, pageSize, searchTerm, seller, winner]);

  if (isLoading || isNil(data)) {
    return <h3>Loading...</h3>;
  }

  return (
    <>
      <Filter />
      {!isLoading && data.results.length <= 0 && <EmptyFilter isShowingReset />}
      <div className="grid grid-cols-4 gap-6">
        {data.results.map(auction => {
          return <AuctionCard auction={auction} key={auction.id} />;
        })}
      </div>
      {data.results.length > 0 && (
        <div className="flex justify-center">
          <AppPagination pageCount={data.pageCount} />
        </div>
      )}
    </>
  );
}
