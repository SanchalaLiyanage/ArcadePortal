// // Mock data for games
// const mockGames = [
//   {
//     _id: "1",
//     title: "Subway Surfers",
//     slug: "subway-surfers",
//     description: "Dash as fast as you can through the subway and dodge the oncoming trains!",
//     instructions: "Swipe to jump, roll, or change lanes. Collect coins and power-ups.",
//     category: "Arcade",
//     thumbnail: "/placeholder.svg?height=300&width=500",
//     url: "https://example.com/games/subway-surfers",
//     developer: "SYBO Games",
//     plays: 15800000,
//     enabled: true,
//     createdAt: "2023-01-15T12:00:00Z",
//     updatedAt: "2023-06-20T15:30:00Z",
//   },
//   {
//     _id: "2",
//     title: "Temple Run",
//     slug: "temple-run",
//     description: "Run for your life as you escape the temple and the evil demon monkeys!",
//     instructions: "Swipe to jump, slide, or turn. Tilt to move left or right.",
//     category: "Arcade",
//     thumbnail: "/placeholder.svg?height=300&width=500",
//     url: "https://example.com/games/temple-run",
//     developer: "Imangi Studios",
//     plays: 12500000,
//     enabled: true,
//     createdAt: "2023-02-10T09:15:00Z",
//     updatedAt: "2023-07-05T11:45:00Z",
//   },
//   {
//     _id: "3",
//     title: "Candy Crush",
//     slug: "candy-crush",
//     description: "Match colorful candies in this tasty puzzle adventure!",
//     instructions: "Swap adjacent candies to make matches of 3 or more.",
//     category: "Puzzle",
//     thumbnail: "/placeholder.svg?height=300&width=500",
//     url: "https://example.com/games/candy-crush",
//     developer: "King",
//     plays: 9800000,
//     enabled: true,
//     createdAt: "2023-03-05T14:20:00Z",
//     updatedAt: "2023-08-12T10:10:00Z",
//   },
//   {
//     _id: "4",
//     title: "Minecraft",
//     slug: "minecraft",
//     description: "Build, explore, and survive in a blocky, procedurally-generated 3D world!",
//     instructions: "Use WASD to move, mouse to look around, and click to interact.",
//     category: "Adventure",
//     thumbnail: "/placeholder.svg?height=300&width=500",
//     url: "https://example.com/games/minecraft",
//     developer: "Mojang Studios",
//     plays: 8500000,
//     enabled: true,
//     createdAt: "2023-04-18T08:30:00Z",
//     updatedAt: "2023-09-01T16:20:00Z",
//   },
//   {
//     _id: "5",
//     title: "Among Us",
//     slug: "among-us",
//     description: "Find the impostor among your crewmates in this space-themed social deduction game!",
//     instructions: "Complete tasks, report bodies, and vote out the impostors.",
//     category: "Multiplayer",
//     thumbnail: "/placeholder.svg?height=300&width=500",
//     url: "https://example.com/games/among-us",
//     developer: "InnerSloth",
//     plays: 7200000,
//     enabled: true,
//     createdAt: "2023-05-22T11:45:00Z",
//     updatedAt: "2023-10-15T09:05:00Z",
//   },
//   {
//     _id: "6",
//     title: "Fortnite",
//     slug: "fortnite",
//     description: "Battle royale game where you fight to be the last one standing!",
//     instructions: "Gather resources, build structures, and eliminate opponents.",
//     category: "Shooter",
//     thumbnail: "/placeholder.svg?height=300&width=500",
//     url: "https://example.com/games/fortnite",
//     developer: "Epic Games",
//     plays: 6500000,
//     enabled: true,
//     createdAt: "2023-06-10T13:15:00Z",
//     updatedAt: "2023-11-20T14:30:00Z",
//   },
//   {
//     _id: "7",
//     title: "Roblox",
//     slug: "roblox",
//     description: "Online platform and game creation system that allows users to design their own games!",
//     instructions: "Use WASD to move and mouse to look around. Controls vary by game.",
//     category: "Multiplayer",
//     thumbnail: "/placeholder.svg?height=300&width=500",
//     url: "https://example.com/games/roblox",
//     developer: "Roblox Corporation",
//     plays: 5800000,
//     enabled: true,
//     createdAt: "2023-07-05T10:00:00Z",
//     updatedAt: "2023-12-10T12:15:00Z",
//   },
//   {
//     _id: "8",
//     title: "Call of Duty",
//     slug: "call-of-duty",
//     description: "First-person shooter game with intense action and realistic combat!",
//     instructions: "Use WASD to move, mouse to aim, and left-click to shoot.",
//     category: "Shooter",
//     thumbnail: "/placeholder.svg?height=300&width=500",
//     url: "https://example.com/games/call-of-duty",
//     developer: "Activision",
//     plays: 5200000,
//     enabled: true,
//     createdAt: "2023-08-15T09:30:00Z",
//     updatedAt: "2024-01-05T11:45:00Z",
//   },
//   {
//     _id: "9",
//     title: "FIFA",
//     slug: "fifa",
//     description: "Football simulation game with realistic gameplay and official teams and players!",
//     instructions: "Use the controller to pass, shoot, and defend. Master skill moves for advanced play.",
//     category: "Sports",
//     thumbnail: "/placeholder.svg?height=300&width=500",
//     url: "https://example.com/games/fifa",
//     developer: "EA Sports",
//     plays: 4800000,
//     enabled: true,
//     createdAt: "2023-09-20T15:45:00Z",
//     updatedAt: "2024-02-10T10:30:00Z",
//   },
//   {
//     _id: "10",
//     title: "GTA V",
//     slug: "gta-v",
//     description: "Open-world action-adventure game set in a fictional city!",
//     instructions: "Use WASD to move, mouse to look around, and various keys for actions.",
//     category: "Action",
//     thumbnail: "/placeholder.svg?height=300&width=500",
//     url: "https://example.com/games/gta-v",
//     developer: "Rockstar Games",
//     plays: 4500000,
//     enabled: true,
//     createdAt: "2023-10-12T12:30:00Z",
//     updatedAt: "2024-03-15T14:20:00Z",
//   },
//   {
//     _id: "11",
//     title: "Angry Birds",
//     slug: "angry-birds",
//     description: "Physics-based puzzle game where you launch birds to destroy pig structures!",
//     instructions: "Drag to aim, release to launch. Use each bird's special ability.",
//     category: "Puzzle",
//     thumbnail: "/placeholder.svg?height=300&width=500",
//     url: "https://example.com/games/angry-birds",
//     developer: "Rovio Entertainment",
//     plays: 4200000,
//     enabled: true,
//     createdAt: "2023-11-05T08:15:00Z",
//     updatedAt: "2024-04-01T09:45:00Z",
//   },
//   {
//     _id: "12",
//     title: "Pac-Man",
//     slug: "pac-man",
//     description: "Classic arcade game where you navigate a maze eating dots while avoiding ghosts!",
//     instructions: "Use arrow keys to move Pac-Man through the maze.",
//     category: "Arcade",
//     thumbnail: "/placeholder.svg?height=300&width=500",
//     url: "https://example.com/games/pac-man",
//     developer: "Namco",
//     plays: 3900000,
//     enabled: true,
//     createdAt: "2023-12-18T14:10:00Z",
//     updatedAt: "2024-05-05T13:25:00Z",
//   },
// ]

// // Get all games
// export async function getAllGames() {
//   // In a real app, this would fetch from a database
//   return mockGames.filter((game) => game.enabled)
// }

// // Get featured games
// export async function getFeaturedGames() {
//   // In a real app, this would fetch from a database with a featured flag
//   return mockGames.filter((game) => game.enabled).slice(0, 3)
// }

// // Get game by slug
// export async function getGameBySlug(slug) {
//   // In a real app, this would fetch from a database
//   const game = mockGames.find((game) => game.slug === slug)
//   return game || null
// }

// // Get related games
// export async function getRelatedGames(currentGameId, category) {
//   // In a real app, this would fetch from a database
//   return mockGames
//     .filter((game) => game.enabled && game._id !== currentGameId && game.category === category)
//     .slice(0, 3)
// }

// // Increment game plays
// export async function incrementGamePlays(slug) {
//   // In a real app, this would update the database
//   const game = mockGames.find((game) => game.slug === slug)
//   if (game) {
//     game.plays += 1
//   }
// }

