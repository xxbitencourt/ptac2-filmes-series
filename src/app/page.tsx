import {
  Card,
  CardHeader,
} from "@/components/ui/card"

export default function Home() {
  return (
    <div className="w-full max-w-sm">
      <Card className="w-full">
        <CardHeader className="p-0">
          <img
            src="https://m.media-amazon.com/images/M/MV5BOGMwZGJiM2EtMzEwZC00YTYzLWIxNzYtMmJmZWNlZjgxZTMwXkEyXkFqcGc@._V1_.jpg"
            alt="Imagem do card"
            loading="lazy"
            className="w-full h-56 object-cover rounded-lg"
          />
        </CardHeader>
      </Card>

      {/* Descrição fora do card */}
      <p className="mt-2 text-sm text-muted-foreground">
        Aqui vai a descrição da imagem ou do conteúdo do card.
      </p>
    </div>
  )
}
