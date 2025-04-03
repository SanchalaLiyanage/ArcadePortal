export interface Game {
  _id: string
  title: string
  slug: string
  description: string
  instructions?: string
  category: string
  thumbnail: string
  url: string
  developer: string
  plays: number
  enabled: boolean
  createdAt: string
  updatedAt: string
}

