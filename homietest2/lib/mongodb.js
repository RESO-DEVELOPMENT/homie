import { MongoClient } from 'mongodb';

// MongoDB Atlas connection URL
const uri = 'mongodb+srv://vinh1305:thanhvinh2002@cluster0.lkk6qu0.mongodb.net/homie-store';
// Export a function to connect to MongoDB Atlas
export async function connectToMongoDB() {
  try {
    const client = await MongoClient.connect(uri);
    return client.db();
  } catch (error) {
    console.error('Failed to connect to MongoDB Atlas:', error);
    throw error;
  }
}
  