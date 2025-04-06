// export async function fetchGames() {
//     try {
//       const response = await fetch("http://localhost:5000/api/games"); // Replace with actual API endpoint
//       if (!response.ok) {
//         throw new Error("Failed to fetch games");
//       }
//       return await response.json();
//     } catch (error) {
//       console.error("Error fetching games:", error);
//       return [];
//     }
//   }
  

// services/api.ts
// api.ts - Improved version with better error handling and resource management

// Base API configuration
// services/api.ts
// Improved API service with proper TypeScript typing and error handling



const API_BASE_URL = "http://localhost:5000/api";
const MAX_RETRIES = 2;
const REQUEST_TIMEOUT = 8000; // 8 seconds

// Type definitions
export type Game = {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  plays: number;
  // Add more fields as per your data model
};

// Utility function for making API calls
async function apiFetch<T>(endpoint: string, options: RequestInit = {}, retries = MAX_RETRIES): Promise<T> {
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), REQUEST_TIMEOUT);

  try {
    const response = await fetch(`${API_BASE_URL}${endpoint}`, {
      ...options,
      signal: controller.signal,
      headers: {
        'Content-Type': 'application/json',
        ...(options.headers || {}),
      }
    });

    clearTimeout(timeoutId);

    if (!response.ok) {
      if (response.status === 429 || response.status >= 500) {
        if (retries > 0) {
          await new Promise(resolve => setTimeout(resolve, 1000 * (MAX_RETRIES - retries + 1)));
          return apiFetch<T>(endpoint, options, retries - 1);
        }
      }
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return await response.json() as T;
  } catch (error: unknown) {
    clearTimeout(timeoutId);
    
    // Type guard for AbortError
    if (error instanceof Error && error.name !== 'AbortError' && retries > 0) {
      await new Promise(resolve => setTimeout(resolve, 1000 * (MAX_RETRIES - retries + 1)));
      return apiFetch<T>(endpoint, options, retries - 1);
    }
    
    throw error;
  }
}

// Cache system with proper typing
const requestCache = new Map<string, Promise<any>>();

// Function to fetch all games with caching
export async function fetchGames(): Promise<Game[]> {
  const cacheKey = 'games';

  if (!requestCache.has(cacheKey)) {
    const fetchPromise = apiFetch<Game[]>('/games')
      .catch((error: unknown) => {
        console.error("Error fetching games:", error);
        requestCache.delete(cacheKey);
        return [];
      });

    requestCache.set(cacheKey, fetchPromise);
  }

  return requestCache.get(cacheKey)!;
}

// Function to fetch featured games with caching
export async function fetchFeaturedGames(): Promise<Game[]> {
  const cacheKey = 'featured-games';

  if (!requestCache.has(cacheKey)) {
    const fetchPromise = apiFetch<Game[]>('/featured-games')
      .catch((error: unknown) => {
        console.error("Error fetching featured games:", error);
        requestCache.delete(cacheKey);
        return [];
      });

    requestCache.set(cacheKey, fetchPromise);
  }

  return requestCache.get(cacheKey)!;
}

// Function to fetch a game by ID
export async function fetchGameById(gameId: string): Promise<Game | null> {
  const cacheKey = `game-${gameId}`;

  if (!requestCache.has(cacheKey)) {
    const fetchPromise = apiFetch<Game>(`/games/${gameId}`)
      .catch((error: unknown) => {
        console.error(`Error fetching game with ID ${gameId}:`, error);
        requestCache.delete(cacheKey);
        return null;
      });

    requestCache.set(cacheKey, fetchPromise);
  }

  return requestCache.get(cacheKey)!;
}

// Function to fetch related games
export async function fetchRelatedGames(gameId: string): Promise<Game[]> {
  const cacheKey = `related-${gameId}`;

  if (!requestCache.has(cacheKey)) {
    const fetchPromise = apiFetch<Game[]>(`/games/${gameId}/related`)
      .catch((error: unknown) => {
        console.error(`Error fetching related games for game ${gameId}:`, error);
        requestCache.delete(cacheKey);
        return [];
      });

    requestCache.set(cacheKey, fetchPromise);
  }

  return requestCache.get(cacheKey)!;
}

// Function to increment the number of plays for a game
export async function incrementGamePlays(gameId: string): Promise<void> {
  try {
    await apiFetch<void>(`/games/${gameId}/increment-plays`, {
      method: 'POST'
    });
  } catch (error: unknown) {
    console.error(`Error incrementing plays for game ${gameId}:`, error);
    throw error;
  }
}

// Clean up function to clear cache
export function clearApiCache(): void {
  requestCache.clear();
}

export async function fetchGameBySlug(slug: string): Promise<Game | null> {
  const cacheKey = `game-${slug}`;

  if (!requestCache.has(cacheKey)) {
    const fetchPromise = apiFetch<Game>(`/games/slug/${slug}`)
      .catch((error: unknown) => {
        console.error(`Error fetching game with slug ${slug}:`, error);
        requestCache.delete(cacheKey);
        return null;
      });

    requestCache.set(cacheKey, fetchPromise);
  }

  return requestCache.get(cacheKey)!;
}


// lib/api.ts (frontend only)

// const API_BASE_URL = "http://localhost:5000/api";
// const MAX_RETRIES = 2;
// const REQUEST_TIMEOUT = 8000; // 8 seconds

// // --------------------
// // Type Definitions
// // --------------------
// export type Game = {
//   id: string;
//   title: string;
//   description: string;
//   imageUrl: string;
//   plays: number;
//   category?: string;
//   slug?: string;
//   thumbnail?: string;
// };

// // -----------------------------
// // Utility: Generic Fetcher
// // -----------------------------
// async function apiFetch<T>(
//   endpoint: string,
//   options: RequestInit = {},
//   retries = MAX_RETRIES
// ): Promise<T> {
//   const controller = new AbortController();
//   const timeoutId = setTimeout(() => controller.abort(), REQUEST_TIMEOUT);

//   try {
//     const response = await fetch(`${API_BASE_URL}${endpoint}`, {
//       ...options,
//       signal: controller.signal,
//       headers: {
//         "Content-Type": "application/json",
//         ...(options.headers || {}),
//       },
//     });

//     clearTimeout(timeoutId);

//     if (!response.ok) {
//       if ((response.status === 429 || response.status >= 500) && retries > 0) {
//         await new Promise((res) => setTimeout(res, 1000 * (MAX_RETRIES - retries + 1)));
//         return apiFetch<T>(endpoint, options, retries - 1);
//       }
//       throw new Error(`HTTP error! status: ${response.status}`);
//     }

//     return (await response.json()) as T;
//   } catch (error: unknown) {
//     clearTimeout(timeoutId);

//     if (error instanceof Error && error.name !== "AbortError" && retries > 0) {
//       await new Promise((res) => setTimeout(res, 1000 * (MAX_RETRIES - retries + 1)));
//       return apiFetch<T>(endpoint, options, retries - 1);
//     }

//     throw error;
//   }
// }

// // -----------------------------
// // Request Cache System
// // -----------------------------
// const requestCache = new Map<string, Promise<any>>();

// // -----------------------------
// // Game Fetching Functions
// // -----------------------------
// export async function fetchGames(): Promise<Game[]> {
//   const cacheKey = "games";

//   if (!requestCache.has(cacheKey)) {
//     const fetchPromise = apiFetch<Game[]>("/games").catch((error) => {
//       console.error("Error fetching games:", error);
//       requestCache.delete(cacheKey);
//       return [];
//     });

//     requestCache.set(cacheKey, fetchPromise);
//   }

//   return requestCache.get(cacheKey)!;
// }

// export async function fetchFeaturedGames(): Promise<Game[]> {
//   const cacheKey = "featured-games";

//   if (!requestCache.has(cacheKey)) {
//     const fetchPromise = apiFetch<Game[]>("/featured-games").catch((error) => {
//       console.error("Error fetching featured games:", error);
//       requestCache.delete(cacheKey);
//       return [];
//     });

//     requestCache.set(cacheKey, fetchPromise);
//   }

//   return requestCache.get(cacheKey)!;
// }

// export async function fetchGameById(gameId: string): Promise<Game | null> {
//   const cacheKey = `game-${gameId}`;

//   if (!requestCache.has(cacheKey)) {
//     const fetchPromise = apiFetch<Game>(`/games/${gameId}`).catch((error) => {
//       console.error(`Error fetching game with ID ${gameId}:`, error);
//       requestCache.delete(cacheKey);
//       return null;
//     });

//     requestCache.set(cacheKey, fetchPromise);
//   }

//   return requestCache.get(cacheKey)!;
// }

// export async function fetchRelatedGames(gameId: string): Promise<Game[]> {
//   const cacheKey = `related-${gameId}`;

//   if (!requestCache.has(cacheKey)) {
//     const fetchPromise = apiFetch<Game[]>(`/games/${gameId}/related`).catch((error) => {
//       console.error(`Error fetching related games for game ${gameId}:`, error);
//       requestCache.delete(cacheKey);
//       return [];
//     });

//     requestCache.set(cacheKey, fetchPromise);
//   }

//   return requestCache.get(cacheKey)!;
// }

// export async function incrementGamePlays(gameId: string): Promise<void> {
//   try {
//     await apiFetch<void>(`/games/${gameId}/increment-plays`, { method: "POST" });
//   } catch (error) {
//     console.error(`Error incrementing plays for game ${gameId}:`, error);
//     throw error;
//   }
// }

// // -----------------------------
// // Cache Utility
// // -----------------------------
// export function clearApiCache(): void {
//   requestCache.clear();
// }
