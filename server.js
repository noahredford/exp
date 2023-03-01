const express = require('express');
const path = require('path');
const PORT = 3001;
const app = express();
const fs = require('fs');

app.get('/paths', (req, res) =>
  res.sendFile(path.join(__dirname, 'public/index.html'))
);

app.get('/paths', (req, res) =>
  res.sendFile(path.join(__dirname, 'public/notes.html'))
);