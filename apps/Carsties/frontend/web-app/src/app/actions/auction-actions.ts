'use server';
import { isEmpty } from 'lodash';
import { z } from 'zod';

import { auctionsSchema } from '../auctions/schema';

type GetDataParameters = {
  filterBy?: string;
  orderBy?: string;
  pageNumber: number;
  pageSize?: number;
  searchTerm?: string;
};

export async function getData({
  orderBy = 'auctionEnd',
  pageNumber,
  pageSize = 4,
  searchTerm,
  filterBy = 'live',
}: GetDataParameters): Promise<z.output<typeof auctionsSchema> | undefined> {
  const url = new URL('http://localhost:6001/search');

  const searchParameters = new URLSearchParams({
    filterBy,
    orderBy,
    pageNumber: String(pageNumber),
    pageSize: String(pageSize),
  });

  if (searchTerm !== undefined && !isEmpty(searchTerm)) {
    searchParameters.append('searchTerm', searchTerm);
  }

  console.log(`${url.toString()}?${searchParameters.toString()}`);

  const response = await fetch(
    `${url.toString()}?${searchParameters.toString()}`,
  );

  if (!response.ok) {
    throw new Error('Failed to fetch data');
  }

  const parsed = auctionsSchema.safeParse(await response.json());

  if (parsed.success) {
    return parsed.data;
  }

  throw parsed.error;
}
