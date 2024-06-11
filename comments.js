// Create web server
const express = require('express');
const app = express();
const port = 3000;

// Create a route
app.get('/comments', (req, res) => {
  res.send('This is a list of comments');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});