'use server';
import { urlBuilder } from '@ethang/url';
import { z } from 'zod';

import { zodFetch } from '../../../lib/requests';
import { auctionsSchema } from '../auctions/schema';
import { getTokenWorkaround } from './auth-actions';

type GetDataParameters = {
  filterBy?: string;
  orderBy?: string;
  pageNumber: number;
  pageSize?: number;
  searchTerm?: string;
  seller?: string;
  winner?: string;
};

const baseUrl = 'http://localhost:6001';

export async function getData(
  parameters: GetDataParameters,
): Promise<z.output<typeof auctionsSchema> | undefined> {
  const builder = urlBuilder('search', {
    searchParams: parameters,
    urlBase: baseUrl,
  });

  const { data } = await zodFetch(
    new Request(builder.toString()),
    auctionsSchema,
  );

  return data;
}

export type UpdateAuctionTestReturn =
  | string
  | { message: string; status: number };

export async function updateAuctionTest(): Promise<UpdateAuctionTestReturn> {
  const data = {
    mileage: Math.floor(Math.random() * 100_000) + 1,
  };
  const token = await getTokenWorkaround();

  const builder = urlBuilder('auctions/afbee524-5972-4075-8800-7d1f9d7b0a0c', {
    urlBase: baseUrl,
  });

  const response = await fetch(builder.toString(), {
    body: JSON.stringify(data),
    headers: {
      Authorization: `Bearer ${token?.access_token}`,
      'Content-Type': 'application/json',
    },
    method: 'PUT',
  });

  if (!response.ok) {
    return { message: response.statusText, status: response.status };
  }

  return response.statusText;
}
