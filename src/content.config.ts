import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const verben = defineCollection({
  loader: glob({
    pattern: '**/*.md',
    base: './src/content/verben',
  }),

  schema: z.object({
    lemma: z.string(),
    translation: z.string(),
    type: z.enum(['regular', 'irregular', 'modal', 'mixed']),
    auxiliary: z.enum(['haben', 'sein']).optional(),
    participle: z.string().optional(),
    preterite: z.string().optional(),
    separable: z.boolean().default(false),
    base: z.string().optional(),
    reflexive: z.boolean().default(false),
    level: z.enum(['A1', 'A2', 'B1', 'B2', 'C1', 'C2']).optional(),
  }),
});

const vokabeln = defineCollection({
  loader: glob({
    pattern: '**/*.md',
    base: './src/content/vokabeln',
  }),

  schema: z.object({
    word: z.string(),
    translation: z.string(),
    type: z.enum([
      'noun',
      'verb',
      'adjective',
      'adverb',
      'preposition',
      'conjunction',
      'pronoun',
      'other',
    ]),
    article: z.enum(['der', 'die', 'das']).optional(),
    plural: z.string().optional(),
    category: z.string().optional(),
    level: z.enum(['A1', 'A2', 'B1', 'B2', 'C1', 'C2']).optional(),
  }),
});

const grammatik = defineCollection({
  loader: glob({
    pattern: '**/*.md',
    base: './src/content/grammatik',
  }),

  schema: z.object({
    title: z.string(),
    category: z.string(),
    level: z.enum(['A1', 'A2', 'B1', 'B2', 'C1', 'C2']).optional(),
    order: z.number().default(0),
  }),
});

export const collections = {
  verben,
  vokabeln,
  grammatik,
};