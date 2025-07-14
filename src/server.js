import dotenv from 'dotenv'
dotenv.config({ path: '../.env' });
import connectDB from './db/db.js';

import app from './app.js'

const port = process.env.PORT || 3000
console.log(process.env.PORT)
console.log(process.env.MONGODB_URI)
connectDB()
  .then(() => {
    app.listen(port, () => {
      console.log(`port is running on port number ${port}`);
    });
  })
  .catch((error) => {
    console.error('Database connection failed:', error);
    process.exit(1); // Optional: exit the process if DB connection fails
  });

