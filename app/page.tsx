import Link from "next/link"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-background text-foreground">
      <h1 className="text-4xl font-bold tracking-tight">MinhZ Hub</h1>
      <p className="mt-4 text-muted-foreground">Welcome to MinhZ Hub Web</p>
      <nav className="mt-8 flex gap-4">
        <Link
          href="/games"
          className="rounded-md bg-primary px-4 py-2 text-primary-foreground transition-colors hover:bg-primary/90"
        >
          Games
        </Link>
      </nav>
    </main>
  )
}
