const { createNewNote, deleteNote } = require('../lib/notes.js');
const { notes } = require('../db/db.json');
const router = require('express').Router();
const { v4: uuidv4 } = require('uuid');

//api routes
router.get('/notes', (req, res) => {
    let results = notes;
    
    res.json(results);
});

//post new notes
//TODO: add validation
router.post('/notes', (req, res) => {
    // set id based on what the next index of the array will be
    req.body.id = uuidv4();
    console.log(req.body);
    const note = createNewNote(req.body, notes);
    res.json(note);
});

module.exports  = router;