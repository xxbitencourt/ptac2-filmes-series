"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Loader from "@/components/ui/loader";


const API_KEY = "2755f63cce90b74dc3f0268e0d7d5f19";
const API_BASE = "https://api.themoviedb.org/3";
const IMAGE_BASE = "https://image.tmdb.org/t/p/w500";

interface MovieDetails {
  id: number;
  title: string;
  overview: string;
  poster_path: string | null;
  release_date: string;
  vote_average: number;
  runtime?: number;
  genres?: { id: number; name: string }[];
}

export default function FilmeDetalhesPage() {
  const params = useParams() as { id?: string };
  const id = params?.id;
  const [movie, setMovie] = useState<MovieDetails | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!id) return;
    setMovie(null);
    setError(null);

    async function fetchMovie() {
      try {
        const res = await fetch(`${API_BASE}/movie/${id}?api_key=${API_KEY}&language=pt-BR`);
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const data = await res.json();
        setMovie(data);
      } catch (err) {
        console.error(err);
        setError("Erro ao carregar informações do filme.");
      }
    }

    fetchMovie();
  }, [id]);

  if (!id) return <p style={{ textAlign: "center" }}>ID do filme ausente.</p>;
  if (movie === null && !error) return <Loader />;
  if (error) return <p style={{ textAlign: "center", color: "red" }}>{error}</p>;

  return (
    <main style={{ padding: 20, maxWidth: 900, margin: "0 auto" }}>
      <h1 style={{ fontSize: 26, marginBottom: 12 }}>{movie!.title}</h1>

      <div style={{ display: "flex", gap: 20 }}>
        {movie!.poster_path ? (
          <img src={`${IMAGE_BASE}${movie!.poster_path}`} alt={movie!.title} style={{ width: 260, borderRadius: 8 }} />
        ) : (
          <div style={{ width: 260, height: 380, background: "#eee", borderRadius: 8 }} />
        )}

        <div style={{ flex: 1 }}>
          <p style={{ marginBottom: 8 }}>{movie!.overview}</p>
          <p>📅 Lançamento: {movie!.release_date}</p>
          <p>⏱ Duração: {movie!.runtime ? `${movie!.runtime} min` : "N/A"}</p>
          <p>⭐ Nota: {movie!.vote_average}</p>

          <div style={{ marginTop: 12 }}>
            <strong>Gêneros:</strong>{" "}
            {movie!.genres && movie!.genres.length > 0
              ? movie!.genres.map((g) => g.name).join(", ")
              : "N/A"}
          </div>
        </div>
      </div>
    </main>
  );
}
