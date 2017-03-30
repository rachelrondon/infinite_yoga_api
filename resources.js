const router = require('express').Router();

// router.use('/users', require('./controllers/users_controllers'));

router.use('/routines', require('./controllers/routines_controllers'));

module.exports = router;
