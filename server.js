const express = require('express');
const app = express();
const port = 3000;

// Serve static files from "public" directory
app.use(express.static('public'));

// Example API endpoint
app.get('/api', (req, res) => {
    res.json({ message: 'Hello from the backend!' });
});

app.listen(port, () => {
    console.log(`Backend running at http://localhost:${port}`);
});
