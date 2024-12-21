const express = require('express');
const app = express();
const path = require('path');

// Serve static files from project root
app.use(express.static(__dirname));

// Specific route for assets
app.use('/assets', express.static(path.join(__dirname, 'assets')));

// Start server
app.listen(3000, () => {
  console.log('Server running at http://localhost:3000');
}); 