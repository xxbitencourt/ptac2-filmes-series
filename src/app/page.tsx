import {
  Card,
  CardHeader,
} from "@/components/ui/card"

export default function Home() {
  const cards = [
    "Cena clássica de aventura em uma floresta misteriosa.",
    "Um herói solitário encarando a imensidão do deserto.",
    "Paisagem futurista com arranha-céus iluminados.",
    "Dois viajantes explorando ruínas antigas.",
    "Batalha épica em um castelo medieval.",
    "Guardiã da floresta protegendo a natureza.",
    "Cavaleiro em busca de uma relíquia perdida.",
    "Cidade mística flutuando entre as nuvens.",
    "Explorador em uma caverna iluminada por cristais.",
    "Viagem intergaláctica em direção a um novo planeta.",
  ]

  return (
    <div className="min-h-screen flex flex-col">
      {/* Cabeçalho no topo */}
      <header className="w-full bg-gray-900 text-white py-4 px-6 flex items-center justify-between shadow-md">
        <h1 className="text-xl font-bold">Filmes e Séries</h1>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/3/3a/Cinema_icon.png"
          alt="Logo Filmes e Séries"
          className="w-10 h-10 object-contain"
        />
      </header>

      {/* Conteúdo principal */}
      <main className="flex-1 p-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 w-full">
          {cards.map((desc, index) => (
            <div key={index} className="w-full max-w-sm mx-auto">
              <Card className="w-full">
                <CardHeader className="p-0">
                  <div className="w-full h-64">
                    <img
                      src="https://m.media-amazon.com/images/M/MV5BOGMwZGJiM2EtMzEwZC00YTYzLWIxNzYtMmJmZWNlZjgxZTMwXkEyXkFqcGc@._V1_.jpg"
                      alt={`Imagem do card ${index + 1}`}
                      loading="lazy"
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </div>
                </CardHeader>
              </Card>

              {/* Descrição fora do card */}
              <p className="mt-2 text-sm text-muted-foreground text-center">
                {desc}
              </p>
            </div>
          ))}
        </div>
      </main>
    </div>
  )
}
