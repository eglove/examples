'use client';

import {
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from '@nextui-org/table';
import { JSX } from 'react';
import { z } from 'zod';

import { auctionSchema } from '../../schema';

type DetailedSpecsProperties = {
  readonly auction: z.output<typeof auctionSchema>;
};
export default function DetailedSpecs({
  auction,
}: DetailedSpecsProperties): JSX.Element {
  return (
    <Table hideHeader isStriped aria-label="Details Specifications">
      <TableHeader>
        <TableColumn>Name</TableColumn>
        <TableColumn>Value</TableColumn>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell>Seller</TableCell>
          <TableCell>{auction.seller}</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Make</TableCell>
          <TableCell>{auction.make}</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Model</TableCell>
          <TableCell>{auction.model}</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Year</TableCell>
          <TableCell>{auction.year}</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Mileage</TableCell>
          <TableCell>{auction.mileage}</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Has reserve price?</TableCell>
          <TableCell>{auction.reservedPrice > 0 ? 'Yes' : 'No'}</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
}
