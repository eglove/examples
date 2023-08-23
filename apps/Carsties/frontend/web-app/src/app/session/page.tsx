import { JSX } from 'react';

import { getSession } from '../actions/auth-actions';
import { Heading } from '../components/heading';

export default async function Session(): Promise<JSX.Element> {
  const session = await getSession();

  return (
    <div>
      <Heading title="Session Dashboard" />
      <div className="border-2 border-blue-500 bg-blue-200 p-2">
        <h3 className="my-2 text-lg">Session Data</h3>
        <pre>{JSON.stringify(session, null, 2)}</pre>
      </div>
    </div>
  );
}
