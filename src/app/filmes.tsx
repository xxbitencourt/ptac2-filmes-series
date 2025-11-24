
"use client";

import { useEffect, useState } from "react";
import MovieCard from "@/components/ui/moviecard";
import Loader from "@/components/ui/loader";

const API_KEY = "2755f63cce90b74dc3f0268e0d7d5f19";
const API_BASE = "https://api.themoviedb.org/3";

interface Movie {
  id: number;
  title?: string;
  poster_path?: string | null;
  overview?: string;
  release_date?: string;
  vote_average?: number;
}

export default function FilmesPopulares() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let mounted = true;

    async function fetchMovies() {
      try {
        const res = await fetch(`${API_BASE}/movie/popular?api_key=${API_KEY}&language=pt-BR&page=1`);
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const data = await res.json();
        if (mounted) setMovies(data.results || []);
      } catch (err: any) {
        console.error("Erro ao buscar filmes:", err);
        if (mounted) setError("Erro ao carregar filmes.");
      } finally {
        if (mounted) setLoading(false);
      }
    }

    fetchMovies();

    return () => { mounted = false; };
  }, []);

  if (loading) return <Loader />;
  if (error) return <p style={{ textAlign: "center", color: "red" }}>{error}</p>;
  if (!movies || movies.length === 0) return <p style={{ textAlign: "center" }}>Nenhum filme encontrado.</p>;

  const banner = movies[0];

  return (
    <main style={{ padding: 20 }}>
      <h1 style={{ marginBottom: 16, fontSize: 22 }}>🎬 Filmes populares</h1>

      {/* Banner simplificado */}
      {banner && (
        <section style={{ display: "flex", gap: 16, marginBottom: 20, alignItems: "center" }}>
          <div style={{ flex: 1 }}>
            <h2 style={{ fontSize: 18, marginBottom: 8 }}>{banner.title}</h2>
            <p style={{ marginBottom: 6, color: "#444" }}>{banner.overview}</p>
            <div style={{ color: "#444" }}>
              <span>📅 {banner.release_date ? banner.release_date.split("-")[0] : "N/A"}</span>
              <span style={{ marginLeft: 8 }}>⭐ {banner.vote_average ?? "N/A"}</span>
            </div>
          </div>
          <img
            src={banner.poster_path ? `https://image.tmdb.org/t/p/w500${banner.poster_path}` : "https://via.placeholder.com/300x450?text=Sem+Imagem"}
            alt={banner.title}
            style={{ width: 220, borderRadius: 8, objectFit: "cover" }}
          />
        </section>
      )}

      {/* Grid */}
      <section style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(180px, 1fr))", gap: 16 }}>
        {movies.map((m) => (
          <MovieCard key={m.id} movie={m} />
        ))}
      </section>
    </main>
  );
}
