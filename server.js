
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

app.get('/', (req, res) => {
  console.log('Test!')
  res.send('Hi')
})


//Is this all I need to get everything going as far as the server.js file goes?
