import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

export async function GET(request: NextRequest): Promise<NextResponse> {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get('id');

  const url =
    id === null
      ? 'https://jsonplaceholder.typicode.com/users/'
      : `https://jsonplaceholder.typicode.com/users/${id}`;

  await new Promise(resolve => {
    setTimeout(resolve, 3000);
  });

  const response = await fetch(url);

  return NextResponse.json(await response.json());
}
