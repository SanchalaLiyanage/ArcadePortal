import express from "express";
import {
  getGames,
  getGameBySlug,
  addGame,
  updateGame,
  deleteGame,
  incrementPlays
} from "../controllers/gameController";

const router = express.Router();


router.get("/", getGames);
router.get("/slug/:slug", getGameBySlug);
router.patch("/:slug/plays", incrementPlays);


router.post("/", addGame);
router.put("/:id", updateGame);
router.delete("/:id", deleteGame);

export default router;