const { Schema, Types } = require('mongoose')
const { format_date } = require('../utils/helpers')

//schema for each reaction
const reactionSchema = new Schema(
  {
    reactionId: {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId()
    },
    reactionBody: {
      type: String,
      required: true,
      maxLength: 280
    },
    username: {
      type: String,
      required: true
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: format_date
    }
  },
  {
    toJSON: {
      virtuals: true,
      getters: true
    },
    id: false,
  }
)


module.exports = reactionSchema