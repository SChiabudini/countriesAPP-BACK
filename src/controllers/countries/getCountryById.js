const { Country, Activity } = require('../../db');

const getCountryById = async (req, res) => {

    const { id } = req.params;

    try {
        
        const country = await Country.findByPk(id, {
            include: [
                { model: Activity, through: { attributes: [] } }
            ]
        })

        if(!country) throw new Error (`No countries found with ID: ${id}`);

        return res.status(200).json(country);

    } catch (error) {
        
        if(error.message.includes('No countries found')) return res.status(400).send(error.message);

        return res.status(500).send(error.message);
    }
}

module.exports = getCountryById;