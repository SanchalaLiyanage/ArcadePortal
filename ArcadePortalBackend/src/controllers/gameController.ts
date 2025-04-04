import { Request, Response } from "express";
import Game from "../models/games";

// ✅ Get all enabled games
export const getGames = async (req: Request, res: Response) => {
  try {
    const games = await Game.find({ enabled: true });
    res.json(games);
  } catch (error) {
    res.status(500).json({ error: "Server Error" });
  }
};


// ✅ Add a new game
export const addGame = async (req: Request, res: Response) => {
  try {
    const { title, url } = req.body;
    const newGame = new Game({ title, url });
    await newGame.save();
    res.status(201).json(newGame);
  } catch (error) {
    res.status(500).json({ error: "Failed to add game" });
  }
};

// ✅ Update a game
export const updateGame = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const updatedGame = await Game.findByIdAndUpdate(id, req.body, { new: true });
    res.json(updatedGame);
  } catch (error) {
    res.status(500).json({ error: "Failed to update game" });
  }
};

// ✅ Delete a game
export const deleteGame = async (req: Request, res: Response) => {
  try {
    await Game.findByIdAndDelete(req.params.id);
    res.json({ message: "Game deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Failed to delete game" });
  }
};
