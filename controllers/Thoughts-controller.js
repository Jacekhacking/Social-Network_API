const {Thoughts, User} = require('../models');

const thoughtsController = {
//get all thoughts 
getAllThoughts(req, res){
    Thoughts.find({})
    .populate({
        path: ''
    })
}


}