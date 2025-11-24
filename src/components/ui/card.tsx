import Link from "next/link";

export default function Card({ movie }) {
  return (
    <Link href={`/filme/${movie.id}`}>
      <div className="bg-gray-900 text-white rounded-lg overflow-hidden hover:scale-105 duration-200 cursor-pointer">
        <img 
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} 
          alt={movie.title} 
          className="w-full"
        />
        
        <div className="p-3">
          <h2 className="font-bold">{movie.title}</h2>
          <p className="text-sm opacity-70">⭐ {movie.vote_average}</p>
        </div>
      </div>
    </Link>
  );
}
