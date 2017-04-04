const router = require('express').Router();

router.use('/moves', require('./controllers/moves_controllers'));

router.use('/routines', require('./controllers/routines_controllers'));

router.use('/', (req, res) => res.json({message: 'yep'}))

module.exports = router;
