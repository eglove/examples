import { TruckIcon } from '@heroicons/react/24/outline';
import { JSX } from 'react';

export function Navbar(): JSX.Element {
  return (
    <header className="sticky top-0 z-10 flex items-center justify-between bg-white p-5 text-gray-800 shadow-md">
      <div className="flex items-center gap-2 text-3xl font-semibold text-red-500">
        <TruckIcon height={34} width={34} />
        <div>Carsties Auctions</div>
      </div>
      <div>Search</div>
      <div>Login</div>
    </header>
  );
}
