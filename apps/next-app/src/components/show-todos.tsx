import { useFetch } from '@hyper-fetch/react';

import type { Todo } from '../api/hyper-fetch';
import { getTodos } from '../api/hyper-fetch';
import { getNextPageProperties } from '../util/get-next-page-properties';

export function ShowTodos() {
  const { data } = useFetch(getTodos, {
    initialData: {
      data: getNextPageProperties<Todo[]>(getTodos.cacheKey),
    },
  });

  if (data === null) {
    return null;
  }

  return (
    <div>
      {data.map(datum => {
        return <div key={datum.id}>{datum.title}</div>;
      })}
    </div>
  );
}
