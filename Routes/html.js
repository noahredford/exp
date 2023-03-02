const express = require('express');
const express = express.Router(); // found and used the router method @ https://expressjs.com/en/guide/routing.html
const fs = require('fs');
const path = require('path');
const notes = db.JSON.parse(data);
const app = express()

app.get('/notes', (req, res) => {
    res.JSON(notes)
}
)
// I have no idea where to go from here. I know I need to set up routes but I don't where to start
