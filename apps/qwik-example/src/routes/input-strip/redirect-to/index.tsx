import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";

export default component$(() => {
  return (
    <div style={{ display: "grid", gap: 8 }}>
      <Link href={"/input-strip"}>Go Back to the Bug!</Link>
      <Link href={"/input-strip/example"}>Go Back to the Solution!</Link>
    </div>
  );
});
