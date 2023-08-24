import { JSX } from 'react';

import { getSession, getTokenWorkaround } from '../actions/auth-actions';
import { Heading } from '../components/heading';
import { AuthTest } from './auth-test';

export default async function Session(): Promise<JSX.Element> {
  const session = await getSession();
  const token = await getTokenWorkaround();

  return (
    <div>
      <Heading title="Session Dashboard" />
      <div className="border-2 border-blue-500 bg-blue-200 p-2">
        <h3 className="my-2 text-lg">Session Data</h3>
        <pre>{JSON.stringify(session, null, 2)}</pre>
      </div>
      <div className="mt-4">
        <AuthTest />
      </div>
      <div className="mt-4 border-2 border-green-500 bg-green-200 p-2">
        <h3 className="my-2 text-lg">Token Data</h3>
        <pre className="overflow-auto">{JSON.stringify(token, null, 2)}</pre>
      </div>
    </div>
  );
}
