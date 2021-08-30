const router = require('express').Router();

const {
    getAllUser,
    getUserById,
    createNewUser,
    updateUserById,
    // deleteUser, //bonus remove user's associated Thoughts when deleted
    // addFriend,
    // removeFriend
} = require('../../controllers/user-controller');

router
.route('/')
.get(getAllUser)
.post(createNewUser)
// .delete(deleteUser)

router.route('/:id')
.get(getUserById)
.put(updateUserById)

// router
// .route('/api/users/:userId/friends/:friendId')
// .post(addFriend)
// .delete(removeFriend)

module.exports = router;