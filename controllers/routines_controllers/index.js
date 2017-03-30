const router = require('express').Router();
const controller = require('./controller');

router.get('/show', controller.showRT);
router.post('/new', controller.createRT);

module.exports = router;
