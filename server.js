const express = require('express');
const fs = require('fs');
const path = require('path');
const { v4: uuidv4 } = require('uuid');
const PORT = process.env.PORT || 3001;
const { notes } = require('./db/db');

// Initialize the app and create a port
const app = express();

// parse incoming string or array data
app.use(express.urlencoded({ extended: true }));

// parse incoming JSON data
app.use(express.json());
app.use(express.static('public'));

//functions
function createNewNote(body, notesArray) {
    const note = body;
    notesArray.push(note);
    fs.writeFileSync(
        path.join(__dirname, './db/db.json'),
        JSON.stringify({ notes: notesArray }, null, 2),
    );
    return note;
}


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

//post new notes
//TODO: add validation
app.post('/api/notes', (req, res) => {
    // set id based on what the next index of the array will be
    req.body.id = uuidv4();
    console.log(req.body);
    const note = createNewNote(req.body, notes);
    res.json(note);
});


// Start the server on the port
app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
});
