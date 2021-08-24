const router = require('express').Router();

const {
    getAllThoughts,
    getThoughtById,
    createNewThought,
    updateThoughtById,
    deleteThoughtById,
    createReaction,
    removeReaction
} = require ('../../controllers/Thoughts-controller');

router 
.route('/api/thoughts')
.get(getAllThoughts)
.get(getThoughtById)
.post(createNewThought)
.put(updateThoughtById)
.delete(deleteThoughtById);


router
.route('/api/thoughts/:thoughtId/reactions')
.post(createReaction)
.delete(removeReaction);


module.exports = router;