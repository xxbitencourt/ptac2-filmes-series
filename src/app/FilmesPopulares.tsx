"use client";

import { useEffect, useState } from "react";

const API_KEY = "2755f63cce90b74dc3f0268e0d7d5f19"; // Substitua pela sua chave TMDb
const API_BASE = "https://api.themoviedb.org/3";
const IMAGE_BASE = "https://image.tmdb.org/t/p/w500";

interface Movie {
  id: string;
  title: string;
  year: string;
  image: string;
  description: string;
  imDbRating: string;
  genre: string;
  director: string;
  stars: string;
  runtimeMins: string;
}

// Função para buscar filmes populares
async function getPopularMovies(): Promise<Movie[]> {
  try {
    const response = await fetch(
      `${API_BASE}/movie/popular?api_key=${API_KEY}&language=pt-BR&page=1`
    );

    if (!response.ok) {
      throw new Error(`Erro HTTP: ${response.status}`);
    }

    const data = await response.json();

    if (!data.results) return [];

    return data.results.slice(0, 12).map(
      (item: {
        id: number;
        title: string;
        release_date?: string;
        poster_path?: string;
        overview?: string;
        vote_average?: number;
      }) => ({
        id: item.id.toString(),
        title: item.title,
        year: item.release_date ? item.release_date.split("-")[0] : "",
        image: item.poster_path
          ? `${IMAGE_BASE}${item.poster_path}`
          : "https://via.placeholder.com/300x450?text=Sem+Imagem",
        description: item.overview || "",
        imDbRating: item.vote_average ? item.vote_average.toFixed(1) : "",
        genre: "",
        director: "",
        stars: "",
        runtimeMins: "",
      })
    );
  } catch (error) {
    console.error("Erro ao buscar filmes populares:", error);
    return [];
  }
}

export default function FilmesPopulares() {
  const [filmes, setFilmes] = useState<Movie[]>([]);
  const [carregando, setCarregando] = useState(true);

  useEffect(() => {
    async function carregarFilmes() {
      const dados = await getPopularMovies();
      setFilmes(dados);
      setCarregando(false);
    }
    carregarFilmes();
  }, []);

  if (carregando) return <p style={{ textAlign: "center" }}>Carregando filmes...</p>;
  if (!filmes || filmes.length === 0)
    return <p style={{ textAlign: "center" }}>Nenhum filme encontrado.</p>;

  const bannerFilme = filmes[0];

  return (
    <div className="page">
      <h1 className="titulo">🎬 Filmes </h1>

      {/* Banner */}
      {bannerFilme && (
        <div className="banner">
          <div className="banner-esquerda">
            <h2>{bannerFilme.title}</h2>
            <p>{bannerFilme.description}</p>
            <p>📅 {bannerFilme.year || "N/A"}</p>
            <p>⭐ Avaliação: {bannerFilme.imDbRating}</p>
          </div>
          <img src={bannerFilme.image} alt={bannerFilme.title} className="banner-img" />
        </div>
      )}

      {/* Cards */}
      <div className="container">
        {filmes.map((filme) => (
          <div key={filme.id} className="card">
            <img src={filme.image} alt={filme.title} />
            <div className="info">
              <h3 className="nome">{filme.title}</h3>
              <p>📅 {filme.year || "N/A"}</p>
              <p>⭐ Avaliação: {filme.imDbRating}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
