import { getTodos } from '../api/hyper-fetch';
import { ShowTodos } from '../components/show-todos';

export const getServerSideProps = async () => {
  const { data } = await getTodos.send();

  return { props: { [getTodos.cacheKey]: data } };
};

export default function Todos() {
  return <ShowTodos />;
}
