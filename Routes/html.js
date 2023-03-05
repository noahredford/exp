const express = require('express');
const express = express.Router(); // found and used the router method @ https://expressjs.com/en/guide/routing.html
const fs = require('fs');
const path = require('path');
const notes = db.JSON.parse(data); //parse the data so that it can be displayed for the user?
const app = express()

app.get('/notes', (req, res) => {
    res.JSON(notes)
}
)
// I have no idea where to go from here. I know I need to set up routes but I don't where to start


//Create a function that creates a new note, and pushes it to the array in db/json
function newNote(body, notes) {
    const note = body;
    notes.push(note);
    fs.writeFileSync(
        path.join(__dirname, './db/db.json'),
        JSON.stringify({note: notes}, null, 2)
    );
    return note;
}

  app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './public/index.html'));
  });
  
  app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, './public/notes.html'));
  });
  
  app.get('/api/notes', (req, res) => {
    res.json(notes);
  });
  
  app.post('/api/notes', (req, res) => {
    const note = newNote(req.body, notes);
    res.json(note);
  });