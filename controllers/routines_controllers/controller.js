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

controller.showOne = (req, res) => {
  Routine
  .findById(req.params.id)
  .then( data => {
    res.json(data);
  })
}

controller.beginner = (req, res) => {
  Routine
  .findByLevel('Beginner')
  .then(data => {
    res.json(data);
  })
}

controller.advanced = (req, res) => {
  Routine
  .findByLevel('Advanced')
  .then(data => {
    res.json(data);
  })
}

controller.search = (req, res) => {
  Routine
  .search(`%${req.query.search}%`)
  .then( data => {
    res.json(data);
  })
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
