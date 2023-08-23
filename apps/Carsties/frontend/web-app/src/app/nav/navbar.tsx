import { isNil } from 'lodash';
import { JSX } from 'react';

import { getCurrentUser } from '../actions/auth-actions';
import { Login } from './login';
import { Logo } from './logo';
import { Search } from './search';
import { UserActions } from './user-actions';

export async function Navbar(): Promise<JSX.Element> {
  const user = await getCurrentUser();

  return (
    <header className="sticky top-0 z-20 flex items-center justify-between bg-white p-5 text-gray-800 shadow-md">
      <Logo />
      <div>
        <Search />
      </div>
      <div>{isNil(user) ? <Login /> : <UserActions user={user} />}</div>
    </header>
  );
}
