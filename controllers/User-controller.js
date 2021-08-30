const { User } = require('../models');


const userController = {


    //gets all user
    getAllUser(req, res) {
        User.find({})
            .populate({
                path: 'user',
                select: '-__v'
            })
            .select('-__v')
            .sort({ _id: -1 })
            .then(dbUserData => res.json(dbUserData))
            .catch(err => {
                console.log(err);
                res.sendStatus(400);
            });
    },


    //gets all user by ID
    getUserById({ params }, res) {
        User.findOne({ _id: params.id })
            .populate({
                path: 'user',
                select: '-__v'
            })
            .select('-__v')
            .then(dbUserData => res.json(dbUserData))
            .catch(err => {
                console.log(err);
                res.sendStatus(400);
            })
    },


    //creates a new user
    createNewUser({ body }, res) {
        User.create(body)
            .then(dbUserData => res.json(dbUserData))
            .catch(err => res.json(err));
    },

    // updates user by their ID
    updateUserById({ params, body }, res) {
        User.findOneAndUpdate({ _id: params.id },
            body, { new: true, runValidators: true })
            .then(dbUserData => {
                if (!dbUserData) {
                    res.status(404).json({ message: "No user by this ID " });
                    return;
                }
                res.json(dbUserData);
            })
            .catch(err => res.json(err))
    },

    //deletes user by ID
    //bonus remove user's associated Thoughts when deleted
    deleteUserById({ params }, res) {
        User.findOneAndDelete({ _id: params.id })
            .then(dbUserData => res.json(dbUserData))
            .catch(err => res.json(err));
    },



    addFriend({ params }, res) {
        console.log('addFriend...')

        // get friend user
        User.findById(params.friendId).then(dbFriendData => {
            if (!dbFriendData) {
                res.status(404).json({ message: "No friend user by this ID " });
                return;
            }

            //          console.log(dbFriendData);

            User.findOneAndUpdate(
                { _id: params.userId },
                { $push: { friends: dbFriendData } },
                { new: true, runValidators: true })
                .then(dbUserData => {
                    if (!dbUserData) {
                        res.status(404).json({ message: "No user by this ID " });
                        return;
                    }
                    res.json(dbUserData);
                })
                .catch(err => res.json(err))
        })
            .catch(err => res.json(err));
    },


    removeFriend({ params }, res) {

        console.log('removeFriend...')

        // // get friend user
        // User.findById(params.friendId).then(dbFriendData => {
        //     if (!dbFriendData) {
        //         res.status(404).json({ message: "No friend user by this ID " });
        //         return;
        //     }

        //      console.log(dbFriendData);

            User.findOneAndUpdate(
                { _id: params.userId },
                // { $pull: { friends: dbFriendData._id } },
                { $pull: { friends: params.friendId } },
                { new: true, safe: true, runValidators: true })
                .then(dbUserData => {
                    if (!dbUserData) {
                        res.status(404).json({ message: "No user by this ID " });
                        return;
                    }
                    res.json(dbUserData);
                })
                .catch(err => res.json(err))
        // })
        // .catch(err => res.json(err));
    }
    }

    module.exports = userController;