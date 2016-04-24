module.exports = (err, res) => {
  console.log(err);
  res.status(500).json({ msg: 'internal error' });
};
