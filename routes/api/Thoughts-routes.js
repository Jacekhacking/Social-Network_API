const router = require('express').Router();

const {
    getAllThoughts,
    getThoughtById,
    createNewThought,
    updateThoughtById,
    deleteThoughtById,
    addReaction,
    // removeReaction
} = require('../../controllers/thoughts-controller');

router
    .route('/')
    .get(getAllThoughts)
    .post(createNewThought);

// /api/pizzas/:id
router
    .route('/:id')
    .get(getThoughtById)
    .put(updateThoughtById)
    .delete(deleteThoughtById);

// /api/thoughts/<pizzaId>
router.route('/:thoughtsId/reactions').post(addReaction);

// router
// .route('/api/thoughts/:thoughtId/reaction')
//     .post(createReaction)
// // .delete(removeReaction);


module.exports = router;