const { Activity } = require('../../db');

const deleteActivity = async (req, res) => {

    const { id } = req.params;

    try {
        
        if(!id) throw new Error('Activity ID is required');

        const activityDeleted = await Activity.destroy({ where: { id }});

        if(!activityDeleted) throw new Error(`No activities found with ID: ${id}`);

        return res.status(200).send(`Activity with ID: ${id} was deleted`);

    } catch (error) {
                
        if(error.message.includes('required')) return res.status(400).send(error.message);
        if(error.message.includes('No activities found')) return res.status(400).send(error.message);
        return res.status(500).send(error.message);

    }
}

module.exports = deleteActivity;