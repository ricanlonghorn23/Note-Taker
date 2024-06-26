const notesRouter = require('express').Router();
const fs = require('fs');
const path = require('path');


const readNotesFromFile = () => {
    const data = fs.readFileSync(path.join(__dirname, '../db/db.json'), 'utf8');
    return JSON.parse(data);
};


const writeNotesToFile = (notes) => {
    fs.writeFileSync(path.join(__dirname, '../db/db.json'), JSON.stringify(notes, null, 2));
};


notesRouter.get('/', (req, res) => {
    const notes = readNotesFromFile();
    res.json(notes);
});

notesRouter.post('/', (req, res) => {
    const newNote = req.body;
    const notes = readNotesFromFile();
    newNote.id = notes.length > 0 ? notes[notes.length - 1].id + 1 : 1;
    notes.push(newNote);
    writeNotesToFile(notes);
    res.json(newNote);
});

notesRouter.delete('/:id', (req, res) => {
    const noteId = parseInt(req.params.id, 10);
    let notes = readNotesFromFile();
    notes = notes.filter(note => note.id !== noteId);
    writeNotesToFile(notes);
    res.json({ message: `Note with id ${noteId} deleted.` });
});
module.exports = { notesRouter };
