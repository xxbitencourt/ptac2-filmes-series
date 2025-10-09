import { Movie } from "@/types/movie";

// URL base da API TMDb (The Movie Database)
const API_BASE = "https://api.themoviedb.org/3";
// Chave de API pública para testes (você pode obter uma grátis em themoviedb.org)
const API_KEY = "3fd2be6f0c70a2a598f084ddfb75487c";
const IMAGE_BASE = "https://image.tmdb.org/t/p/w500";




export async function getPopularMovies(): Promise<Movie[]> {
  try {
    const response = await fetch(
      `${API_BASE}/movie/popular?api_key=${API_KEY}&language=pt-BR&page=1`);

    if (!response.ok) {
      throw new Error(`Erro HTTP: ${response.status}`);
    }

    const data = await response.json();

    if (!data.results) {
      return [];
    }

    // Converte os dados do TMDb para o formato do nosso Movie
    return data.results
      .slice(0, 12)
      .map(
        (item: {
          id: number;
          title: string;
          release_date?: string;
          poster_path?: string;
          overview?: string;
          vote_average?: number;
          genre_ids?: number[];
        }) => ({
          id: item.id.toString(),
          title: item.title,
          year: item.release_date ? item.release_date.split("-")[0] : "",
          image: item.poster_path
            ? `${IMAGE_BASE}${item.poster_path}`: "https://via.placeholder.com/300x450?text=Sem+Imagem",
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
