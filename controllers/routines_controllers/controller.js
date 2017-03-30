const controller = {};
const Routine = require('../../models/routine');

controller.showRT = (req, res) => {
  Routine
  .showAll()
  .then((data) => {
    res.json(data)
  })
  .catch(err => console.log('ERROR:', err));
}

controller.createRT = (req, res) => {
  console.log(req.body);
  Routine
  .createRT(req.body.routine)
  .then((routine) => {
    console.log(routine);
    res
    .sendStatus(201)
    .json(routine);
  })
  .catch((err) => {
    res
    .status(400)
    .json(err);
  });
};

module.exports = controller;
