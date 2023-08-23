import { Pagination } from '@nextui-org/pagination';
import { JSX } from 'react';

type AppPaginationProperties = {
  readonly currentPage: number;
  readonly onPageChange: (page: number) => void;
  readonly pageCount: number;
};

export function AppPagination({
  pageCount,
  currentPage,
  onPageChange,
}: AppPaginationProperties): JSX.Element {
  return (
    <Pagination
      className="my-5"
      page={currentPage}
      total={pageCount}
      variant="bordered"
      onChange={onPageChange}
    />
  );
}
