const { MongoClient } = require('mongodb');

const username = process.env.MONGO_INITDB_ROOT_USERNAME || 'admin';
const password = process.env.MONGO_INITDB_ROOT_PASSWORD || 'secret@123';
const host = process.env.MONGO_HOST || 'localhost'; // localhost because MongoDB is on the host
const url = `mongodb://${username}:${encodeURIComponent(password)}@${host}:27017`;

(async () => {
  try {
    const client = new MongoClient(url, { useUnifiedTopology: true });
    await client.connect();
    console.log('Connected successfully to MongoDB!');
    // ... your code here ...
    await client.close();
    console.log('Connection closed.');
  } catch (err) {
    console.error('MongoDB connection error:', err);
  }
})();