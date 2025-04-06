import mongoose, { Document } from "mongoose";

export interface IGame extends Document {
  title: string;
  slug: string;  // Added missing slug field
  url: string;
  thumbnail: string;
  enabled: boolean;
  category: string;
  description: string;
  plays: number;  // Changed from views to plays to match controller
  likes: number;
  createdAt: Date;
  updatedAt?: Date;  // Added for update tracking
}

const gameSchema = new mongoose.Schema<IGame>({
  title: { 
    type: String, 
    required: true,
    trim: true
  },
  slug: {  // Added slug field
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true
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
    required: true,
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
    enum: ['Arcade', 'Adventure', 'Puzzle', 'Racing', 'Action'],
    required: true,
    default: 'Arcade'
  },
  description: { 
    type: String, 
    required: true,
    maxlength: 500
  },
  plays: {  // Changed from views to plays
    type: Number, 
    default: 0,
    min: 0
  },
  likes: { 
    type: Number, 
    default: 0,
    min: 0
  }
}, { 
  timestamps: true  // Automatically adds createdAt and updatedAt
});

// Text index for search
gameSchema.index(
  { title: 'text', description: 'text' },
  { weights: { title: 3, description: 1 } }
);

const Game = mongoose.model<IGame>('Game', gameSchema);
export default Game;