import { Suspense } from "react"
import Header from "@/components/header"
import Hero from "@/components/hero"
import FeaturedGames from "@/components/featured-games"
import GameGrid from "@/components/game-grid"
import Footer from "@/components/footer"
import { GamesSkeleton } from "@/components/skeletons"

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#121218]">
      <Header />
      <Hero />
      <div className="container mx-auto px-4 py-8">
        <FeaturedGames />
        <h2 className="text-3xl font-bold text-white mt-12 mb-6 neon-text">All Games</h2>
        <Suspense fallback={<GamesSkeleton />}>
          <GameGrid />
        </Suspense>
      </div>
      <Footer />
    </main>
  )
}

