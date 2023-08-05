const ROOT_URL = 'http://localhost:3000';

export const getRequestKeys = (request: Request): string[] => {
  let keys = [request.method, request.url];
  const varyHeader = request.headers.get('Vary');

  if (varyHeader !== null) {
    keys = [...keys, varyHeader];
  }

  return keys;
};

export const apiGet = {
  post(id: string): Request {
    return new Request(`${ROOT_URL}/api/posts?id=${id}`);
  },
  posts(): Request {
    return new Request(`${ROOT_URL}/api/posts`);
  },
  user(id: string): Request {
    return new Request(`${ROOT_URL}/api/users?id=${id}`);
  },
  users(): Request {
    return new Request(`${ROOT_URL}/api/users`);
  },
};
