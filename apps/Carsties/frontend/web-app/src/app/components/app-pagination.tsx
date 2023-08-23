import { Pagination } from '@nextui-org/pagination';
import { JSX } from 'react';

import { useParameterStore } from '../hooks/use-parameter-store';

type AppPaginationProperties = {
  readonly pageCount: number;
};

export function AppPagination({
  pageCount,
}: AppPaginationProperties): JSX.Element {
  const pageNumber = useParameterStore(state => {
    return state.pageNumber;
  });

  const setParameters = useParameterStore(state => {
    return state.setParameters;
  });

  const setPageNumber = (number: number): void => {
    setParameters({ pageNumber: number });
  };

  return (
    <Pagination
      className="my-5"
      page={pageNumber}
      total={pageCount}
      variant="bordered"
      onChange={setPageNumber}
    />
  );
}
