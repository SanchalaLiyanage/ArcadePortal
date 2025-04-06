'use client';  

import { useState, useEffect } from 'react';
import { getGameBySlug } from '@/lib/api';
import Header from "@/components/header";
import Hero from "@/components/hero";
import FeaturedGames from "@/components/featured-games";
import { fetchGameBySlug } from '@/lib/api';
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
      return; 
    }

    const loadGame = async () => {
      setLoading(true); 
      setError(null);    

      try {
       
        const gameData = await fetchGameBySlug (params.slug);

       
        if (!gameData) {
          throw new Error("Game not found");
        }

        setGame(gameData);  
      } catch (error) {
       
        console.error("Error loading game:", error);
        setError("Failed to load game. Please try again later.");
      } finally {
        setLoading(false);  
      }
    };

    loadGame();
  }, [params?.slug]);

  // Show loading message while fetching
  if (loading) {
    return <div>Loading...</div>;
  }

 
  if (error) {
    return <div>{error}</div>;
  }

  
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
