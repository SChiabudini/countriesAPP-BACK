const { Country, Activity } = require('../../db');

const getCountries = async (req, res) => {

    try {
        const allCountries = await Country.findAll({
            include: [{
                model: Activity, through: {attributes: [] }
            }]
        });

        if(!allCountries.length) throw new Error('No countries found in DataBase');

        return res.status(200).json(allCountries);
    
    } catch (error) {
        
        return res.status(500).send(error.message);
    }
}

module.exports = getCountries;