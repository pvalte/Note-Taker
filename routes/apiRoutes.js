const { createNewNote, validateNote, deleteNote } = require('../lib/notes.js');
const { notes } = require('../db/db.json');
const router = require('express').Router();
const { v4: uuidv4 } = require('uuid');

//api routes
router.get('/notes', (req, res) => {
    let results = notes;
    
    res.json(results);
});

//post new notes
router.post('/notes', (req, res) => {
    // set id based on what the next index of the array will be
    req.body.id = uuidv4();

    // if any data in req.body is incorrect, send 400 error back
    if (!validateNote(req.body)) {
        res.status(400).send('The note is missing a title and/or body text.');
    } else {
        const note = createNewNote(req.body, notes);
        res.json(note);
    }
});

module.exports  = router;