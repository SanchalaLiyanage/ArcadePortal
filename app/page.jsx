// import { Suspense } from "react"
// import Header from "@/components/header"
// import Hero from "@/components/hero"
// import FeaturedGames from "@/components/featured-games"
// import GameGrid from "@/components/game-grid"
// import Footer from "@/components/footer"
// import { useEffect, useState } from 'react';
// import { fetchGames, fetchFeaturedGames, fetchGameById, fetchRelatedGames, incrementGamePlays, Game } from '../services/api';
// import { GamesSkeleton } from "@/components/skeletons"

// export default function HomePage() {
//   return (
//     <main className="min-h-screen bg-[#121218]">
//       <Header />
//       <Hero />
//       <div className="container mx-auto px-4 py-8">
//         <FeaturedGames />
//         <h2 className="text-3xl font-bold text-white mt-12 mb-6 neon-text">All Games</h2>
//         <Suspense fallback={<GamesSkeleton />}>
//           <GameGrid />
//         </Suspense>
//       </div>
//       <Footer />
//     </main>
//   )
// }


'use client';  // Marking the component as a client component to use React hooks

import { Suspense, useEffect, useState } from "react";
import Header from "@/components/header";
import Hero from "@/components/hero";
import FeaturedGames from "@/components/featured-games";
import GameGrid from "@/components/game-grid";
import Footer from "@/components/footer";
import { fetchGames, fetchFeaturedGames, fetchGameById, fetchRelatedGames, incrementGamePlays, Game } from '../lib/api';
import { GamesSkeleton } from "@/components/skeletons";

export default function HomePage() {
  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch all games when the component mounts
  useEffect(() => {
    const loadGames = async () => {
      try {
        const gamesData = await fetchGames();  // Adjust if you need to fetch featured games or other data
        setGames(gamesData);
      } catch (error) {
        console.error('Error loading games:', error);
      } finally {
        setLoading(false);
      }
    };

    loadGames();
  }, []);  // Empty dependency array ensures this only runs once after mount

  return (
    <main className="min-h-screen bg-[#121218]">
      <Header />
      <Hero />
      <div className="container mx-auto px-4 py-8">
        <FeaturedGames />
        <h2 className="text-3xl font-bold text-white mt-12 mb-6 neon-text">All Games</h2>
        
        {/* If the data is still loading, show skeleton. Otherwise, display the games */}
        {loading ? (
          <GamesSkeleton />
        ) : (
          <Suspense fallback={<GamesSkeleton />}>
            <GameGrid games={games} />  {/* Pass the games data to GameGrid */}
          </Suspense>
        )}
      </div>
      <Footer />
    </main>
  );
}


