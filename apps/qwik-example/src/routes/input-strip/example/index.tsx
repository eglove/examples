import { component$, useSignal, useVisibleTask$ } from "@builder.io/qwik";
import { routeAction$ } from "@builder.io/qwik-city";
import { atom } from "nanostores";

const worldStore = atom("world");

export const useAction = routeAction$((form, event) => {
  const { hello, signalValue } = form;

  console.log("server", signalValue);

  throw event.redirect(301, "/input-strip/redirect-to");
});

export default component$(() => {
  const input = useSignal<HTMLInputElement>();
  const formRef = useSignal<HTMLFormElement>();

  useVisibleTask$(() => {
    worldStore.subscribe((value) => {
      if (input.value) {
        input.value.value = value;
      }
    });
  });

  useVisibleTask$(() => {
    const handleSubmit = async (event: SubmitEvent) => {
      event.preventDefault();
      worldStore.set(`${worldStore.get()}a`);
      console.log("client", worldStore.get());

      const data = new FormData();
      data.set("hello", "world");
      data.set("signalValue", worldStore.get());

      const response = await fetch(
        "http://localhost:5173/input-strip/q-data.json?qaction=Ktp7xfajduk",
        {
          method: "POST",
          body: data,
        },
      );

      location.replace(response.url.split("/").slice(0, -1).join("/"));
    };

    formRef.value?.addEventListener("submit", handleSubmit);
  });

  return (
    <div>
      <h1>Solution: Input Strip</h1>
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
          value={worldStore.get()}
        />
        <button type={"submit"}>Submit</button>
      </form>
    </div>
  );
});
