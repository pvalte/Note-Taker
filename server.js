const express = require('express');
const PORT = process.env.PORT || 3001;
const { notes } = require('./data/db');

// Initialize the app and create a port
const app = express();

// parse incoming string or array data
app.use(express.urlencoded({ extended: true }));

// parse incoming JSON data
app.use(express.json());
app.use(express.static('public'));

//add routes
app.get('/api/notes', (req, res) => {
    let results = notes;
    
    res.json(results);
});

// Start the server on the port
app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
});
