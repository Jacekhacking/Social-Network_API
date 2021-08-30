const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');
const reactionSchema = require('./Reaction');


const ThoughtsSchema = new Schema({
    thoughtText: {
        type: String,
        required: true,
        minLength: 1,
        maxLength: 280
    },
    createdAt: {
        type: Date,
        default: Date.now,
        get: createdAtVal => dateFormat(createdAtVal)
    },
    username: {
        type: String,
        required: true
    },
    reactions: [reactionSchema]
})

ThoughtsSchema.virtual('reactionCount').get(function(){
    return this.reactions.length
});

const Thoughts = model('Thoughts', ThoughtsSchema);

module.exports = Thoughts;