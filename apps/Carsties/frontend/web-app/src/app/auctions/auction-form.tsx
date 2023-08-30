'use client';
import { useForm } from '@ethang/use-form';
import { Button } from '@nextui-org/button';
import { Input } from '@nextui-org/input';
import { isEmpty } from 'lodash';
import { DateTime } from 'luxon';
import { usePathname, useRouter } from 'next/navigation';
import type { JSX } from 'react';
import { useState } from 'react';
import { z } from 'zod';

import { createAuction, updateAuction } from '../../../lib/requests';
import type { auctionSchema } from './schema';

type AuctionFormProperties = {
  readonly auction?: z.output<typeof auctionSchema>;
};

const updateSchema = z.object({
  color: z.string().min(1, 'Color is required'),
  make: z.string().min(1, 'Make is required'),
  mileage: z.number({ invalid_type_error: 'Mileage is required' }),
  model: z.string().min(1, 'Model is required'),
  year: z
    .number({ invalid_type_error: 'Year is required' })
    .min(1000, 'Year is required'),
});

const createSchema = z.object({
  auctionEnd: z
    .string()
    .min(1, 'Date is required')
    .transform(value => {
      const luxonDate = DateTime.fromJSDate(new Date(value), {
        zone: Intl.DateTimeFormat().resolvedOptions().timeZone,
      });

      return luxonDate.toUTC().toString();
    }),
  imageUrl: z.string().min(1, 'Image URL is required').url('Must be valid URL'),
  reservedPrice: z.string().transform(value => {
    if (isEmpty(value)) {
      return '0';
    }

    return value;
  }),
  ...updateSchema.shape,
});

export function AuctionForm({ auction }: AuctionFormProperties): JSX.Element {
  const router = useRouter();
  const pathname = usePathname();
  const isCreating = pathname === '/auctions/create';

  const [isLoading, setIsLoading] = useState(false);
  const {
    formError,
    formState,
    clearForm,
    handleSubmit,
    handleChange,
    fieldErrors,
  } = useForm(
    auction
      ? {
          color: auction.color,
          make: auction.make,
          mileage: auction.mileage,
          model: auction.model,
          year: auction.year,
        }
      : {
          auctionEnd: new Date().toISOString().slice(0, 16),
          color: 'Black',
          imageUrl:
            'https://cdn.pixabay.com/photo/2012/11/02/13/02/car-63930_1280.jpg',
          make: 'Ford',
          mileage: 100,
          model: 'Mustang',
          reservedPrice: '',
          year: 2022,
        },
    {
      async onSubmit() {
        setIsLoading(true);

        const { data } = isCreating
          ? await createAuction(JSON.stringify(createSchema.parse(formState)))
          : await updateAuction(
              JSON.stringify(updateSchema.parse(formState)),
              auction?.id ?? '',
            );

        router.push(`/auctions/details/${isCreating ? data.id : auction?.id}`);
      },
      zodValidator: isCreating ? createSchema : updateSchema,
    },
  );

  return (
    <form className="mt-3 flex flex-col" onSubmit={handleSubmit}>
      {!isEmpty(formError) && <p>{formError}</p>}
      <fieldset disabled={isLoading}>
        <div className="grid gap-2">
          <Input
            errorMessage={fieldErrors?.make?.[0]}
            label="Make"
            name="make"
            value={formState.make}
            onChange={handleChange}
          />
          <Input
            errorMessage={fieldErrors?.model?.[0]}
            label="Model"
            name="model"
            value={formState.model}
            onChange={handleChange}
          />
          <Input
            errorMessage={fieldErrors?.color?.[0]}
            label="Color"
            name="color"
            value={formState.color}
            onChange={handleChange}
          />
          <div className="grid grid-cols-2 gap-3">
            <Input
              errorMessage={fieldErrors?.year?.[0]}
              label="Year"
              name="year"
              type="number"
              value={formState.year as unknown as string}
              onChange={handleChange}
            />
            <Input
              errorMessage={fieldErrors?.mileage?.[0]}
              label="Mileage"
              name="mileage"
              type="number"
              value={formState.mileage as unknown as string}
              onChange={handleChange}
            />
          </div>
          {isCreating && (
            <Input
              errorMessage={fieldErrors?.imageUrl?.[0]}
              label="Image URL"
              name="imageUrl"
              value={formState.imageUrl}
              onChange={handleChange}
            />
          )}
          {isCreating && (
            <div className="grid grid-cols-2 gap-3">
              <Input
                errorMessage={fieldErrors?.reservedPrice?.[0]}
                label="Reserve Price"
                name="reservedPrice"
                type="number"
                value={formState.reservedPrice}
                onChange={handleChange}
              />
              <Input
                errorMessage={fieldErrors?.auctionEnd?.[0]}
                label="Auction End"
                name="auctionEnd"
                type="datetime-local"
                value={formState.auctionEnd}
                onChange={handleChange}
              />
            </div>
          )}
        </div>
        <div className="mt-3 flex justify-between">
          <Button
            color={isLoading ? 'default' : 'danger'}
            variant="bordered"
            onClick={clearForm}
          >
            Clear
          </Button>
          <Button
            color={isLoading ? 'default' : 'primary'}
            type="submit"
            variant="bordered"
          >
            Submit
          </Button>
        </div>
      </fieldset>
    </form>
  );
}
