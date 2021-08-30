const router = require('express').Router();

const {
    getAllUsers,
    getUserById,
    createNewUser,
    updateUserById,
    deleteUser, //bonus remove user's associated Thoughts when deleted
    addFriend,
    removeFriend
} = require('../../controllers/user-controller');

router
.route('/api/users')
.get(getAllUsers)
.get(getUserById)
.post(createNewUser)
.put(updateUserById)
.delete(deleteUser)


router
.route('/api/users/:userId/friends/:friendId')
.post(addFriend)
.delete(removeFriend)

module.exports = router;