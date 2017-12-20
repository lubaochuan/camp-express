const express = require('express');
const path = require('path');

// You need to create this file as it is not checked into git for security
// See the README for how this file should be structured
const config = require('./dbconfig.json');

const app = express();

// Serve static files built from the React app
app.use(express.static(path.join(__dirname, 'client/build')));

// API endpoint for testing
app.get('/api/test', (request, result) => {
  result.json({
    message: 'a test string. this can be anything'
  });
});

// Any request made to the server that is not one of the above 
// API endpoints will be redirected to the React client
app.get('*', (request, result) => {
  res.sendFile(path.join(__dirname + '/client/build/index.html'));
});

const port = process.env.PORT || 5000;
app.listen(port);

console.log(`App listening on ${port}`);

const MongoClient = require('mongodb').MongoClient;

// Test database
MongoClient.connect(config.connectionString, (error, client) => {

  if (error) {
    console.log('Connection error');
    throw error;
  }

  const db = client.db(config.database);

  db.collection(config.collection).find().toArray((error, results) => {
    if (error) {
      console.log('Error fetching collection from database');
      throw error;
    }

    console.log('Results: ', results);
    client.close();
  });
});
