const router = require('express').Router();

const {
    getAllUser,
    getUserById,
    createNewUser,
    updateUserById,
    deleteUserById, //bonus remove user's associated Thoughts when deleted
    addFriend,
    removeFriend
} = require('../../controllers/user-controller');

router
.route('/')
.get(getAllUser)
.post(createNewUser)

router.route('/:id')
.get(getUserById)
.put(updateUserById)
.delete(deleteUserById)

router
.route('/:userId/:friendId')
.post(addFriend)
.delete(removeFriend)

module.exports = router;