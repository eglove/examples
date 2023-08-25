import { Api } from '@ethang/fetch/api';
import { z } from 'zod';

import { auctionSchema, auctionsSchema } from '../src/app/auctions/schema';

export const api = new Api({
  baseUrl: 'http://localhost:6001',
  requests: {
    createAuction: {
      path: 'auctions',
      requestOptions: {
        method: 'POST',
      },
      zodSchema: z.any(),
    },
    deleteAuction: {
      path: 'auctions/:id',
      requestOptions: {
        method: 'DELETE',
      },
      zodSchema: z.any(),
    },
    getAuctionDetails: {
      path: 'auctions/:id',
      zodSchema: auctionSchema,
    },
    search: {
      path: 'search',
      zodSchema: auctionsSchema,
    },
    updateAuction: {
      path: 'auctions/:id',
      requestOptions: {
        method: 'PUT',
      },
      zodSchema: z.any(),
    },
  },
});
