const express = require('express');
const path = require('path');

const app = express();
const PORT = 8000;

// Serve static files from the current directory
app.use(express.static(__dirname));

// Serve the DASH manifest file with the correct MIME type
app.get('/manifest.mpd', (req, res) => {
  res.setHeader('Content-Type', 'application/dash+xml');
  res.sendFile(path.join(__dirname, 'manifest.mpd'));
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});
