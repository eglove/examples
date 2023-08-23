import { Select, SelectItem } from '@nextui-org/select';
import { JSX } from 'react';

type FilterProperties = {
  readonly pageSize: keyof typeof pageSizeOptions;
  readonly setPageSize: (size: number) => void;
};

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

export function Filter({
  pageSize,
  setPageSize,
}: FilterProperties): JSX.Element {
  return (
    <div className="mb-4 flex items-center justify-between">
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
