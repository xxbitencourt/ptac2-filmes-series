"use client";

import { useEffect, useState } from "react";
import MovieCard from "@/components/ui/moviecard";
import Loader from "@/components/ui/loader";

interface Movie {
  id: number;
  title: string;
  poster_path: string;
  overview: string;
}

const FilmesPopulares = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchMovies() {
      try {
        const res = await fetch(
          `${API_BASE}/movie/popular?api_key=${API_KEY}&language=pt-BR&page=1`
        );
        const data = await res.json();
        setMovies(data.results);
      } finally {
        setLoading(false);
      }
    }

    fetchMovies();
  }, []);

  if (loading) return <Loader />;

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4">
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
};

export default FilmesPopulares;
