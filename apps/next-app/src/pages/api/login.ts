import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(
  request: NextApiRequest,
  response: NextApiResponse,
) {
  if (request.method !== 'POST') {
    return response.status(500).json({ error: 'Invalid method' });
  }

  const data = JSON.parse(request.body) as {
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

  return response.json({ password, username });
}
