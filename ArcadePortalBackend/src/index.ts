import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db";
import gameRoutes from "./routes/gameRoutes";

dotenv.config();
connectDB();

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/games", gameRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
