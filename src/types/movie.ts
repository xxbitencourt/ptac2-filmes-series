// Tipos para os dados dos filmes da API IMDB
export interface Movie {
  id: string;
  title: string;
  year: string;
  image: string;
  description?: string;
  imDbRating?: string;
  genre?: string;
  director?: string;
  stars?: string;
  runtimeMins?: string;
}

// Tipo para a resposta da busca
export interface SearchResponse {
  results: Movie[];
  errorMessage?: string;
}