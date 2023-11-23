import { component$, useSignal, useComputed$ } from "@builder.io/qwik";

export default component$(() => {
  const count = useSignal(0);
  const doubleCount = useComputed$(() => count.value * 2);
  const button = useSignal<HTMLButtonElement>();
  console.log(
    "render",
    count.value,
    doubleCount.value,
    button.value?.textContent,
  );

  return (
    <button
      ref={button}
      onClick$={() => {
        count.value++;
        console.log(
          "click",
          count.value,
          doubleCount.value,
          button.value?.textContent,
        );
      }}
    >
      {doubleCount.value}
    </button>
  );
});
