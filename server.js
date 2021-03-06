const express = require('express');
const path = require('path');
const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


const notes = require('./routes/notesRoute')
app.use('/api/notes', notes);

// GET Route for notes
app.get('/notes', (req, res) =>
    res.sendFile(path.join(__dirname, '/public/notes.html'))
);

// GET Route for homepage
app.get('*', (req, res) =>
    res.sendFile(path.join(__dirname, '/public/index.js'))
);


app.listen(PORT, () =>
    console.log(`App listening at http://localhost:${PORT} 🚀`)
);