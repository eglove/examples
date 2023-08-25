'use server';

import { revalidatePath } from 'next/cache';

import { getDefaultHeaders } from '../src/app/actions/auth-actions';
import { api } from './api';

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export async function createAuction(body: string) {
  return api.fetch('createAuction', {
    requestOptions: {
      body,
      headers: await getDefaultHeaders(),
    },
  });
}

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export async function updateAuction(body: string, id: string) {
  const results = await api.fetch('updateAuction', {
    pathVariables: { id },
    requestOptions: {
      body,
      headers: await getDefaultHeaders(),
    },
  });

  revalidatePath(`/auctions/${id}`);

  return results;
}

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export async function deleteAuction(id: string) {
  const results = await api.fetch('deleteAuction', {
    pathVariables: { id },
    requestOptions: {
      headers: await getDefaultHeaders(),
    },
  });

  revalidatePath(`/auctions/${id}`);

  return results;
}
