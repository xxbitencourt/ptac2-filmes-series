"use client";

import { useEffect, useState } from "react";

// Definição da interface para tipar os filmes
interface Filme {
  id: number;
  title: string;
  popularity: number;
  poster_path: string | null;
  release_date: string | null;
}

export default function FilmesPopulares() {
  const [filmes, setFilmes] = useState<Filme[]>([]); // estado inicial vazio
  const [carregando, setCarregando] = useState(true); // controle de loading
  const API_KEY = "SUA_CHAVE_AQUI"; // 🔑 Substitua pela sua chave TMDb
  const BASE_URL = "https://api.themoviedb.org/3";
  const IMG_URL = "https://image.tmdb.org/t/p/w300";

  useEffect(() => {
    async function buscarFilmesPopulares() {
      try {
        const resposta = await fetch(
          `${BASE_URL}/movie/popular?api_key=${API_KEY}&language=pt-BR&page=1`
        );
        const dados = (await resposta.json()) as { results: Filme[] };
        setFilmes(dados.results || []); // garante que seja array
      } catch (erro) {
        console.error("Erro ao buscar filmes:", erro);
        setFilmes([]);
      } finally {
        setCarregando(false);
      }
    }

    buscarFilmesPopulares();
  }, []);

  return (
    <div style={styles.page}>
      <h1 style={styles.titulo}>🎬 Filmes Mais Populares</h1>
      <div style={styles.container}>
        {carregando ? (
          <p>Carregando filmes...</p>
        ) : filmes.length > 0 ? (
          filmes.map((filme) => (
            <div key={filme.id} style={styles.card}>
              {filme.poster_path && (
                <img
                  src={IMG_URL + filme.poster_path}
                  alt={filme.title}
                  style={styles.img}
                />
              )}
              <div style={styles.info}>
                <h3 style={styles.nome}>{filme.title}</h3>
                <p>
                  📅{" "}
                  {filme.release_date
                    ? filme.release_date.split("-")[0]
                    : "N/A"}
                </p>
                <p>🔥 Popularidade: {filme.popularity.toFixed(1)}</p>
              </div>
            </div>
          ))
        ) : (
          <p>Nenhum filme encontrado.</p>
        )}
      </div>
    </div>
  );
}

// Estilos inline
const styles: { [key: string]: React.CSSProperties } = {
  page: {
    fontFamily: "Arial, sans-serif",
    backgroundColor: "#111",
    color: "#fff",
    textAlign: "center",
    minHeight: "100vh",
    padding: "20px",
  },
  titulo: { marginBottom: "30px" },
  container: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: "20px",
  },
  card: {
    backgroundColor: "#1c1c1c",
    borderRadius: "10px",
    padding: "10px",
    width: "180px",
    boxShadow: "0 2px 8px rgba(255,255,255,0.1)",
    transition: "transform 0.2s",
  },
  img: { width: "100%", borderRadius: "8px" },
  info: { marginTop: "10px" },
  nome: { fontSize: "1em", margin: "5px 0" },
};
