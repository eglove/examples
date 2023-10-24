'use server';

import { revalidatePath } from 'next/cache';

import { getDefaultHeaders } from '../src/app/actions/auth-actions';
import { api } from './api';

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export async function createAuction(body: string) {
  return api.fetch.createAuction({
    requestInit: {
      body,
      headers: await getDefaultHeaders(),
    },
  });
}

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export async function updateAuction(body: string, id: string) {
  const results = await api.fetch.updateAuction({
    pathVariables: [id],
    requestInit: {
      body,
      headers: await getDefaultHeaders(),
    },
  });

  revalidatePath(`/auctions/${id}`);

  return results;
}

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export async function deleteAuction(id: string) {
  const results = api.fetch.deleteAuction({
    pathVariables: [id],
    requestInit: {
      headers: await getDefaultHeaders(),
    },
  });

  revalidatePath(`/auctions/${id}`);

  return results;
}
