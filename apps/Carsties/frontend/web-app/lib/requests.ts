'use server';

import { isNil } from '@ethang/util/data';
import { revalidatePath } from 'next/cache';

import { getDefaultHeaders } from '../src/app/actions/auth-actions';
import { auctionSchema } from '../src/app/auctions/schema';
import { api } from './api';

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export async function createAuction(body: string) {
  const response = await api.fetch.createAuction({
    requestInit: {
      body,
      headers: await getDefaultHeaders(),
    },
  });

  if (isNil(response)) {
    return;
  }

  return api.parseJson(response, auctionSchema);
}

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export async function updateAuction(body: string, id: string) {
  const response = await api.fetch.updateAuction({
    pathVariables: [id],
    requestInit: {
      body,
      headers: await getDefaultHeaders(),
    },
  });

  revalidatePath(`/auctions/${id}`);

  if (isNil(response)) {
    return;
  }

  return api.parseJson(response, auctionSchema);
}

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export async function deleteAuction(id: string) {
  const response = await api.fetch.deleteAuction({
    pathVariables: [id],
    requestInit: {
      headers: await getDefaultHeaders(),
    },
  });

  revalidatePath(`/auctions/${id}`);

  if (isNil(response)) {
    return;
  }

  return api.parseJson(response, auctionSchema);
}
