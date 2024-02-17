import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(
  request: NextApiRequest,
  response: NextApiResponse,
) {
  if (request.method !== 'POST') {
    response.status(500).json({ error: 'Invalid method' });
    return;
  }

  const data = JSON.parse(request.body as string) as {
    password: string;
    username: string;
  };

  const { username, password } = data;

  if (username === 'hello' && password === 'world') {
    response.setHeader('Set-Cookie', 'token=myToken; HttpOnly; Secure;');
  } else {
    response.setHeader(
      'Set-Cookie',
      'token=myToken; HttpOnly; Secure; Max-Age=0;',
    );
  }

  response.json({ password, username });
}
