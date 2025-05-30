
const express = require('express');
const path = require('path');

const app = express();

// Serve Angular static files
app.use(express.static(path.join(__dirname, 'dist/lahomes')));

// Correct wildcard route pattern
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/lahomes/index.html'));
});

const PORT = process.env.PORT || 4200;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
