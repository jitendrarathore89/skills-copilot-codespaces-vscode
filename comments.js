// Create web server
// Create a new express app
const express = require('express');
const app = express();
// Import the comments file
const comments = require('./comments');
// Use the express.static middleware to serve static files
app.use(express.static('public'));
// Use the comments router for all routes
app.use('/comments', comments);
// Start the server
app.listen(4001, () => {
  console.log('Server is listening on port 4001');
});