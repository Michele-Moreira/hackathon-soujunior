import { Button } from '@/components/ui/button'

export function App() {
  return (
    <main className="flex min-h-svh flex-col items-center justify-center gap-4 bg-background p-6 text-center text-foreground">
      <h1 className="text-3xl font-bold md:text-4xl">Hackathon SouJunior</h1>
      <p className="text-muted-foreground">Estrutura inicial no ar. Bora construir!</p>
      <Button>Começar</Button>
    </main>
  )
}
