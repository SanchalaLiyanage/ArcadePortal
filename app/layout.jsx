// RootLayout.jsx
"use client"; // This is for client-side features like useState, useEffect, etc.

import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/toaster";
import { AuthProvider } from "@/lib/auth-provider";
import { useEffect, useState } from 'react';
import { fetchGames, fetchFeaturedGames, fetchGameById, fetchRelatedGames, incrementGamePlays, Game } from '../ArcadePortalBackend/src/services/api';

// Import metadata from a separate file
import { metadata } from './metadata'; // <-- Import here, but don't define inside this file

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* You can add dynamic metadata here if needed, or handle in a specific way */}
        <meta name="description" content={metadata.description} />
        <meta name="generator" content={metadata.generator} />
        <title>{metadata.title}</title>
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <AuthProvider>
            {children}
            <Toaster />
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
