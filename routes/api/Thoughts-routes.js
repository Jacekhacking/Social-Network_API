const router = require('express').Router();

const {
    getAllThoughts,
    getThoughtById,
    createNewThought,
    updateThoughtById,
    deleteThoughtById,
    addReaction,
    removeReaction
} = require('../../controllers/thoughts-controller');

router
    .route('/')
    .get(getAllThoughts)
    .post(createNewThought);

// /api/thoughts/:id
router
    .route('/:id')
    .get(getThoughtById)
    .put(updateThoughtById)
    .delete(deleteThoughtById);

// /api/thoughts/thoughtId/reactions
router.route('/:thoughtId/reactions').post(addReaction);

router.route('/:thoughtId/:reactionId').delete(removeReaction);


module.exports = router;