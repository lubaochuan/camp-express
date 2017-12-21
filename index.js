const express = require('express');
const path = require('path');
const MongoClient = require('mongodb').MongoClient;
const server = express();

// Serve static files built from the React app
server.use(express.static(path.join(__dirname, '/client/build')));

const dummy = {
    message: 'test string'
};

// API endpoint for testing
server.get('/api/test', (request, result) => {
    result.json(dummy);
});

// Any request made to the server that is not one of the above 
// API endpoints will be redirected to the React client
server.get('*', (request, result) => {
    result.sendFile(path.join(__dirname, '/client/build'));
});

const port = process.env.PORT || 5000;
server.listen(port);

console.log(`App listening on ${port}`);

// // This file contains sensitive information that is not checked into git
// const config = require('./dbconfig.json');

// // Test database
// MongoClient.connect(config.connectionString, (error, client) => {

//     if (error) {
//         console.log('Connection error');
//         throw error;
//     }

//     var db = client.db(config.database);

//     db.collection(config.collection).find().toArray((error, results) => {
//         if (error) {
//             console.log('Error fetching collection from database');
//             throw error;
//         }

//         console.log('Results: ', results);
//         client.close();
//     });
// });

module.exports = {
    server: server,
    data: dummy
};
