import { getServerSession, Session } from 'next-auth';

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
