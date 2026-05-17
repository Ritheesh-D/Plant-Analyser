import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

const findReplicaSet = async () => {
  const singleShardUri = 'mongodb://dritheesh05_db_user:00000@ac-iiks9sl-shard-00-00.na253br.mongodb.net:27017/plant_analyser?ssl=true&authSource=admin';
  
  try {
    const conn = await mongoose.connect(singleShardUri, { serverSelectionTimeoutMS: 10000 });
    // In Atlas, the replica set name is often in the connection properties
    const isMaster = await conn.connection.db.admin().command({ isMaster: 1 });
    console.log('--- REPLICA SET INFO ---');
    console.log('Actual Replica Set Name:', isMaster.setName);
    process.exit(0);
  } catch (err) {
    console.error('❌ Failed to get replica set info:', err.message);
    process.exit(1);
  }
};

findReplicaSet();
