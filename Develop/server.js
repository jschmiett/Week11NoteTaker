const express = require('express');

const db = require('./db/db.json');

const app = express();

const PORT = 3001;

//Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static('public'));



//API Route GET /api/notes to read the db.json file and return all saved notes as JSON
app.get('./api/notes', (request, response) => {
    response.json{ notes }
});

//API Route POST /api/notes to receive a new note to save on the request body, and then return the new note to the client.
app.post('./api/notes', (request, response) => {
    //append new note to the request body
    newNote = body.append(notes)
    res.send($newNote)
});

//HTML Route GET /notes to return notes.html
app.get('./public/notes.html', (request, response) => {
    response.notes.html

});

//HTML Route GET * to return index.html
app.get('./public/index.html', (request, response) => {
    response.notes.html
});


//Each note must have an unique id when saved (npm package)




app.listen(PORT, () =>
    console.log(`App listening at http://localhost:${PORT} 🚀`)
);