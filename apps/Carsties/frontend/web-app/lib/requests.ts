import { Api } from '@ethang/fetch/api';

import { auctionsSchema } from '../src/app/auctions/schema';

export const api = new Api({
  baseUrl: 'http://localhost:6001',
  requests: {
    search: {
      path: 'search',
      zodSchema: auctionsSchema,
    },
  },
});
