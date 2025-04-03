import { Suspense } from "react"
import { notFound } from "next/navigation"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { getGameBySlug, incrementGamePlays } from "@/lib/games"
import { ThumbsUp, ThumbsDown, Share2, Flag, Heart } from "lucide-react"
import RelatedGames from "@/components/related-games"

export async function generateMetadata({ params }) {
  const game = await getGameBySlug(params.slug)

  if (!game) {
    return {
      title: "Game Not Found - Arcade Portal",
    }
  }

  return {
    title: `${game.title} - Play Online for Free | Arcade Portal`,
    description: game.description,
  }
}

export default async function GamePage({ params }) {
  const game = await getGameBySlug(params.slug)

  if (!game) {
    notFound()
  }

  // Increment play count
  await incrementGamePlays(params.slug)

  return (
    <main className="min-h-screen bg-[#121218]">
      <Header />

      <div className="container px-4 py-8 mx-auto">
        <div className="grid gap-8 md:grid-cols-[1fr_300px]">
          <div className="space-y-6">
            <h1 className="text-3xl font-bold text-white neon-text">{game.title}</h1>

            <Card className="overflow-hidden border-0 shadow-xl bg-[#1a1a24]/80 backdrop-blur-md neon-glow">
              <div className="game-frame-container">
                <iframe src={game.url} title={game.title} className="game-frame" allowFullScreen></iframe>
              </div>
            </Card>

            <div className="flex flex-wrap items-center gap-3">
              <Button
                variant="outline"
                size="sm"
                className="gap-1 text-white bg-neon-purple/10 border-neon-purple/30 hover:bg-neon-purple/20 hover:border-neon-purple/50"
              >
                <ThumbsUp className="w-4 h-4" />
                <span>Like</span>
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="gap-1 text-white bg-neon-purple/10 border-neon-purple/30 hover:bg-neon-purple/20 hover:border-neon-purple/50"
              >
                <ThumbsDown className="w-4 h-4" />
                <span>Dislike</span>
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="gap-1 text-white bg-neon-purple/10 border-neon-purple/30 hover:bg-neon-purple/20 hover:border-neon-purple/50"
              >
                <Heart className="w-4 h-4" />
                <span>Favorite</span>
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="gap-1 text-white bg-neon-purple/10 border-neon-purple/30 hover:bg-neon-purple/20 hover:border-neon-purple/50"
              >
                <Share2 className="w-4 h-4" />
                <span>Share</span>
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="gap-1 text-white bg-neon-purple/10 border-neon-purple/30 hover:bg-neon-purple/20 hover:border-neon-purple/50"
              >
                <Flag className="w-4 h-4" />
                <span>Report</span>
              </Button>
            </div>

            <Tabs defaultValue="about" className="w-full">
              <TabsList className="grid w-full grid-cols-3 bg-neon-purple/10">
                <TabsTrigger
                  value="about"
                  className="data-[state=active]:bg-neon-purple/30 data-[state=active]:text-white"
                >
                  About
                </TabsTrigger>
                <TabsTrigger
                  value="instructions"
                  className="data-[state=active]:bg-neon-purple/30 data-[state=active]:text-white"
                >
                  Instructions
                </TabsTrigger>
                <TabsTrigger
                  value="comments"
                  className="data-[state=active]:bg-neon-purple/30 data-[state=active]:text-white"
                >
                  Comments
                </TabsTrigger>
              </TabsList>
              <TabsContent value="about" className="p-4 mt-2 rounded-md bg-neon-purple/5 border border-neon-purple/20">
                <div className="prose prose-invert max-w-none">
                  <p>{game.description}</p>
                  <div className="grid grid-cols-2 gap-4 mt-4">
                    <div>
                      <h4 className="text-sm font-semibold text-neon-purple">Category</h4>
                      <p>{game.category}</p>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-neon-purple">Plays</h4>
                      <p>{game.plays.toLocaleString()}</p>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-neon-purple">Developer</h4>
                      <p>{game.developer}</p>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-neon-purple">Added</h4>
                      <p>{new Date(game.createdAt).toLocaleDateString()}</p>
                    </div>
                  </div>
                </div>
              </TabsContent>
              <TabsContent
                value="instructions"
                className="p-4 mt-2 rounded-md bg-neon-purple/5 border border-neon-purple/20"
              >
                <div className="prose prose-invert max-w-none">
                  <p>{game.instructions || "No instructions provided for this game."}</p>
                </div>
              </TabsContent>
              <TabsContent
                value="comments"
                className="p-4 mt-2 rounded-md bg-neon-purple/5 border border-neon-purple/20"
              >
                <p className="text-white/70">No comments yet. Be the first to comment!</p>
              </TabsContent>
            </Tabs>
          </div>

          <div className="space-y-6">
            <h2 className="text-xl font-bold text-white neon-text">Related Games</h2>
            <Suspense fallback={<p className="text-white/70">Loading related games...</p>}>
              <RelatedGames currentGameId={game._id} category={game.category} />
            </Suspense>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}

