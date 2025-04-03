import { Skeleton } from "@/components/ui/skeleton"
import { Card, CardContent } from "@/components/ui/card"

export function FeaturedGamesSkeleton() {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
      {[...Array(3)].map((_, i) => (
        <Card key={i} className="overflow-hidden border-0 shadow-lg bg-[#1a1a24]/80 backdrop-blur-md neon-glow">
          <Skeleton className="aspect-video bg-neon-purple/10" />
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Skeleton className="w-16 h-6 bg-neon-purple/10" />
              </div>
              <Skeleton className="w-20 h-8 bg-neon-purple/10" />
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

export function GamesSkeleton() {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {[...Array(8)].map((_, i) => (
        <Card key={i} className="overflow-hidden border-0 shadow-lg bg-[#1a1a24]/80 backdrop-blur-md">
          <Skeleton className="aspect-video bg-neon-purple/10" />
          <CardContent className="p-3">
            <Skeleton className="w-full h-5 mb-2 bg-neon-purple/10" />
            <div className="flex items-center justify-between">
              <Skeleton className="w-16 h-4 bg-neon-purple/10" />
              <Skeleton className="w-12 h-4 bg-neon-purple/10" />
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

