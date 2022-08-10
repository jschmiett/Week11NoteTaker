const express = require('express');
const path = require('path');
const fs = require('fs');
const db = require('./db/db.json');
const { v4: uuidv4 } = require('uuid')
const util = require('util');
const readFile = util.promisify(fs.readFile);
const writeFile = util.promisify(fs.writeFile);
const app = express();

const PORT = process.env.PORT || 3001;

//Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static('public'));



//API Route GET /api/notes to read the db.json file and return all saved notes as JSON
app.get('/api/notes', (request, response) => {
    readFile('./db/db.json', 'utf8')
        .then((data) => {
            console.log(data);
            const noteArray = JSON.parse(data);
            console.log(noteArray);
            response.json(noteArray);
        })
});

//API Route POST /api/notes to receive a new note to save on the request body, and then return the new note to the client.
app.post('/api/notes', (request, response) => {
    // each new note needs an id
    readFile('./db/db.json', 'utf8')
        .then((data) => {
            console.log(data);
            const noteArray = JSON.parse(data);
            console.log(request.body)
            const newNote = {
                id: uuidv4(),
                ...request.body
            }
            console.log(newNote);
            noteArray.push(newNote);
            //stringify noteArray with newNote added back into a JSON string
            const notes = JSON.stringify(noteArray);
            //write string to a file
            writeFile('./db/db.json', notes)
                .then((data) => {
                    response.json(newNote);
                })

            // const newNoteId = uuidv4()

        })
});

//HTML Route GET /notes to return notes.html
app.get('/notes', (request, response) => {
    response.sendFile(path.join(__dirname, '/public/notes.html'));

});

//HTML Route GET * to return index.html
app.get('/', (request, response) => {
    response.sendFile(path.join(__dirname, '/public/index.html'));
});


//Each note must have an unique id when saved (npm package)


app.listen(PORT, () =>
    console.log(`App listening at http://localhost:${PORT} 🚀`)
);