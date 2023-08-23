'use client';
import { debounce, isNil } from 'lodash';
import { JSX, useEffect, useState } from 'react';
import { z } from 'zod';

import { getData } from '../actions/auction-actions';
import { AppPagination } from '../components/app-pagination';
import { EmptyFilter } from '../components/empty-filter';
import { useParameterStore } from '../hooks/use-parameter-store';
import { AuctionCard } from './auction-card';
import { Filter } from './filter';
import { auctionsSchema } from './schema';

export function Listings(): JSX.Element {
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

  useEffect(() => {
    debounce(async () => {
      const data = await getData({
        filterBy,
        orderBy,
        pageNumber,
        pageSize,
        searchTerm,
      });
      if (!isNil(data)) {
        setData(data);
      }
    }, 300)();
  }, [filterBy, orderBy, pageNumber, pageSize, searchTerm]);

  if (isNil(data)) {
    return <h3>Loading...</h3>;
  }

  return (
    <>
      <Filter />
      {data.results.length <= 0 && <EmptyFilter isShowingReset />}
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
