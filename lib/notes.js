const fs = require("fs");
const path = require("path");

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
    deleteNote 
};

