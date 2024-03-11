const { Schema, model } = require('mongoose')

// schema for each user
const userSchema = new Schema(
  {
    username: {
      type: String,
      trim: true,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      validate: {
        validator: function(email) {
          return /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/.test(email)
        },
        message: email => `${email.value} is not a valid email`
      }
    },
    thoughts: [],
    friends: [],
  },
  {
    toJSON: {
      virtuals: true,
      getters: true
    },
  }
)

userSchema
  .virtual('friendCount')
  .get(function() {
    return this.friends.length
  })

const User = model('user', userSchema)

module.exports = User