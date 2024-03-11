const { Schema, model } = require('mongoose')
const reactionSchema = require('./Reaction')
const { format_date } = require('../utils/helpers')

// schema for each thought
const thoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      maxlength: 280,
      minlength: 1
    },
    username: {
      type: String,
      required: true
    },
    // imported reaction schema
    reactions: [reactionSchema],
    createdAt: {
      type: Date,
      default: Date.now,
      get: format_date
    },
  },
  {
    toJSON: {
      virtuals:true,
      getters: true
    },
    id: false
  }
)

thoughtSchema
  .virtual('reactionCount')
  .get(function() {
    return this.reactions.length
  })

const Thought = model('thought', thoughtSchema)

module.exports = Thought