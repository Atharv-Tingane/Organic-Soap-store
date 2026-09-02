require('dotenv').config();

const mongoose = require('mongoose');
const app = require('./app');
const port = Number(process.env.PORT || 5000);

async function start() {
  if (!process.env.MONGO_URI || !process.env.JWT_SECRET) {
    throw new Error('MONGO_URI and JWT_SECRET must be configured. See .env.example.');
  }
  await mongoose.connect(process.env.MONGO_URI, { serverSelectionTimeoutMS: 10000 });
  console.log(`MongoDB connected to database: ${mongoose.connection.name}`);
  const server = app.listen(port, () => console.log(`API listening on port ${port}`));
  const shutdown = async (signal) => {
    console.log(`${signal} received; closing server`);
    server.close(async () => { await mongoose.connection.close(); process.exit(0); });
  };
  process.once('SIGINT', () => shutdown('SIGINT'));
  process.once('SIGTERM', () => shutdown('SIGTERM'));
}

start().catch((error) => { console.error('Unable to start API:', error.message); process.exit(1); });

