const express = require('express');
const app = express();
const playersController = require('./controllers/CPlayers');
const teamsController = require('./controllers/CTeams');
const venuesController = require('./controllers/CVenues');
const cors = require('cors')

//Middleware
app.use(cors())
app.use(express.json());

//Controllers
app.use('/api/Players', playersController);
app.use('/api/Teams', teamsController);
app.use('/api/Venues', venuesController);

app.listen(8080, () => {
  console.log('They see me rollin...on port 8080...');
});	