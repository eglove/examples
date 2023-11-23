import { component$, useSignal, useVisibleTask$ } from "@builder.io/qwik";
import { routeAction$ } from "@builder.io/qwik-city";

export const useAction = routeAction$((form, event) => {
  const { hello, signalValue } = form;

  console.log("server", signalValue);

  throw event.redirect(301, "/input-strip/redirect-to");
});

export default component$(() => {
  const input = useSignal<HTMLInputElement>();
  const formRef = useSignal<HTMLFormElement>();
  const signvalValue = useSignal("world");

  useVisibleTask$(() => {
    const handleSubmit = async (event: SubmitEvent) => {
      event.preventDefault();
      signvalValue.value += "a";
      console.log("client", signvalValue.value);

      const data = new FormData();
      data.set("hello", "world");
      data.set("signalValue", signvalValue.value);

      await fetch(
        "http://localhost:5173/input-strip/q-data.json?qaction=Ktp7xfajduk",
        {
          method: "POST",
          body: data,
        },
      );
    };

    formRef.value?.addEventListener("submit", handleSubmit);
  });

  return (
    <div>
      <h1>Bug: Input Strip</h1>
      <form
        ref={formRef}
        style={{ display: "grid", width: 100, gap: 8 }}
        method={"POST"}
      >
        <input type="text" name={"hello"} value={"hello"} />
        <input
          ref={input}
          type={"text"}
          name={"signalValue"}
          bind:value={signvalValue}
        />
        <button type={"submit"}>Submit</button>
      </form>
    </div>
  );
});
