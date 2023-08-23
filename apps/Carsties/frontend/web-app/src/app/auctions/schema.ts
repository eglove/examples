import { z } from 'zod';

export const auctionSchema = z
  .object({
    auctionEnd: z.string(),
    color: z.string(),
    createdAt: z.string(),
    currentHighBid: z.number(),
    id: z.string(),
    imageUrl: z.string(),
    make: z.string(),
    mileage: z.number(),
    model: z.string(),
    reservedPrice: z.number(),
    seller: z.string(),
    soldAmount: z.number(),
    status: z.string(),
    updatedAt: z.string(),
    winner: z.null(),
    year: z.number(),
  })
  .readonly();

export const auctionsSchema = z
  .object({
    pageCount: z.number(),
    results: z.array(auctionSchema),
    totalCount: z.number(),
  })
  .readonly();
