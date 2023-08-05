import { z } from 'zod';

export const postSchema = z.object({
  body: z.string(),
  id: z.number(),
  title: z.string(),
  userId: z.number(),
});

export const postBodySchema = z.object({
  body: z.string(),
  title: z.string(),
});

export type Post = z.output<typeof postSchema>;

export const postsSchema = z.array(postSchema);

export type Posts = z.output<typeof postsSchema>;

export const userSchema = z.object({
  address: z.object({
    city: z.string(),
    geo: z.object({ lat: z.string(), lng: z.string() }),
    street: z.string(),
    suite: z.string(),
    zipcode: z.string(),
  }),
  company: z.object({
    bs: z.string(),
    catchPhrase: z.string(),
    name: z.string(),
  }),
  email: z.string(),
  id: z.number(),
  name: z.string(),
  phone: z.string(),
  username: z.string(),
  website: z.string(),
});

export type User = z.output<typeof userSchema>;

export const usersSchema = z.array(userSchema);

export type Users = z.output<typeof usersSchema>;
