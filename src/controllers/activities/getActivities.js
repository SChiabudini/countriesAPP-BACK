const { Activity } = require('../../db');

const getActivities = async (req, res) => {

    try {
        const allActivities = await Activity.findAll();

        if(!allActivities.length) throw new Error('No activities found in DataBase');

        return res.status(200).json(allActivities);
    
    } catch (error) {

        if(error.message.includes('No activities found')) return res.status(400).send(error.message);
        return res.status(500).send(error.message);
    }
}

module.exports = getActivities;