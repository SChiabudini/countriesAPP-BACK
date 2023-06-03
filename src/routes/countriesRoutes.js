const countriesRoutes = require('express').Router();
const getCountries = require('../controllers/countries/getCountries');
const getCountriesByName = require('../controllers/countries/getCountriesByName');
const getCountryById = require('../controllers/countries/getCountryById');


countriesRoutes.get('/', async (req, res) => {
    const { name } = req.query;

    if (name) {
        return getCountriesByName(req, res);
    }
    
    getCountries(req, res);

});

countriesRoutes.get('/:id', (req, res) => {
    getCountryById(req, res);
});

module.exports = countriesRoutes;