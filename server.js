const express = require('express');
const path = require('path');
const PORT = process.env.PORT || 3001;
const { notes } = require('./data/db');

// Initialize the app and create a port
const app = express();

// parse incoming string or array data
app.use(express.urlencoded({ extended: true }));

// parse incoming JSON data
app.use(express.json());
app.use(express.static('public'));

//api routes
app.get('/api/notes', (req, res) => {
    let results = notes;
    
    res.json(results);
});

//html routes
app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, './public/notes.html'));
});

//for any wildcard route, return to homepage
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, './public/index.html'));
});

// Start the server on the port
app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
});
