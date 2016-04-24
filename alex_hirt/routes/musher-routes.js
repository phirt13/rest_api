const Musher = require(__dirname + '/../models/musher');
const bodyParser = require('body-parser');
const errorHandler = require(__dirname + '/../lib/error-handler');

module.exports = (router) => {

  router.use(bodyParser.json());

  router.get('/mushers', (req, res) => {
    Musher.find(null, (err, data) => {
      if (err) return errorHandler(err, res);

      return res.json(data);
    });
  });

  router.post('/mushers', (req, res) => {
    var musherData = req.body;
    var newMusher = new Musher(musherData);

    newMusher.save((err, dogData) => {
      if (err) return errorHandler(err, res);

      console.log('Mongo says: Got it!');

      return res.json(dogData);
    });
  });

  router.put('/mushers/:id', (req, res) => {
    var dogData = req.body;
    delete dogData._id;

    Musher.update({ _id: req.params.id }, dogData, (err) => {
      if (err) return errorHandler(err, res);

      console.log('Mongo says: Updated!');
      return res.status(200).json({ msg: 'Musher Updated' });

    });
  });

  router.delete('/mushers/:id', (req, res) => {
    Musher.findOneAndRemove({ _id: req.params.id }, (err) => {
      if (err) return errorHandler(err, res);

      console.log('Mongo says: Removed!');
      return res.status(200).json({ msg: 'Musher Deleted' });
    });
  });
};
