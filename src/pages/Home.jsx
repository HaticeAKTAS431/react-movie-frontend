import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import { getMoviesPage, searchMovies } from "../services/api";
import MovieCard from "../components/MovieCard";

const Home = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1); 
  const [searching, setSearching] = useState(false);

  useEffect(() => {
    const loadMovies = async () => {
      setLoading(true);
      try {
        const movieData = await getMoviesPage(page);
        setMovies((prevMovies) => [...prevMovies, ...movieData.results]);
        setTotalPages(movieData.total_pages);
      } catch (err) {
        console.error(err);
        setError("Hata");
      } finally {
        setLoading(false);
      }
    };

    loadMovies();
  }, [page]);

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;
    if (loading) return;

    setLoading(true);
    setSearching(true);
    setPage(1); 
    setMovies([]);

    try {
      const searchResult = await searchMovies(searchQuery);
      setMovies(searchResult);
      setError(null);
    } catch (err) {
      console.error(err);
      setError("Arama yaparken bir hata oluştu...");
    } finally {
      setLoading(false);
      setSearching(false); 
    }
  };

  const loadMoreMovies = () => {
    if (loading || page >= totalPages) return; 
    setPage(prevPage => prevPage + 2); 
  };

  const handleScroll = (e) => {
    const bottom = e.target.scrollHeight === e.target.scrollTop + e.target.clientHeight;
    if (bottom) {
      loadMoreMovies();
    }
  };

  return (
    <div className="p-8 w-full min-h-screen" onScroll={handleScroll}>
      <form onSubmit={handleSearch} className="max-w-lg mx-auto mb-6 flex gap-4 p-4 bg-gray-600 shadow-md rounded-lg">
        <input
          type="text"
          placeholder="Aramak istediğiniz film..."
          className="flex-1 p-3 border border-gray-700 rounded-md text-black  focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button type="submit" className="px-4 py-3 bg-black text-white rounded-md hover:bg-red-600 transition">
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </button>
      </form>

      {error && <div className="text-red-600 text-center font-semibold">{error}</div>}

      {loading ? (
        <div className="text-center text-lg font-semibold text-gray-600">Loading...</div>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
          {movies.map((movie, index) => (
            <MovieCard movie={movie} key={`${movie.id}-${index}`} />
          ))}
        </div>
      )}

      {searching && !loading && !movies.length && (
        <div className="text-center font-semibold text-gray-600">Sonuç bulunamadı...</div>
      )}

      {!loading && page < totalPages && (
        <button onClick={loadMoreMovies} className="mx-auto block mt-8 px-4 py-2 bg-black text-white rounded-md hover:bg-red-600">
          Daha Fazla Yükle
        </button>
      )}
    </div>
  );
};

export default Home;
