import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

const testConnection = async () => {
  try {
    console.log('Testing connection to:', process.env.MONGO_URI);
    await mongoose.connect(process.env.MONGO_URI, { serverSelectionTimeoutMS: 5000 });
    console.log('Successfully connected to MongoDB!');
    process.exit(0);
  } catch (err) {
    console.error('Connection failed:', err.message);
    process.exit(1);
  }
};

testConnection();
