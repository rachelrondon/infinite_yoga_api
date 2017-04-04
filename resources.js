const router = require('express').Router();

router.use('/moves', require('./controllers/moves_controllers'));

router.use('/routines', require('./controllers/routines_controllers'));

module.exports = router;
