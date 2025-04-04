export interface Game {
    _id: string;
    title: string;
    slug: string;
    description: string;
    instructions: string;
    category: string;
    thumbnail: string;
    url: string;
    developer: string;
    plays: number;
    enabled: boolean;
    createdAt: string;
    updatedAt: string;
  }
  
  const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';
  
  // Fetch all games
  export async function fetchGames(): Promise<Game[]> {
    const response = await fetch(`${API_BASE_URL}/games`);
    if (!response.ok) {
      throw new Error('Failed to fetch games');
    }
    return await response.json();
  }
  
  // Fetch a game by its ID
  export async function fetchGameById(id: string): Promise<Game> {
    const response = await fetch(`${API_BASE_URL}/games/${id}`);
    if (!response.ok) {
      throw new Error('Failed to fetch game');
    }
    return await response.json();
  }
  
  // Fetch first 3 featured games
  export async function fetchFeaturedGames(): Promise<Game[]> {
    const allGames = await fetchGames();
    return allGames.slice(0, 3); // Or use a "featured" flag from backend if available
  }
  
  // Fetch related games (same category, different ID)
  export async function fetchRelatedGames(currentGameId: string, category: string): Promise<Game[]> {
    const allGames = await fetchGames();
    return allGames
      .filter(game => game._id !== currentGameId && game.category === category)
      .slice(0, 3);
  }
  
  // Increment plays count for a game
  export async function incrementGamePlays(id: string): Promise<Game> {
    const response = await fetch(`${API_BASE_URL}/games/${id}/plays`, {
      method: 'PUT',
    });
    if (!response.ok) {
      throw new Error('Failed to increment plays');
    }
    return await response.json();
  }
  