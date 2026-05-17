import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import path from 'path';
import cors from 'cors';
import connectDB from './config/db.js';

// Route files
import scanRoutes from './routes/scan.js';
import chatRoutes from './routes/chat.js';
import userRoutes from './routes/user.js';

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors({
  origin: ['http://localhost:5173', 'http://localhost:5174', 'http://localhost:5175'],
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/uploads', express.static(path.join(process.cwd(), 'uploads')));

// Setup Mounts
app.use('/api/scan', scanRoutes);
app.use('/api/chat', chatRoutes);
app.use('/api/user', userRoutes);

// Fallback Route
app.get('/', (req, res) => {
  res.send('AI Plant Analyser API is running...');
});

// Connect to Database and then start server
const startServer = async () => {
  try {
    await connectDB();
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  } catch (error) {
    console.error(`Fatal Error: Could not start server: ${error.message}`);
    process.exit(1);
  }
};

startServer();
