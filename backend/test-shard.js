import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

const testSingleShard = async () => {
  // Try connecting to just the first shard without replicaSet parameter
  const singleShardUri = 'mongodb://dritheesh05_db_user:00000@ac-iiks9sl-shard-00-00.na253br.mongodb.net:27017/plant_analyser?ssl=true&authSource=admin';
  
  try {
    console.log('Testing connection to shard 00-00...');
    await mongoose.connect(singleShardUri, { serverSelectionTimeoutMS: 10000 });
    console.log('✅ Successfully connected to a single shard! This means your IP is whitelisted but the replicaSet name might be wrong.');
    process.exit(0);
  } catch (err) {
    console.error('❌ Connection failed:', err.message);
    console.log('\nPossible reasons:');
    console.log('1. Your IP is NOT whitelisted in MongoDB Atlas (check Network Access).');
    console.log('2. Your network/firewall is blocking port 27017.');
    process.exit(1);
  }
};

testSingleShard();
