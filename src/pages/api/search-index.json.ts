import type { APIRoute } from 'astro';
import { getSearchIndex } from '../../lib/search';

export const prerender = true;

export const GET: APIRoute = async () => {
  const index = await getSearchIndex();

  return new Response(JSON.stringify(index), {
    headers: {
      'Content-Type': 'application/json',
      'Cache-Control': 'public, max-age=31536000, immutable',
    },
  });
};