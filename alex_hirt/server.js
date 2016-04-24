const express = require('express');
const app = express();
const mongoose = require('mongoose');

const port = process.env.PORT || 5000;
const dogRouter = express.Router();
const musherRouter = express.Router();

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/dog_teams', (err) => {
  if (err) console.log(err);
  else console.log('Opened connection to MongoDB');
});

app.use('/api', dogRouter);

require(__dirname + '/routes/dog-routes')(dogRouter);
// require(__dirname + '/routes/musher-routes')(musherRouter);

app.use('/api/dogs', dogRouter);

app.listen(port, () => {
  console.log('Server listening on localhost:' + port);
});
