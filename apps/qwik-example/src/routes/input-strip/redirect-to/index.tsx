import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";

export default component$(() => {
  return (
    <div>
      <Link href={"/input-strip"}>Go Back to the Bug!</Link>
    </div>
  );
});
