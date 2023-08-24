'use client';
import { useForm } from '@ethang/use-form';
import { Button } from '@nextui-org/button';
import { Input } from '@nextui-org/input';
import { DateTime } from 'luxon';
import { JSX, useState } from 'react';
import { z } from 'zod';

const formSchema = z.object({
  auctionEnd: z
    .string()
    .min(1, 'Date is required')
    .transform(value => {
      const luxonDate = DateTime.fromJSDate(new Date(value), {
        zone: Intl.DateTimeFormat().resolvedOptions().timeZone,
      });

      return luxonDate.toISO();
    }),
  color: z.string().min(1, 'Color is required'),
  imageUrl: z.string().min(1, 'Image URL is required').url('Must be valid URL'),
  make: z.string().min(1, 'Make is required'),
  mileage: z.number({ invalid_type_error: 'Mileage is required' }),
  model: z.string().min(1, 'Model is required'),
  reservedPrice: z.number(),
  year: z
    .number({ invalid_type_error: 'Year is required' })
    .min(1000, 'Year is required'),
});

export function AuctionForm(): JSX.Element {
  const [isLoading, setIsLoading] = useState(false);
  const { formState, clearForm, handleSubmit, handleChange, fieldErrors } =
    useForm(
      {
        auctionEnd: new Date().toISOString().slice(0, 16),
        color: '',
        imageUrl: '',
        make: '',
        mileage: '',
        model: '',
        reservedPrice: '',
        year: '',
      },
      {
        onSubmit() {
          setIsLoading(true);
          console.log(formSchema.parse(formState));
          setIsLoading(false);
        },
        zodValidator: formSchema,
      },
    );

  return (
    <form className="mt-3 flex flex-col" onSubmit={handleSubmit}>
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
              value={formState.year}
              onChange={handleChange}
            />
            <Input
              errorMessage={fieldErrors?.mileage?.[0]}
              label="Mileage"
              name="mileage"
              type="number"
              value={formState.mileage}
              onChange={handleChange}
            />
          </div>
          <Input
            errorMessage={fieldErrors?.imageUrl?.[0]}
            label="Image URL"
            name="imageUrl"
            value={formState.imageUrl}
            onChange={handleChange}
          />
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
