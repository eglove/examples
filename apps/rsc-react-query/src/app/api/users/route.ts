import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest): Promise<NextResponse> {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get('id');

  const url =
    id === null
      ? 'https://jsonplaceholder.typicode.com/users/'
      : `https://jsonplaceholder.typicode.com/users/${searchParams.get('id')}`;

  const response = await fetch(url);

  return NextResponse.json(await response.json());
}
