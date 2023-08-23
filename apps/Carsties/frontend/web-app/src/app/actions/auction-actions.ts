'use server';
import { z } from 'zod';

import { auctionsSchema } from '../auctions/schema';

export async function getData(
  pageNumber: number,
  pageSize = 4,
): Promise<z.output<typeof auctionsSchema> | undefined> {
  const url = new URL('http://localhost:6001/search');

  const searchParameters = new URLSearchParams({
    pageNumber: String(pageNumber),
    pageSize: String(pageSize),
  });

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
