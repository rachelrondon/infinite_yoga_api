const router = require('express').Router();
const controller = require('./controller');

router.get('/', controller.showRT);
router.post('/new', controller.createRT);
router.get('/:id', controller.showOne);


module.exports = router;
