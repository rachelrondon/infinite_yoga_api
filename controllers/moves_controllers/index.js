const router = require('express').Router();
const controller = require('./controller');

router.get('/show', controller.showMoves)

module.exports = router;
