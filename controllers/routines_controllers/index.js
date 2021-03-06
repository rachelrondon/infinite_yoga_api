const router = require('express').Router();
const controller = require('./controller');

router.get('/', controller.showRT);
router.post('/new', controller.createRT);
router.get('/:id', controller.showOne);

router.get('/search', controller.search);

router.get('/beginner', controller.beginner)
router.get('/advanced', controller.advanced)


module.exports = router;
