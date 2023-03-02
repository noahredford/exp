
const express = require('express');
const path = require('path');
const PORT = 3001;
const app = express();
const apiRoute = require('./Routes/api');
const htmlRoute = require('./Routes/html');

app.use(express.urlencoded({extended: true})); // received help from this link: https://stackoverflow.com/questions/23259168/what-are-express-json-and-express-urlencoded
app.use(express.json());// received help from this link https://stackoverflow.com/questions/23259168/what-are-express-json-and-express-urlencoded

app.use(express.static('public'));

app.use('/api', apiRoute);
app.use('/', htmlRoute);

app.listen(PORT, () => {
  console.log(`Now on PORT ${PORT}`)
});


