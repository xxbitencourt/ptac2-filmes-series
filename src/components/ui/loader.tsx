
export default function Loader() {
  return (
    <div style={{ height: "60vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 12 }}>
        <div style={{
          width: 48,
          height: 48,
          borderRadius: "50%",
          border: "5px solid #e2e8f0",
          borderTopColor: "#2563eb",
          animation: "spin 1s linear infinite"
        }} />
        <span>Carregando filmes...</span>
      </div>

      <style>{`
        @keyframes spin { to { transform: rotate(360deg); } }
      `}</style>
    </div>
  );
}
