import { component$, useComputed$, useSignal } from "@builder.io/qwik";

export default component$(() => {
  const count = useSignal(0);
  const doubleCount = useComputed$(() => {
    return count.value * 2;
  });

  return (
    <button
      id="buttonId"
      onClick$={() => {
        count.value = count.value + 1;
        const element = document.querySelector("#buttonId");
        console.log(count.value, doubleCount.value, element?.textContent);
      }}
    >
      {doubleCount}
    </button>
  );
});
