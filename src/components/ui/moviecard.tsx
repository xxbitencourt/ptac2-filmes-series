
"use client";

import Link from "next/link";

interface MovieCardProps {
  movie: {
    id: number | string;
    title?: string;
    poster_path?: string | null;
    release_date?: string;
    vote_average?: number;
  };
}

const IMAGE_BASE = "https://image.tmdb.org/t/p/w500";

export default function MovieCard({ movie }: MovieCardProps) {
  const id = String(movie.id);
  const title = movie.title || "Sem título";
  const image = movie.poster_path ? `${IMAGE_BASE}${movie.poster_path}` : "https://via.placeholder.com/300x450?text=Sem+Imagem";
  const year = movie.release_date ? movie.release_date.split("-")[0] : "N/A";
  const rating = movie.vote_average !== undefined ? movie.vote_average.toFixed(1) : "N/A";

  return (
    <Link href={`/filmes/${id}`} className="group">
      <div
        style={{
          borderRadius: 8,
          overflow: "hidden",
          boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
          background: "#fff",
          cursor: "pointer",
          transition: "transform .18s ease, box-shadow .18s ease",
        }}
        onMouseEnter={(e) => (e.currentTarget.style.transform = "translateY(-6px)")}
        onMouseLeave={(e) => (e.currentTarget.style.transform = "translateY(0px)")}
      >
        <img
          src={image}
          alt={title}
          style={{ width: "100%", height: 300, objectFit: "cover", display: "block" }}
        />
        <div style={{ padding: 10 }}>
          <h3 style={{ fontSize: 14, fontWeight: 700, marginBottom: 6, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
            {title}
          </h3>
          <div style={{ fontSize: 13, color: "#555" }}>
            <span>📅 {year}</span>
            <span style={{ marginLeft: 8 }}>⭐ {rating}</span>
          </div>
        </div>
      </div>
    </Link>
  );
}
