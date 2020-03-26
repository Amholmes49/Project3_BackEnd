const express = require('express');
const app = express();
const playersController = require('./controllers/CPlayers');
const teamsController = require('./controllers/CTeams');
// const venuesController = require('./controllers/CVenues');
const cors = require('cors')

//Middleware
app.use(cors())
app.use(express.json());

//Controllers
app.use('/api/Players', playersController);
app.use('/api/Teams', teamsController);
// app.use('/api/Venues', venuesController);

app.set("port", process.env.PORT || 8080);

app.listen(app.get("port"), () => {
  console.log(`✅ PORT: ${app.get("port")} 🌟`);
});