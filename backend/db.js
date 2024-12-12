






const mongoose = require('mongoose');
require('dotenv').config();

// Ensure the correct MongoDB URL is used
// MONGO_URL_ONLINE
const mongoURL = process.env.MONGO_URL_ONLINE; 

mongoose.connect(mongoURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    bufferCommands: false, // Disable Mongoose's buffering
    serverSelectionTimeoutMS: 3000, // Increase timeout duration
  });
  

const db = mongoose.connection;

db.on('connected', () => {
    console.log('MongoDB connected')
})

// Monitor connection events
db.on('disconnected', () => {
    console.log('MongoDB disconnected');
});

module.exports = db;
