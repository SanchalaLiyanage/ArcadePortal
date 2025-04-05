'use client';  // Mark this file as a client-side component

import { useState, useEffect } from 'react';
import { getGameBySlug } from '@/lib/api';
import Header from "@/components/header";
import Hero from "@/components/hero";
import FeaturedGames from "@/components/featured-games";
import Footer from "@/components/footer";

// Component to render the game page
export default function GamePage({ params }) {
  const [game, setGame] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch the game data when the component mounts or when slug changes
  useEffect(() => {
    if (!params?.slug) {
      setError("Game slug is missing.");
      setLoading(false);
      return; // Early return if slug is undefined
    }

    const loadGame = async () => {
      setLoading(true);  // Set loading state to true when starting to fetch data
      setError(null);    // Reset error state

      try {
        // Fetch the game data using the slug from params
        const gameData = await getGameBySlug(params.slug);

        // If gameData is null or undefined, throw an error
        if (!gameData) {
          throw new Error("Game not found");
        }

        setGame(gameData);  // Update state with fetched game data
      } catch (error) {
        // Handle any errors during fetching
        console.error("Error loading game:", error);
        setError("Failed to load game. Please try again later.");
      } finally {
        setLoading(false);  // Set loading state to false after fetching is done
      }
    };

    loadGame();
  }, [params?.slug]); // Only fetch data when the slug changes

  // Show loading message while fetching
  if (loading) {
    return <div>Loading...</div>;
  }

  // Show error message if an error occurred during fetch
  if (error) {
    return <div>{error}</div>;
  }

  // Show "Game not found" if no game data is available
  if (!game) {
    return <div>Game not found</div>;
  }

  return (
    <main>
      <Header />
      <Hero game={game} />
      <div className="container">
        <FeaturedGames />
        <h2>{game.name}</h2>
        <p>{game.description}</p>
      </div>
      <Footer />
    </main>
  );
}
