import { Api } from '@ethang/fetch/api';

export const api = new Api({
  baseUrl: 'http://localhost:6001',
  requests: {
    createAuction: {
      defaultRequestInit: { method: 'POST' },
      path: 'auctions',
    },
    deleteAuction: {
      defaultRequestInit: { method: 'DELETE' },
      path: 'auctions',
    },
    getAuctionDetails: {
      path: 'auctions/:id',
    },
    search: {
      path: 'search',
    },
    updateAuction: {
      defaultRequestInit: { method: 'PUT' },
      path: 'auctions',
    },
  },
});
