const Dog = require(__dirname + '/../models/dog');
const bodyParser = require('body-parser');
const errorHandler = require(__dirname + '/../lib/error-handler');

module.exports = (router) => {

  router.use(bodyParser.json());

  router.get('/dogs', (req, res) => {
    Dog.find(null, (err, data) => {
      if (err) return errorHandler(err, res);

      return res.json(data);
    });
  });

  router.post('/dogs', (req, res) => {
    var dogData = req.body;
    var newDog = new Dog(dogData);

    newDog.save((err, dogData) => {
      if (err) return errorHandler(err, res);

      console.log('Mongo says: Got it!');

      return res.json(dogData);
    });
  });

  router.put('/dogs/:id', (req, res) => {
    var dogData = req.body;
    delete dogData._id;

    Dog.update({ _id: req.params.id }, dogData, (err) => {
      if (err) return errorHandler(err, res);

      console.log('Mongo says: Updated!');
      return res.status(200).json({ msg: 'Dog Updated' });

    });
  });

  router.delete('/dogs/:id', (req, res) => {
    Dog.findOneAndRemove({ _id: req.params.id }, (err) => {
      if (err) return errorHandler(err, res);

      console.log('Mongo says: Removed!');
      return res.status(200).json({ msg: 'Dog Deleted' });
    });
  });
};
