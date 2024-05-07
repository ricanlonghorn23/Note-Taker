const express = require('express');
const { pageRouter } = require('./routes/pages');
const { notesRouter } = require('./routes/notes');
const path = require('path');

const app = express();

const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, 'docs')));


app.use('/', pageRouter);
app.use('/api/notes', notesRouter);

app.listen(PORT, () => {
    console.info(`Server started on http://localhost:${PORT}`);
});
