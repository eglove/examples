import { component$, useSignal, useTask$ } from "@builder.io/qwik";
import { Link, routeLoader$, useLocation } from "@builder.io/qwik-city";
import { default as postJson } from "../../assets/posts.json";
import { default as commentJson } from "../../assets/comments.json";

const DEFAULT_PAGE = "0";

export const usePostLoader = routeLoader$(({ url }) => {
  const postPage = url.searchParams.get("posts") ?? DEFAULT_PAGE;
  console.log(postPage);

  const start = Number(postPage) * 3;

  return postJson.slice(start, start + 3);
});

export const useCommentLoader = routeLoader$(({ url }) => {
  const commentPage = url.searchParams.get("comments") ?? DEFAULT_PAGE;

  return commentJson.slice(Number(commentPage), Number(commentPage) + 3);
});

function setUrlParam(url: URL, key: string, value: string) {
  const newUrl = new URL(url);
  newUrl.searchParams.set(key, value);
  return newUrl.toString();
}

export default component$(() => {
  const location = useLocation();

  const posts = usePostLoader();
  const postPage = useSignal(DEFAULT_PAGE);

  const comments = useCommentLoader();
  const commentsPage = useSignal(DEFAULT_PAGE);

  useTask$(({ track }) => {
    track(() => {
      return location.url.toString();
    });

    postPage.value = location.url.searchParams.get("posts") ?? DEFAULT_PAGE;
    commentsPage.value =
      location.url.searchParams.get("comments") ?? DEFAULT_PAGE;
  });

  return (
    <div>
      <Link href={"/loader-action-sync"}>
        <h1>Loader/Action Sync</h1>
      </Link>
      <h2>Posts</h2>
      {posts.value.map((post) => {
        return (
          <div key={post.id}>
            <h3>
              <Link
                href={`/loader-action-sync/post/${post.id}`}
                style={{ textDecoration: "underline" }}
              >
                Title: {post.title}
              </Link>
            </h3>
            <p>Id: {post.id}</p>
            <p>{post.body}</p>
          </div>
        );
      })}
      <div style={{ display: "flex", gap: 8 }}>
        {Number(postPage.value) > 0 && (
          <Link
            scroll={false}
            href={setUrlParam(
              location.url,
              "posts",
              String(Number(postPage.value) - 1),
            )}
            style={{ textDecoration: "underline" }}
          >
            Previous Page
          </Link>
        )}
        <div>Page: {postPage.value}</div>
        {Number(postPage.value) <= postJson.length && (
          <Link
            scroll={false}
            href={setUrlParam(
              location.url,
              "posts",
              String(Number(postPage.value) + 1),
            )}
            style={{ textDecoration: "underline" }}
          >
            Next Page
          </Link>
        )}
      </div>
      <h2>Comments</h2>
      {comments.value.map((comment) => {
        return (
          <div key={comment.id}>
            <h3>
              <Link
                href={`/loader-action-sync/post/${comment.id}`}
                style={{ textDecoration: "underline" }}
              >
                Email: {comment.email}
              </Link>
            </h3>
            <p>Id: {comment.id}</p>
            <p>{comment.body}</p>
          </div>
        );
      })}
      <div style={{ display: "flex", gap: 8 }}>
        {Number(commentsPage.value) > 0 && (
          <Link
            scroll={false}
            href={setUrlParam(
              location.url,
              "comments",
              String(Number(commentsPage.value) - 1),
            )}
            style={{ textDecoration: "underline" }}
          >
            Previous Page
          </Link>
        )}
        <div>Page: {commentsPage.value}</div>
        {Number(commentsPage.value) <= postJson.length && (
          <Link
            scroll={false}
            href={setUrlParam(
              location.url,
              "comments",
              String(Number(commentsPage.value) + 1),
            )}
            style={{ textDecoration: "underline" }}
          >
            Next Page
          </Link>
        )}
      </div>
    </div>
  );
});
