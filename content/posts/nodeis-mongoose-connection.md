---
title: "Nodejs Mongoose Connection"
date: 2024-09-11T16:21:23+07:00
description: set up and manage a connection to MongoDB using Mongoose.
tags: [js, nodejs, mongoDB, Mongoose]
author:
  name: BBMCode
  email: bbmcode247@gmail.com
  homepage: https://bbmcode.com
  github: bbmcodedotcom
---

```js
// Import Mongoose
const mongoose = require('mongoose');

// MongoDB connection URI
const mongoURI = 'mongodb://localhost:27017/your_database_name'; // Replace with your actual URI and database name

// Mongoose connection options
const options = {
  useNewUrlParser: true,    // Use new URL string parser instead of deprecated one
  useUnifiedTopology: true, // Use new server discovery and monitoring engine
  useCreateIndex: true,     // Use MongoDB's createIndex() function
  useFindAndModify: false,  // Use native findOneAndUpdate() rather than findAndModify()
};

// Connect to MongoDB
mongoose.connect(mongoURI, options)
  .then(() => {
    console.log('Connected to MongoDB successfully!');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });

// Optional: Handle connection events
const db = mongoose.connection;

db.on('error', (error) => {
  console.error('MongoDB connection error:', error);
});

db.on('disconnected', () => {
  console.log('MongoDB disconnected');
});

// Handle process termination, close Mongoose connection
process.on('SIGINT', async () => {
  await mongoose.connection.close();
  console.log('MongoDB connection closed due to app termination');
  process.exit(0);
});
```
