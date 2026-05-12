import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

const dropIndex = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('Connected to MongoDB');
    
    // Get the collection
    const collection = mongoose.connection.collection('users');
    
    // List indexes
    const indexes = await collection.indexes();
    console.log('Current indexes:', indexes.map(i => i.name));
    
    if (indexes.some(i => i.name === 'supabase_id_1')) {
      await collection.dropIndex('supabase_id_1');
      console.log('Dropped supabase_id_1 index');
    } else {
      console.log('Index supabase_id_1 not found');
    }
    
    process.exit(0);
  } catch (err) {
    console.error('Error:', err.message);
    process.exit(1);
  }
};

dropIndex();
