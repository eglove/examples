import { Client } from '@hyper-fetch/core';

export type Todo = {
  completed: boolean;
  id: number;
  title: string;
  userId: number;
};

export const todosApi = new Client({
  url: 'https://jsonplaceholder.typicode.com',
});

export const getTodos = todosApi.createRequest<Todo[]>()({
  endpoint: '/todos',
  method: 'GET',
});
