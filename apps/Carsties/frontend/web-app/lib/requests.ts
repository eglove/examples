import { urlBuilder } from '@ethang/url';
import { z, ZodType } from 'zod';

const baseUrl = 'http://localhost:6001';

type SearchParameters = {
  filterBy?: string;
  orderBy?: string;
  pageNumber: number;
  pageSize?: number;
  searchTerm?: string;
  seller?: string;
  winner?: string;
};

type DataResponse<DataType extends ZodType> = {
  data?: z.output<DataType>;
  errors?: string[];
  isSuccess: boolean;
};

export async function zodFetch<SchemaType extends ZodType>(
  request: Request,
  schema: SchemaType,
): Promise<DataResponse<SchemaType>> {
  const response = await fetch(request);

  if (!response.ok) {
    throw new Error('Failed to fetch data');
  }

  const parsed = schema.safeParse(await response.json());

  if (parsed.success) {
    return {
      data: parsed.data,
      errors: undefined,
      isSuccess: parsed.success,
    };
  }

  return {
    data: undefined,
    errors: parsed.error.format()._errors,
    isSuccess: parsed.success,
  };
}

export const requests = {
  search(parameters: SearchParameters): Request {
    const builder = urlBuilder('search', {
      searchParams: parameters,
      urlBase: baseUrl,
    });

    return new Request(builder.toString());
  },
};
