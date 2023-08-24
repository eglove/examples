import { isNil } from 'lodash';
import { create } from 'zustand';

type QueryState = {
  filterBy: string;
  orderBy: string;
  pageCount: number;
  pageNumber: number;
  pageSize: number;
  searchTerm: string;
  seller?: string;
  winner?: string;
};

type QueryActions = {
  reset: () => void;
  setParameters: (parameters: Partial<QueryState>) => void;
};

const initialState: QueryState = {
  filterBy: 'live',
  orderBy: 'auctionEnd',
  pageCount: 1,
  pageNumber: 1,
  pageSize: 12,
  searchTerm: '',
  seller: undefined,
  winner: undefined,
};

export const useParameterStore = create<QueryState & QueryActions>()(set => {
  return {
    ...initialState,
    reset(): void {
      set(initialState);
    },
    setParameters(newParameters: Partial<QueryState>): void {
      set(state => {
        if (!isNil(newParameters.pageNumber)) {
          return {
            ...state,
            pageNumber: newParameters.pageNumber,
          };
        }

        return {
          ...state,
          ...newParameters,
          pageNumber: 1,
        };
      });
    },
  };
});
