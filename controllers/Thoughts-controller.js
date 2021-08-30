const { Thoughts, Reaction } = require('../models');

const thoughtsController = {

    //get all thoughts 
    getAllThoughts(req, res) {


        Thoughts.find({})
            .populate({
                path: 'thoughts',
                select: '-__v'
            })
            .select('-__v')
            .sort({ _id: -1 })
            .then(dbThoughtsData => res.json(dbThoughtsData))
            .catch(err => {
                console.log(err);
                res.sendStatus(400);
            });
    },

    //get thought by id
    getThoughtById({ params }, res) {
        console.log("hey i work");

        Thoughts.findOne({ _id: params.id })
            .populate({
                path: 'thoughts',
                select: '-__v'
            })
            .select('-__v')
            .then(dbThoughtsData => res.json(dbThoughtsData))
            .catch(err => {
                console.log(err);
                res.sendStatus(400);
            });
    },

    //create new thought
    createNewThought({ body }, res) {
        Thoughts.create(body)
            .then(dbThoughtsData => res.json(dbThoughtsData))
            .catch(err => res.json(err));
    },

    //update thought by id
    updateThoughtById({ params, body }, res) {
        Thoughts.findOneAndUpdate({ _id: params.id },
            body, { new: true, runValidators: true })
            .then(dbThoughtsData => {
                if (!dbThoughtsData) {
                    res.status(404).json({ message: 'No thoughts found in this head! ' });
                    return;
                }
                res.json(dbThoughtsData);
            })
            .catch(err => res.json(err));
    },

    //delete thought by id
    deleteThoughtById({ params }, res) {
        Thoughts.findOneAndDelete({ _id: params.id })
            .then(dbThoughtsData => res.json(dbThoughtsData))
            .catch(err => res.json(err));
    },

    //create reaction and add to thought
    addReaction({params, body}, res){

        Thoughts.findOneAndUpdate(
            {_id: params.thoughtId},
            {$push:{reactions: body } },
            {new: true, runValidators: true}
        )
        .then(dbThoughtsData => {
            if (!dbThoughtsData){
                res.status(404).json({message: 'you done messed up a-a-ron'});
                return;
            }
            res.json(dbThoughtsData);
        })
        .catch(err => res.json(err));
    },

    //delete thought 
    removeReaction({params}, res) {
        console.log(params)
        Thoughts.findOneAndUpdate(
            {_id: params.thoughtId},
            {$pull: {reactions: { _id: params.reactionId} } },
            {new: true}
        )
        .then(dbThoughtsData => res.json(dbThoughtsData))
        .catch(err => res.json(err))
    }


}
module.exports = thoughtsController;