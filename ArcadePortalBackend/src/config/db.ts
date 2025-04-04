// import mongoose from "mongoose";
// import dotenv from "dotenv";

// dotenv.config();

// const connectDB = async () => {
//   try {
//     await mongoose.connect(process.env.MONGO_URI as string, {
//       dbName: "arcadeportal",
//     });
//     console.log("✅ MongoDB Connected");
//   } catch (error) {
//     console.error("❌ MongoDB Connection Failed:", error);
//     process.exit(1);
//   }
// };

// export default connectDB;

import mongoose from "mongoose";
import dotenv from "dotenv";
import path from "path";

// Load .env file from root directory
dotenv.config({ path: path.resolve(__dirname, "../../.env") });

const connectDB = async () => {
  try {
    // Debug: Check if .env is loading
    console.log("MONGO_URI from .env:", process.env.MONGO_URI);

    if (!process.env.MONGO_URI) {
      throw new Error("❌ MONGO_URI is missing in .env file");
    }

    await mongoose.connect(process.env.MONGO_URI, {
      dbName: "arcadeportal",
    });
    console.log("✅ MongoDB Connected");
  } catch (error) {
    console.error("❌ MongoDB Connection Failed:", error instanceof Error ? error.message : error);
    process.exit(1);
  }
};

export default connectDB;
