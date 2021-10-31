const { Schema, model } = require('mongoose');

const FriendSchema = new Schema({
  friendName: {
    type: String
  },
  createdBy: {
    type: String
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  ranking: {
    type: String
  }
});

const Friend = model('Friend', FriendSchema);

module.exports = Friend;