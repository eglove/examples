import { NextRequest, NextResponse } from 'next/server';

import { postBodySchema } from '../types';

export async function GET(request: NextRequest): Promise<NextResponse> {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get('id');

  const url =
    id === null
      ? 'https://jsonplaceholder.typicode.com/posts/'
      : `https://jsonplaceholder.typicode.com/posts/${id}`;

  const response = await fetch(url);

  return NextResponse.json(await response.json());
}

export async function POST(request: NextRequest): Promise<NextResponse> {
  const { body, title } = postBodySchema.parse(await request.json());

  const response = await fetch('https://jsonplaceholder.typicode.com/posts/', {
    body: JSON.stringify({ body, title, userId: 1 }),
    method: 'POST',
  });

  return NextResponse.json(await response.json());
}
