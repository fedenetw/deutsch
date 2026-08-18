import { getCollection } from 'astro:content';

const BASE_URL = import.meta.env.BASE_URL;

function withBase(path: string) {
  return `${BASE_URL}${path.replace(/^\/+/, '')}`;
}

export async function getSearchIndex() {
  const [verben, vokabeln, grammatik] = await Promise.all([
    getCollection('verben'),
    getCollection('vokabeln'),
    getCollection('grammatik'),
  ]);

  const index = [
    ...verben.map((verb) => ({
      kind: 'verb' as const,
      title: verb.data.lemma,
      translation: verb.data.translation,
      url: withBase(`/verben/${verb.id}/`),
      level: verb.data.level ?? null,

      terms: [
        verb.data.lemma,
        verb.data.translation,
        verb.data.preterite,
        verb.data.participle,
        verb.data.base,
      ].filter(Boolean),
    })),

    ...vokabeln.map((vocab) => ({
      kind: 'vocabulary' as const,
      title: vocab.data.article
        ? `${vocab.data.article} ${vocab.data.word}`
        : vocab.data.word,
      translation: vocab.data.translation,
      url: withBase(`/vokabeln/${vocab.id}/`),
      level: vocab.data.level ?? null,

      terms: [
        vocab.data.word,
        vocab.data.article,
        vocab.data.translation,
        vocab.data.plural,
      ].filter(Boolean),
    })),

    ...grammatik.map((grammar) => ({
      kind: 'grammar' as const,
      title: grammar.data.title,
      translation: null,
      url: withBase(`/grammatik/${grammar.id}/`),
      level: grammar.data.level ?? null,

      terms: [
        grammar.data.title,
        grammar.data.category,
      ].filter(Boolean),
    })),
  ];

  return index;
}