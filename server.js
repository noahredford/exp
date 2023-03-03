
const express = require('express');
const path = require('path');
const PORT = 3007;
const app = express()

app.use(express.urlencoded({extended: true})); // received help from this link: https://stackoverflow.com/questions/23259168/what-are-express-json-and-express-urlencoded
app.use(express.json());// received help from this link https://stackoverflow.com/questions/23259168/what-are-express-json-and-express-urlencoded

app.use(express.static('public'));

app.listen(PORT, () => {
  console.log(`Now on PORT ${PORT}`)
});

//Create a function that creates a new note, and pushes it to the array in db/json
function newNote(body, notesList) {
  const note = body;
  notesList.push(note);
  fs.writeFileSync(
      path.join(__dirname, './db/db.json'),
      JSON.stringify({notes: notesList}, null, 2)
  );
  return note;
}



app.get('/', (req, res) => {
  console.log('Test!')
  res.send('Hi')
})

