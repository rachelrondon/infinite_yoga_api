const controller = {};
const Move = require('../../models/move');

controller.showMoves = (req, res) => {
  Move
  .showAll()
  .then((data) => {
    res.json(data)
  })
  .catch(err => console.log('ERROR:', err));
}

module.exports = controller;
