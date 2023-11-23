import { component$ } from "@builder.io/qwik";
import { Link, routeLoader$ } from "@builder.io/qwik-city";
import type { Comment } from "~/types/types";

export const useComment = routeLoader$(async ({ params }) => {
  const id = params.id;

  const response = await fetch(
    `https://jsonplaceholder.typicode.com/comments/${id}`,
  );

  return response.json() as Promise<Comment>;
});

export default component$(() => {
  const comment = useComment();

  return (
    <div>
      <Link href={"/loader-action-sync"}>Go Back</Link>
      <h1>{comment.value.email}</h1>
      <p>Id: {comment.value.id}</p>
      <p>{comment.value.body}</p>
    </div>
  );
});
