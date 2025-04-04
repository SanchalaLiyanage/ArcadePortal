import mongoose, { Document } from "mongoose";

interface IGame extends Document {
  title: string;
  url: string;
  thumbnail: string;
  enabled: boolean;
  category: string;
  description: string;
  views: number;
  likes: number;
  createdAt: Date;
}

const gameSchema = new mongoose.Schema<IGame>({
  title: { 
    type: String, 
    required: true,
    unique: true,
    trim: true  // Removes whitespace
  },
  url: { 
    type: String, 
    required: true,
    validate: {
      validator: (v: string) => v.startsWith('https://'),
      message: 'URL must be HTTPS'
    }
  },
  thumbnail: { 
    type: String, 
    required: true,  // Now required (your seed provides thumbnails)
    validate: {
      validator: (v: string) => v.startsWith('http'),
      message: 'Thumbnail must be a valid URL'
    }
  },
  enabled: { 
    type: Boolean, 
    default: true 
  },
  category: { 
    type: String, 
    enum: ['Arcade', 'Adventure', 'Puzzle', 'Racing', 'Action'], // Matches seed data
    required: true,
    default: 'Arcade'
  },
  description: { 
    type: String, 
    required: true,  // Now required
    maxlength: 500   // Increased for longer descriptions
  },
  views: { 
    type: Number, 
    default: 0,
    min: 0
  },
  likes: { 
    type: Number, 
    default: 0,
    min: 0
  },
  createdAt: { 
    type: Date, 
    default: Date.now,
    immutable: true  // Prevents modification after creation
  }
});

// Optimized text index
gameSchema.index(
  { title: 'text', description: 'text' },
  { weights: { title: 3, description: 1 } }  // Title has higher search priority
);

const Game = mongoose.model<IGame>('Game', gameSchema);
export default Game;