import { JSX } from 'react';

import { Logo } from './logo';
import { Search } from './search';

export function Navbar(): JSX.Element {
  return (
    <header className="sticky top-0 z-20 flex items-center justify-between bg-white p-5 text-gray-800 shadow-md">
      <Logo />
      <div>
        <Search />
      </div>
      <div>Login</div>
    </header>
  );
}
