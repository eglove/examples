'use client';
import { useForm } from '@ethang/use-form';
import { ReactNode, useState } from 'react';

import { api, getRequestKeys } from '../../app/api/api';
import { queryClient } from '../../app/client-providers';

export function CreatePost(): ReactNode {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const { formState, handleChange, handleSubmit } = useForm(
    { body: '', title: '' },
    {
      async onSubmit() {
        setIsLoading(true);
        await fetch(api.createPost(formState.title, formState.body));

        await queryClient.invalidateQueries(getRequestKeys(api.posts()));

        setIsLoading(false);
        setIsDialogOpen(false);
      },
    },
  );

  return (
    <div className="m-4">
      <button
        className="cursor-pointer border-2 p-2"
        type="button"
        onClick={(): void => {
          return setIsDialogOpen(true);
        }}
      >
        Create Post
      </button>
      {isDialogOpen && (
        <form className="my-4" onSubmit={handleSubmit}>
          <fieldset disabled={isLoading}>
            <label htmlFor="title">Title:</label>{' '}
            <input
              className="my-2 border-b-2"
              id="title"
              name="title"
              type="text"
              value={formState.title}
              onChange={handleChange}
            />
            <br />
            <label htmlFor="body">Body:</label>{' '}
            <input
              className="my-2 border-b-2"
              id="body"
              name="body"
              type="text"
              value={formState.body}
              onChange={handleChange}
            />
            <br />
            <button className="cursor-pointer border-2 p-2" type="submit">
              {isLoading ? 'Invalidating cache...' : 'Submit'}
            </button>
          </fieldset>
        </form>
      )}
    </div>
  );
}
