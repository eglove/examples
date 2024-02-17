import { betterNumber } from '@ethang/util/better-number';
import { isNil } from '@ethang/util/data';
import Link from 'next/link';
import type { JSX } from 'react';

type ServerPropertes = {
  params: { slug: string };
  searchParams: Record<string, string[] | string | undefined>;
};

type Post = {
  body: string;
  id: number;
  title: string;
  userId: number;
};

type Comment = {
  body: string;
  email: string;
  id: number;
  name: string;
  postId: number;
};

function setSearchParameters(
  currentSearchParameters: ServerPropertes['searchParams'],
  key: string,
  value: string,
): URLSearchParams {
  const searchParameters = new URLSearchParams();

  if (!isNil(currentSearchParameters)) {
    // eslint-disable-next-line guard-for-in
    for (const key in currentSearchParameters) {
      const value = currentSearchParameters[key];

      if (Array.isArray(value)) {
        for (const string of value) {
          searchParameters.append(key, string);
        }
      }

      if (typeof value === 'string') {
        searchParameters.append(key, value);
      }
    }
  }

  searchParameters.set(key, value);

  return searchParameters;
}

export default async function Home({
  searchParams,
}: ServerPropertes): Promise<JSX.Element> {
  const postResponse = await fetch(
    'https://jsonplaceholder.typicode.com/posts',
    {
      headers: {
        'Cache-Control': 'public, max-age=86400, stale-while-revalidate=86400',
      },
    },
  );
  let posts = (await postResponse.json()) as Post[];

  const commentResponse = await fetch(
    'https://jsonplaceholder.typicode.com/comments',
  );
  let comments = (await commentResponse.json()) as Comment[];

  const postPage = (betterNumber(searchParams.posts).number as number) ?? 1;
  const commentPage =
    (betterNumber(searchParams.comments).number as number) ?? 1;

  posts = posts.slice(postPage * 3, postPage * 3 + 3);
  comments = comments.slice(commentPage * 3, commentPage * 3 + 3);

  return (
    <main>
      <h1 className="my-4 text-3xl font-bold underline">
        <Link href="/">Home</Link>
      </h1>
      <h1 className="my-4 text-3xl font-bold">Posts</h1>
      {posts.map(post => {
        return (
          <div key={post.id}>
            <div>Id: {post.id}</div>
            <div>Title: {post.title}</div>
          </div>
        );
      })}
      <div className="flex gap-4">
        <Link
          className="m-4 border-2 p-2"
          scroll={false}
          href={`/?${setSearchParameters(
            searchParams,
            'posts',
            String(postPage - 1),
          ).toString()}`}
        >
          Previous
        </Link>
        <Link
          className="m-4 border-2 p-2"
          scroll={false}
          href={`/?${setSearchParameters(
            searchParams,
            'posts',
            String(postPage + 1),
          ).toString()}`}
        >
          Next
        </Link>
      </div>
      <h1 className="my-4 text-3xl font-bold">Comments</h1>
      {comments.map(comment => {
        return (
          <div key={comment.id}>
            <div>Id: {comment.id}</div>
            <div>Title: {comment.email}</div>
          </div>
        );
      })}
      <div className="flex gap-4">
        <Link
          className="m-4 border-2 p-2"
          scroll={false}
          href={`/?${setSearchParameters(
            searchParams,
            'comments',
            String(commentPage - 1),
          ).toString()}`}
        >
          Previous
        </Link>
        <Link
          className="m-4 border-2 p-2"
          scroll={false}
          href={`/?${setSearchParameters(
            searchParams,
            'comments',
            String(commentPage + 1),
          ).toString()}`}
        >
          Next
        </Link>
      </div>
    </main>
  );
}
