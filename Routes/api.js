const express = require('express');
const express = express.Router(); // found and used the router method @ https://expressjs.com/en/guide/routing.html
const fs = require('fs');
const path = require('path');
const app = express ();

app.get('/api/notes', (req, res) => {
    res.json(notes);
})

app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, './public/notes/html'))
})

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './public/index.html'));
  });

  app.post('/api/notes', (req, res) => {
    const note = newNote(req.body, notes);
    res.json(note);
  });