const express = require('express');
const app = express();
const playersController = require('./controllers/Players');


//Middleware

app.use(express.json());

//Controllers
app.use('/api/Players', playersController);

app.listen(8080, () => {
  console.log('They see me rollin...on port 8080...');
});	