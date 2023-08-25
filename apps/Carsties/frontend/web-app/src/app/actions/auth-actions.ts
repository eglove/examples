import { isNil } from 'lodash';
import { NextApiRequest } from 'next';
import { cookies, headers } from 'next/headers';
import { getServerSession, Session } from 'next-auth';
import { getToken, JWT } from 'next-auth/jwt';

import { authOptions } from '../api/auth/[...nextauth]/route';

export async function getSession(): Promise<Session | null> {
  return getServerSession(authOptions);
}

export async function getCurrentUser(): Promise<Session['user'] | null> {
  try {
    const session = await getSession();

    if (session === null) {
      return null;
    }

    return session.user;
  } catch {
    return null;
  }
}

export async function getDefaultHeaders(): Promise<HeadersInit> {
  const token = await getTokenWorkaround();

  let headers: HeadersInit = {
    'Content-Type': 'application/json',
  };

  if (!isNil(token)) {
    headers = {
      ...headers,
      Authorization: `Bearer ${token.access_token}`,
    };
  }

  return headers;
}

export async function getTokenWorkaround(): Promise<JWT | null> {
  const request = {
    cookies: Object.fromEntries(
      cookies()
        .getAll()
        .map(item => {
          return [item.name, item.value];
        }),
    ),
    headers: Object.fromEntries(headers()),
  } as NextApiRequest;

  return getToken({ req: request });
}
