const activitiesRoutes = require('express').Router();
const postActivity = require('../controllers/activities/postActivity');
const getActivities = require('../controllers/activities/getActivities');
const updateActivity = require('../controllers/activities/updateActivity');
const deleteActivity = require('../controllers/activities/deleteActivity');

activitiesRoutes.post('/', (req, res) => {
    postActivity(req, res);
});

activitiesRoutes.get('/', (req, res) => {
    getActivities(req, res);
});

activitiesRoutes.put('/', (req, res) => {
    updateActivity(req, res);
});

activitiesRoutes.delete('/:id', (req, res) => {
    deleteActivity(req, res);
});

module.exports = activitiesRoutes;