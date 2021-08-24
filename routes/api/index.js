const router = require('express').Router();
const reactionRoutes = require('./Reaction-routes');
const thoughtsRoutes = require('./Thoughts-routes');
const userRoutes = require('./User-routes');

router.use('/Reaction', reactionRoutes);
router.use('/Thoughts', thoughtsRoutes);
router.use('/User', userRoutes);


module.exports = router;