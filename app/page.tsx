import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import MovieRow from './components/MovieRow';
import { getImageUrl, getNetflixOriginals, getTopRated, getTrendingMovies } from '@/src/lib/tmdb';
import type { Movie } from '@/src/types/movie';

const mapMovieRow = (movie: Movie) => ({
  id: movie.id.toString(),
  title: movie.title || movie.name || 'Untitled',
  poster: getImageUrl(movie.poster_path || movie.backdrop_path),
});

export default async function Home() {
  const [trendingRes, originalsRes, topRatedRes] = await Promise.all([
    getTrendingMovies(),
    getNetflixOriginals(),
    getTopRated(),
  ]);

  const trendingMovies = trendingRes.results.map(mapMovieRow);
  const netflixMovies = originalsRes.results.map(mapMovieRow);
  const topRatedMovies = topRatedRes.results.map(mapMovieRow);

  const featuredMovie = originalsRes.results[0] || trendingRes.results[0] || topRatedRes.results[0] || null;
  const heroImage = featuredMovie
    ? getImageUrl(featuredMovie.backdrop_path || featuredMovie.poster_path)
    : '/placeholder.svg';
  const heroTitle = featuredMovie?.title || featuredMovie?.name || 'Featured Movie';
  const heroDescription =
    featuredMovie?.overview ||
    'Discover top movies and original series powered by TMDB.';

  return (
    <main className="min-h-screen bg-black">
      <Navbar />

      <HeroSection
        title={heroTitle}
        description={heroDescription}
        backgroundImage={heroImage}
      />

      <MovieRow title="Trending Now" movies={trendingMovies} />
      <MovieRow title="Top Rated" movies={topRatedMovies} />
      <MovieRow title="Netflix Originals" movies={netflixMovies} />

      <footer className="bg-black/80 border-t border-gray-700 px-6 sm:px-12 md:px-16 lg:px-24 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-gray-400 text-sm">
          <div className="space-y-4">
            <h3 className="font-bold text-white text-base">Company</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Jobs</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Press</a></li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="font-bold text-white text-base">Help Center</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Account</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Media Center</a></li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="font-bold text-white text-base">Legal</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white transition-colors">Privacy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Terms</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Cookie Preferences</a></li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="font-bold text-white text-base">Social</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white transition-colors">Facebook</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Instagram</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Twitter</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-8 text-gray-500 text-xs">
          <p>dibuat oleh Gorga.</p>
        </div>
      </footer>
    </main>
  );
}
