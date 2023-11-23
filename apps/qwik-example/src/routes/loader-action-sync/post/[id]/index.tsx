import { component$ } from "@builder.io/qwik";
import { Link, routeLoader$ } from "@builder.io/qwik-city";
import type { Post } from "~/types/types";

export const usePost = routeLoader$(async ({ params }) => {
  const id = params.id;

  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`,
  );

  return response.json() as Promise<Post>;
});

export default component$(() => {
  const post = usePost();

  return (
    <div>
      <Link href={"/loader-action-sync"}>Go Back</Link>
      <h1>{post.value.title}</h1>
      <p>Id: {post.value.id}</p>
      <p>{post.value.body}</p>
    </div>
  );
});
