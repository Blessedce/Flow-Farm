const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;
const DB_URI = process.env.MONGODB_URI;

// Attempt to connect to the database first
mongoose.connect(DB_URI)
  .then(() => {
    console.log('✅ Successfully connected to MongoDB Atlas');
    // Only start the server if the database connection works
    app.listen(PORT, () => {
      console.log(`Server is active on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error('❌ Database connection error:', err);
    process.exit(1); // Stop the app if it can't reach the database
  });