import { Button } from "@/components/ui/button"
import { ArrowRight, Gamepad2 } from "lucide-react"
import Link from "next/link"

export default function Hero() {
  return (
    <div className="relative overflow-hidden bg-[#121218]">
      <div className="absolute inset-0 z-0 bg-dark-grid bg-[size:30px_30px]"></div>
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-neon-purple/10 to-neon-blue/10"></div>

      <div className="container relative z-10 px-4 py-16 mx-auto text-center md:py-24">
        <div className="inline-block p-2 mb-6 rounded-full bg-neon-purple/10 border border-neon-purple/30 animate-pulse-glow">
          <Gamepad2 className="w-8 h-8 text-neon-purple" />
        </div>

        <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl neon-text">
          Play Awesome Games <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-blue to-neon-purple">
            Anytime, Anywhere
          </span>
        </h1>

        <p className="max-w-2xl mx-auto mt-6 text-lg text-white/70 md:text-xl">
          Discover hundreds of free online games. From action-packed adventures to brain-teasing puzzles, Arcade Portal
          has something for everyone.
        </p>

        <div className="flex flex-col items-center justify-center gap-4 mt-8 sm:flex-row">
          <Button asChild size="lg" className="gap-2 text-lg arcade-button animate-pulse-glow">
            <Link href="/popular">
              Play Now <Gamepad2 className="w-5 h-5" />
            </Link>
          </Button>

          <Button
            asChild
            variant="outline"
            size="lg"
            className="gap-2 text-lg border-neon-purple/30 text-white bg-neon-purple/10 hover:bg-neon-purple/20 hover:border-neon-purple/50"
          >
            <Link href="/categories">
              Browse Categories <ArrowRight className="w-5 h-5" />
            </Link>
          </Button>
        </div>

        <div className="grid grid-cols-2 gap-4 mt-16 md:grid-cols-4 max-w-3xl mx-auto">
          {[
            { count: "500+", label: "Games" },
            { count: "10M+", label: "Players" },
            { count: "20+", label: "Categories" },
            { count: "100%", label: "Free" },
          ].map((stat, index) => (
            <div key={index} className="p-4 rounded-lg bg-neon-purple/5 border border-neon-purple/20 neon-glow">
              <div className="text-2xl font-bold text-white">{stat.count}</div>
              <div className="text-sm text-neon-purple">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

