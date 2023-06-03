const router = require('express').Router();

const countriesRoutes = require('./countriesRoutes')
const activitiesRoutes = require('./activitiesRoutes')

router.use('/countries', countriesRoutes)
router.use('/activities', activitiesRoutes)

module.exports = router;