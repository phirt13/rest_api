const express = require('express');
const app = express();
const mongoose = require('mongoose');

const port = process.env.PORT || 5000;

const dogTeamOne = express.Router();
const dogTeamTwo = express.Router();

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/dog_teams', (err) => {
  if (err) console.log(err);
  else console.log('Opened connection to MongoDB');
});

const dogRoutes = express.Router();
const musherRoutes = express.Router();

// require(__dirname + '/routes/dog-routes')(dogRoutes);
// require(__dirname + '/routes/musher-routes')(musherRoutes);

app.listen(port, () => {
  console.log('Server listening on localhost:' + port);
});
