const express = require('express');
const path = require('path');

const app = express();

// Serve static files built from the React app
app.use(express.static(path.join(__dirname, 'client/build')));

// API endpoint for testing
app.get('/api/test', (request, result) => {
  result.json({
      message: 'a test string. this can be anything'
  })
});

// Any request made to the server that is not one of the above 
// API endpoints will be redirected to the React client
app.get('*', (request, result) => {
  res.sendFile(path.join(__dirname+'/client/build/index.html'));
});

const port = process.env.PORT || 5000;
app.listen(port);

console.log(`App listening on ${port}`);