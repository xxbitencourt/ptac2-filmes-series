export default function Home() {
  const cards = [
    {
      img: "https://m.media-amazon.com/images/M/MV5BOGMwZGJiM2EtMzEwZC00YTYzLWIxNzYtMmJmZWNlZjgxZTMwXkEyXkFqcGc@._V1_.jpg",
      desc: "Em Superman, acompanhamos a jornada do super-herói em tentar conciliar suas duas personas: sua herança extraterrestre como kryptoniano e sua vida humana, criado como Clark Kent na cidade de Smallville no Kansas",
    },
    {
      img: "https://m.media-amazon.com/images/M/MV5BOGM5MzA3MDAtYmEwMi00ZDNiLTg4MDgtMTZjOTc0ZGMyNTIwXkEyXkFqcGc@._V1_.jpg",
      desc: "Quarteto Fantástico: Primeiros Passos acompanha um grupo de astronautas que passa por uma tempestade de raios cósmicos durante seu voo experimental. Ao retornar à Terra, os tripulantes descobrem que possuem novas e bizarras habilidades.",
    },
    {
      img: "https://m.media-amazon.com/images/M/MV5BNmE4YmIxNWQtMzJhMy00NDI5LWFmYjEtMGYyMmFhNzdjODVmXkEyXkFqcGc@._V1_.jpg",
      desc: "Em um futuro distópico, 100 jovens participam de uma competição brutal na qual só um pode sobreviver. A cada passo, a tensão aumenta",
    },
    {
      img: "https://m.media-amazon.com/images/M/MV5BOGQ3YWUzYjEtMTJiYy00ZjQ0LWI0YjktYjhiNGVhNGExYTM3XkEyXkFqcGc@._V1_.jpg",
      desc: "Em Demon Slayer: Kimetsu no Yaiba - Castelo Infinito, a vida do jovem Tanjiro muda por completo quando descobre que sua família foi assassinada por uma raça demoníaca conhecida como Onis. A única sobrevivente deste massacre foi Nezuko, irmã de Tanjiro, que não saiu ilesa desse confronto e foi transformada em um demônio. Diante dessa trágica e sombria circunstância, ele parte numa jornada em busca de uma cura para Nezuko.",
    },
    {
      img: "https://m.media-amazon.com/images/M/MV5BNjgwYTI0YjctMWYzNS00MmI1LWI5YTctNmE1YjBkNDFlNWMxXkEyXkFqcGc@._V1_.jpg",
      desc: "Em Extermínio: A Evolução, uma nova história aterrorizante ambientada no mundo criado a partir de Extermínio. Já se passaram quase três décadas desde que o vírus da raiva escapou de um laboratório de armas biológicas e, neste momento, mesmo permanecendo em uma quarentena implacável, alguns encontraram maneiras de existir em meio aos infectados.",
    },
    {
      img: "https://m.media-amazon.com/images/M/MV5BOWYxZTM1ZGMtMjg5MC00NzcyLTk0ZTEtZWI0ZThkNDJiYjZmXkEyXkFqcGc@._V1_.jpg",
      desc: "The Smashing Machine mergulha na trajetória física e emocional do lendário lutador de MMA Mark Kerr. A trama explora os altos e baixos da carreira do esportista, falando sobre sua luta contra o vício, suas vitórias e seu relacionamento amoroso durante o auge da fama no UFC.",
    },
    {
      img: "https://m.media-amazon.com/images/M/MV5BM2VmMzRkYzgtMzg2ZC00OTFkLTkwMTYtNTMxNjM2YzI1MjgyXkEyXkFqcGc@._V1_.jpg",
      desc: "Ed e Lorraine se veem obrigados a encarar seus maiores medos, colocando suas vidas em risco em uma batalha final contra forças malignas. O filme promete encerrar a história dos investigadores com suspense e momentos de tensão, consolidando a franquia como uma das mais populares do gênero.",
    },
    {
      img: "https://m.media-amazon.com/images/M/MV5BNjA3N2Q2Y2UtNzljMC00NDhhLWI3ODQtZGQ2ZmMxNTIwNTFkXkEyXkFqcGc@._V1_.jpg",
      desc: "Por Inteiro é um drama romântico que gira em torno de Laura (Imogen Poots) e Simon (Brett Goldstein), dois melhores amigos que nutrem um amor escondido um pelo outro, mesmo depois de um teste encontrar um deles com sua suposta alma gêmea. O filme acompanha a vida dos dois ao longo dos doze anos seguintes, após eles se depararem com um novo e empolgante teste para combinar almas gêmeas.",
    },
    {
      img: "https://m.media-amazon.com/images/M/MV5BZjE1OGY1OGItZWIxZi00ZDc0LTg0OTgtMzMwNTdiNzNhZDhhXkEyXkFqcGc@._V1_.jpg",
      desc: "Greatness Demands Sacrifice é a frase associada ao filme de terror psicológico americano HIM, produzido por Jordan Peele e dirigido por Justin Tipping, sobre um jovem quarterback que, após um ataque que pode encerrar sua carreira, aceita um programa de treinamento de uma lenda do esporte com um custo sombrio e mortal, forçando-o a questionar até onde ele está disposto a ir para alcançar o estrelato. ",
    },
    {
      img: "https://m.media-amazon.com/images/M/MV5BZDQ2MmEwZmMtNzA4MC00MjljLWIyOWItZjhhMmI0NWJhNzJmXkEyXkFqcGc@._V1_.jpg",
      desc: "Um assassino de aluguel precisa arrumar outro emprego após uma eliminação brutal abalar o submundo do crime.",
    },
  ]

  return (
    <div className="min-h-screen flex flex-col bg-gray-950 text-white">
      {/* Cabeçalho superior */}
      <nav className="w-full bg-gray-900 py-3 px-6 flex items-center justify-between">
        <h1 className="text-xl font-bold">Filmes e Séries</h1>
      </nav>

      {/* Hero section */}
      <header className="relative w-full h-[400px] flex items-center px-12 bg-gray-800">
        {/* Imagem de fundo */}
        <img
          src="https://m.media-amazon.com/images/M/MV5BOGMwZGJiM2EtMzEwZC00YTYzLWIxNzYtMmJmZWNlZjgxZTMwXkEyXkFqcGc@._V1_.jpg"
          alt="Banner Filmes e Séries"
          className="absolute inset-0 w-full h-full object-cover opacity-60"
        />

        {/* Conteúdo por cima da imagem */}
        <div className="relative z-10 max-w-2xl">
          <h2 className="text-5xl font-bold mb-4">Filmes e Séries</h2>
          <p className="text-lg text-gray-200 mb-6">
            Descubra os melhores lançamentos, clássicos e novidades em um só lugar.
          </p>
        </div>
      </header>

      {/* Cards */}
      <main className="flex-1 p-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 w-full">
          {cards.map((card, index) => (
            <div key={index} className="w-full max-w-sm mx-auto bg-gray-900 rounded-lg shadow-lg">
              <div className="w-full h-64">
                <img
                  src={card.img}
                  alt={`Imagem do card ${index + 1}`}
                  loading="lazy"
                  className="w-full h-full object-cover rounded-t-lg"
                />
              </div>
              <div className="p-3 text-sm text-gray-300">{card.desc}</div>
            </div>
          ))}
        </div>
      </main>
    </div>
  )
}
