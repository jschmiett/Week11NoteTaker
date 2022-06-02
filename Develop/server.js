const { request, response } = require('express');
const express = require('express');

const db = require('./db/db.json');

const app = express();

//HTML Route GET /notes to return notes.html
app.get('./public/notes.html', (request, response) => {
    response.notes.html

});

//HTML Route GET * to return index.html
app.get('./public/index.html', (request, response) => {
    response.notes.html
});

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

//Each note must have an unique id when saved (npm package)