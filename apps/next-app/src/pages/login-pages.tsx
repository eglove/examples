import type { ChangeEvent, FormEvent } from 'react';
import { useState } from 'react';

export default function () {
  const [formState, setFormState] = useState({
    password: 'world',
    username: 'hello',
  });

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = event.target;

    setFormState(previousState => {
      return {
        ...previousState,
        [name]: value,
      };
    });
  };

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    const response = await fetch('/api/login', {
      body: JSON.stringify(formState),
      method: 'POST',
    });

    const data = await response.json();

    console.info(data);
  };

  return (
    <form className="grid gap-4" onSubmit={handleSubmit}>
      <label htmlFor="username">
        Username:{' '}
        <input
          className="border-2"
          id="username"
          name="username"
          type="text"
          value={formState.username}
          onChange={handleChange}
        />
      </label>
      <label htmlFor="password">
        Password:{' '}
        <input
          className="border-2"
          id="password"
          name="password"
          type="password"
          value={formState.password}
          onChange={handleChange}
        />
      </label>
      <button className="w-max border-2 px-2 py-1" type="submit">
        Submit
      </button>
    </form>
  );
}
