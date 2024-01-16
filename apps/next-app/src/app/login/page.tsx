import { cookies } from 'next/headers';

// eslint-disable-next-line @typescript-eslint/require-await
async function login(formData: FormData) {
  'use server';

  const username = formData.get('username');
  const password = formData.get('password');

  if (username === 'hello' && password === 'world') {
    cookies().set('token', 'myToken');
  }
}

export default function () {
  const token = cookies().get('token');

  return (
    <>
      {token !== undefined && <p>{token?.value}</p>}
      {/* eslint-disable-next-line @typescript-eslint/no-misused-promises */}
      <form action={login} className="grid gap-4">
        <label htmlFor="username">
          Username:{' '}
          <input
            className="border-2"
            id="username"
            name="username"
            type="text"
          />
        </label>
        <label htmlFor="password">
          Password:{' '}
          <input
            className="border-2"
            id="password"
            name="password"
            type="password"
          />
        </label>
        <button className="w-max border-2 px-2 py-1" type="submit">
          Submit
        </button>
      </form>
    </>
  );
}
