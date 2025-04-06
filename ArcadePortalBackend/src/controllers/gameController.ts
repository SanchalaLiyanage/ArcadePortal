import { Request, Response } from "express";
import Game, { IGame } from "../models/games";

// Type definitions for request parameters
interface GameParams {
  id?: string;
  slug?: string;
}

// Type definitions for request bodies
interface CreateGameBody {
  title: string;
  slug: string;
  url: string;
  thumbnail?: string;
  description?: string;
  category?: string;
}

interface UpdateGameBody extends Partial<CreateGameBody> {
  enabled?: boolean;
}

/**
 * @desc    Get all enabled games
 * @route   GET /api/games
 * @access  Public
 */
export const getGames = async (
  req: Request,
  res: Response<IGame[] | { error: string }>
) => {
  try {
    const games = await Game.find({ enabled: true }).select('-__v');
    res.status(200).json(games);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch games" });
  }
};

/**
 * @desc    Get game by slug
 * @route   GET /api/games/slug/:slug
 * @access  Public
 */
export const getGameBySlug = async (
  req: Request<{ slug: string }>,
  res: Response<IGame | { error: string }>
) => {
  try {
    const game = await Game.findOne({ 
      slug: req.params.slug,
      enabled: true 
    });
    if (!game) return res.status(404).json({ error: "Game not found" });
    res.status(200).json(game);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch game" });
  }
};

/**
 * @desc    Create new game
 * @route   POST /api/games
 * @access  Private/Admin
 */
export const addGame = async (
  req: Request<{}, {}, CreateGameBody>,
  res: Response<IGame | { error: string }>
) => {
  try {
    const newGame = await Game.create(req.body);
    res.status(201).json(newGame);
  } catch (error: any) {
    if (error.code === 11000) {
      return res.status(409).json({ error: "Game slug already exists" });
    }
    res.status(500).json({ error: "Failed to create game" });
  }
};

/**
 * @desc    Update game
 * @route   PUT /api/games/:id
 * @access  Private/Admin
 */
export const updateGame = async (
  req: Request<{ id: string }, {}, UpdateGameBody>,
  res: Response<IGame | { error: string }>
) => {
  try {
    const updatedGame = await Game.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedGame) return res.status(404).json({ error: "Game not found" });
    res.status(200).json(updatedGame);
  } catch (error) {
    res.status(500).json({ error: "Failed to update game" });
  }
};

/**
 * @desc    Delete game
 * @route   DELETE /api/games/:id
 * @access  Private/Admin
 */
export const deleteGame = async (
  req: Request<{ id: string }>,
  res: Response<{ success: boolean } | { error: string }>
) => {
  try {
    const deletedGame = await Game.findByIdAndDelete(req.params.id);
    if (!deletedGame) return res.status(404).json({ error: "Game not found" });
    res.status(200).json({ success: true });
  } catch (error) {
    res.status(500).json({ error: "Failed to delete game" });
  }
};

/**
 * @desc    Increment play count
 * @route   PATCH /api/games/:slug/plays
 * @access  Public
 */
export const incrementPlays = async (
  req: Request<{ slug: string }>,
  res: Response<IGame | { error: string }>
) => {
  try {
    const game = await Game.findOneAndUpdate(
      { slug: req.params.slug },
      { $inc: { plays: 1 } },
      { new: true }
    );
    if (!game) return res.status(404).json({ error: "Game not found" });
    res.status(200).json(game);
  } catch (error) {
    res.status(500).json({ error: "Failed to update plays" });
  }
};