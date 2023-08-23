'use client';
import { TruckIcon } from '@heroicons/react/24/outline';
import {
  ArrowLeftOnRectangleIcon,
  CogIcon,
  TrophyIcon,
  UserIcon,
} from '@heroicons/react/24/solid';
import { Button } from '@nextui-org/button';
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from '@nextui-org/dropdown';
import Link from 'next/link';
import { Session } from 'next-auth';
import { signOut } from 'next-auth/react';
import { JSX } from 'react';

type UserActionsProperties = {
  readonly user: Session['user'];
};

export function UserActions({ user }: UserActionsProperties): JSX.Element {
  return (
    <Dropdown>
      <DropdownTrigger>
        <Button variant="bordered">{`Welcome, ${user.name}`}</Button>
      </DropdownTrigger>
      <DropdownMenu aria-label="Actions">
        <DropdownItem
          key="myAuctions"
          startContent={<UserIcon height={16} width={16} />}
        >
          <Link href="/">My Auctions</Link>
        </DropdownItem>
        <DropdownItem
          key="autionsWon"
          startContent={<TrophyIcon height={16} width={16} />}
        >
          <Link href="/">Auctions Won</Link>
        </DropdownItem>
        <DropdownItem
          key="sellMyCar"
          startContent={<TruckIcon height={16} width={16} />}
        >
          <Link href="/">Sell My Car</Link>
        </DropdownItem>
        <DropdownItem
          key="session"
          startContent={<CogIcon height={16} width={16} />}
        >
          <Link href="/session">Session (dev only)</Link>
        </DropdownItem>
        <DropdownItem
          key="logout"
          startContent={<ArrowLeftOnRectangleIcon height={16} width={16} />}
        >
          <button
            type="button"
            onClick={(): void => {
              signOut({ callbackUrl: '/' });
            }}
          >
            Logout
          </button>
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}
