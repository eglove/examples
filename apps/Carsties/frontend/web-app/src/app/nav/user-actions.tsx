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
import { useRouter } from 'next/navigation';
import { Session } from 'next-auth';
import { signOut } from 'next-auth/react';
import { JSX } from 'react';

import { useParameterStore } from '../hooks/use-parameter-store';

type UserActionsProperties = {
  readonly user: Session['user'];
};

export function UserActions({ user }: UserActionsProperties): JSX.Element {
  const router = useRouter();
  const setParameters = useParameterStore(state => {
    return state.setParameters;
  });

  const setWinner = (): void => {
    setParameters({
      seller: undefined,
      winner: user.username,
    });

    router.push('/');
  };

  const setSeller = (): void => {
    setParameters({
      seller: user.username,
      winner: undefined,
    });

    router.push('/');
  };

  return (
    <Dropdown>
      <DropdownTrigger>
        <Button variant="bordered">{`Welcome, ${user.name}`}</Button>
      </DropdownTrigger>
      <DropdownMenu aria-label="Actions">
        <DropdownItem
          key="myAuctions"
          startContent={<UserIcon height={16} width={16} />}
          textValue="My Auctions"
        >
          <button type="button" onClick={setSeller}>
            My Auctions
          </button>
        </DropdownItem>
        <DropdownItem
          key="autionsWon"
          startContent={<TrophyIcon height={16} width={16} />}
          textValue="Auctions Won"
        >
          <button type="button" onClick={setWinner}>
            Auctions Won
          </button>
        </DropdownItem>
        <DropdownItem
          key="sellMyCar"
          startContent={<TruckIcon height={16} width={16} />}
          textValue="Sell My Car"
        >
          <Link href="/auctions/create">Sell My Car</Link>
        </DropdownItem>
        <DropdownItem
          key="session"
          startContent={<CogIcon height={16} width={16} />}
          textValue="Session (dev only)"
        >
          <Link href="/session">Session (dev only)</Link>
        </DropdownItem>
        <DropdownItem
          key="logout"
          startContent={<ArrowLeftOnRectangleIcon height={16} width={16} />}
          textValue="Logout"
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
