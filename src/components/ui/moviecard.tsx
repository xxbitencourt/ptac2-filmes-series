"use client";

import Link from "next/link";

interface Props {
  id: string;
  title: string;
  image: string;
  year?: string;
  rating?: string;
}

export default function MovieCard({ id, title, image, year, rating }: Props) {
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
          style={{ width: "100%", height: 260, objectFit: "cover", display: "block" }}
        />
        <div style={{ padding: 10 }}>
          <h3 style={{ fontSize: 14, fontWeight: 700, marginBottom: 6, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
            {title}
          </h3>
          <div style={{ fontSize: 13, color: "#555" }}>
            <span>📅 {year || "N/A"}</span>
            <span style={{ marginLeft: 8 }}>⭐ {rating || "N/A"}</span>
          </div>
        </div>
      </div>
    </Link>
  );
}
