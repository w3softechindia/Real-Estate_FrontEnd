const express = require('express');
const path = require('path');

const app = express();

// Serve static Angular files
app.use(express.static(path.join(__dirname, 'dist/lahomes')));

// Wildcard route should return index.html for SPA routing
app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/lahomes', 'index.html'));
});

// Use Heroku port or 4200 locally
const PORT = process.env.PORT || 4200;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
