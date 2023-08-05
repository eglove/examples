import { z } from 'zod';

export const postSchema = z.object({
  body: z.string(),
  id: z.number(),
  title: z.string(),
  userId: z.number(),
});

export type Post = z.output<typeof postSchema>;

export const postsSchema = z.array(postSchema);

export type Posts = z.output<typeof postsSchema>;
