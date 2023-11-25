import { component$, useSignal } from "@builder.io/qwik";
import { Form, routeAction$ } from "@builder.io/qwik-city";

export const useAction = routeAction$((form, event) => {
  const { signalValue } = form;

  console.log("server", signalValue);

  throw event.redirect(301, "/input-strip/redirect-to");
});

export default component$(() => {
  const signalValue = useSignal("world");
  const action = useAction();

  return (
    <div>
      <h1>Bug: Input Strip</h1>
      <Form
        onSubmit$={(event) => {
          event.preventDefault();
          signalValue.value += "a";
          console.log("client", signalValue.value);
          action.submit({ hello: "hello", signalValue: signalValue.value });
        }}
        style={{ display: "grid", width: 100, gap: 8 }}
      >
        <input type="text" name={"hello"} value={"hello"} />
        <input type={"text"} name={"signalValue"} bind:value={signalValue} />
        <button type={"submit"}>Submit</button>
      </Form>
    </div>
  );
});
