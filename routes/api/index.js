const router = require('express').Router();

// const reactionRoutes = require('./reaction-routes');
const thoughtsRoutes = require('./thoughts-routes');
// const userRoutes = require('./user-routes');

// router.use('/reaction', reactionRoutes);
router.use('/thoughts', thoughtsRoutes);
// router.use('/user', userRoutes);


module.exports = router;