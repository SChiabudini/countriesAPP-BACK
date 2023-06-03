const { Activity } = require('../../db');

const updateActivity = async (req, res) => {

    const { id, name, difficulty, duration, season, image } = req.body;

    try {

        if(!id) throw new Error('Activity ID is required');

        const activityFound = await Activity.findByPk(id);

        if(!activityFound) throw new Error(`No activities found with ID: ${id}`);

        const activityUpdates = { 
            name: name || activityFound.name,
            difficulty: difficulty || activityFound.difficulty,
            duration: duration || activityFound.duration,
            season: season || activityFound.season,
            image: image || activityFound.image
        };

        const activityUpdated = await Activity.update(activityUpdates, { where: { id } });

        return res.status(200).send(`Activity ${activityUpdates.name} was updated`);
        
    } catch (error) {
        
        if(error.message.includes('required')) return res.status(400).send(error.message);
        if(error.message.includes('No activities found')) return res.status(400).send(error.message);
        return res.status(500).send(error.message);

    }

}

module.exports = updateActivity;