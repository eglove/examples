import {
  BarsArrowDownIcon,
  ClockIcon,
  FireIcon,
  StopIcon,
  XMarkIcon,
} from '@heroicons/react/24/solid';
import { Select, SelectItem } from '@nextui-org/select';
import type { JSX } from 'react';

import { useParameterStore } from '../hooks/use-parameter-store';

const pageSizeOptions = [
  {
    label: '4',
    value: 4,
  },
  {
    label: '8',
    value: 8,
  },
  {
    label: '12',
    value: 12,
  },
];

const orderButtons = [
  {
    icon: <BarsArrowDownIcon height={16} width={16} />,
    label: 'Alphabetical',
    value: 'make',
  },
  {
    icon: <ClockIcon height={16} width={16} />,
    label: 'End Date',
    value: 'auctionEnd',
  },
  {
    icon: <FireIcon height={16} width={16} />,
    label: 'Recently Added',
    value: 'new',
  },
];

const filterButtons = [
  {
    icon: <FireIcon height={16} width={16} />,
    label: 'Live Auctions',
    value: 'live',
  },
  {
    icon: <StopIcon height={16} width={16} />,
    label: 'Ending Soon',
    value: 'endingSoon',
  },
  {
    icon: <XMarkIcon height={16} width={16} />,
    label: 'Finished',
    value: 'finished',
  },
];

export function Filter(): JSX.Element {
  const orderBy = useParameterStore(state => {
    return state.orderBy;
  });

  const filterBy = useParameterStore(state => {
    return state.filterBy;
  });

  const pageSize = useParameterStore(state => {
    return state.pageSize;
  });

  const setParameters = useParameterStore(state => {
    return state.setParameters;
  });

  const setPageSize = (number: number): void => {
    setParameters({ pageSize: number });
  };

  const setOrderBy = (value: string): void => {
    setParameters({ orderBy: value });
  };

  const setFilterBy = (value: string): void => {
    setParameters({ filterBy: value });
  };

  return (
    <div className="mb-4 flex items-center justify-between gap-4">
      <Select label="Order By" selectedKeys={[orderBy]}>
        {orderButtons.map(option => {
          return (
            <SelectItem
              key={option.value}
              startContent={option.icon}
              value={option.value}
              onClick={(): void => {
                return setOrderBy(option.value);
              }}
            >
              {option.label}
            </SelectItem>
          );
        })}
      </Select>
      <Select label="Filter By" selectedKeys={[filterBy]}>
        {filterButtons.map(option => {
          return (
            <SelectItem
              key={option.value}
              startContent={option.icon}
              value={option.value}
              onClick={(): void => {
                return setFilterBy(option.value);
              }}
            >
              {option.label}
            </SelectItem>
          );
        })}
      </Select>
      <Select label="Page Size" selectedKeys={[String(pageSize)]}>
        {pageSizeOptions.map(option => {
          return (
            <SelectItem
              key={option.value}
              value={String(option.value)}
              onClick={(): void => {
                return setPageSize(option.value);
              }}
            >
              {option.label}
            </SelectItem>
          );
        })}
      </Select>
    </div>
  );
}
