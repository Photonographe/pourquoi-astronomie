import { defineCollection, z } from 'astro:content';

const questionsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    category: z.string(),
    question: z.string(),
    source: z.string(),
    funFact: z.string().optional(),
    tags: z.array(z.string()).default([]),
    difficulty: z.enum(['facile', 'moyen', 'difficile']).default('facile'),
  }),
});

const settingsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    contact_email: z.string().email(),
    site_url: z.string().url(),
  }),
});

export const collections = {
  'questions': questionsCollection,
  'settings': settingsCollection,
};
