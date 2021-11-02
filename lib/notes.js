const fs = require("fs");
const path = require("path");

//create a new note
function createNewNote(body, notesArray) {
    const note = body;
    notesArray.push(note);
    fs.writeFileSync(
        path.join(__dirname, './db/db.json'),
        JSON.stringify({ notes: notesArray }, null, 2),
    );
    return note;
}


//validate that the note has a title and text
function validateNote(note) {
    if (!note.title || typeof note.title !== "string") {
      return false;
    }
    if (!note.text || typeof note.text !== "string") {
      return false;
    }
    return true;
}

//delete notes
function deleteNote(body, notesArray) {
    const note = body;
    notesArray.splice(note);
    fs.writeFileSync(
        path.join(__dirname, './db/db.json'),
        JSON.stringify({ notes: notesArray }, null, 2),
    );
    return note;
}

module.exports = { 
    createNewNote,
    validateNote,
    deleteNote 
};

