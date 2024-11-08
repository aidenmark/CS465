// Import the Express library
const express = require('express');
const app = express();

// Define the port number
const PORT = 3000;

// Serve static files from the "public" directory
app.use(express.static('public'));

// Set up a basic route
app.get('/', (req, res) => {
  res.send('Welcome to Travlr Getaways!');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});