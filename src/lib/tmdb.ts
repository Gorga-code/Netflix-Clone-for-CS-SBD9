import type { Movie, TmdbResponse } from '@/src/types/movie';

const API_KEY = process.env.NEXT_PUBLIC_TMDB_API_KEY;
const API_BASE_URL = 'https://api.themoviedb.org/3';
const IMAGE_BASE_URL =
  process.env.NEXT_PUBLIC_TMDB_IMAGE_BASE_URL || 'https://image.tmdb.org/t/p/original';

async function fetchTmdb<T>(endpoint: string): Promise<T> {
  if (!API_KEY) {
    console.warn('NEXT_PUBLIC_TMDB_API_KEY is not set. Returning empty TMDB result.');
    return {
      page: 1,
      results: [],
      total_pages: 0,
      total_results: 0,
    } as unknown as T;
  }

  const url = `${API_BASE_URL}${endpoint}${endpoint.includes('?') ? '&' : '?'}api_key=${API_KEY}&language=en-US`;
  const response = await fetch(url, {
    next: { revalidate: 3600 },
  });

  if (!response.ok) {
    console.error('TMDB fetch failed:', response.status, response.statusText);
    return {
      page: 1,
      results: [],
      total_pages: 0,
      total_results: 0,
    } as unknown as T;
  }

  return (await response.json()) as T;
}

export async function getTrendingMovies() {
  return fetchTmdb<TmdbResponse<Movie>>('/trending/movie/week');
}

export async function getTopRated() {
  return fetchTmdb<TmdbResponse<Movie>>('/movie/top_rated');
}

export async function getNetflixOriginals() {
  return fetchTmdb<TmdbResponse<Movie>>('/discover/tv?with_networks=213');
}

export function getImageUrl(path?: string | null) {
  if (!path) {
    return '/placeholder.svg';
  }

  return `${IMAGE_BASE_URL}${path}`;
}
