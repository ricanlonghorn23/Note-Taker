const pageRouter = require('express').Router();
const path = require('path');

pageRouter.get('/', (req, res) =>{
    res.sendFile(path.join(__dirname, '../docs/index.html'));
});

pageRouter.get('/notes', (req, res) =>{
    res.sendFile(path.join(__dirname, '../docs/notes.html'));
});

module.exports = { pageRouter};