const { Friend } = require('../models');

const friendController = {
  // funcs go here
  getAllFriends(req, res) {
    Friend.find({})
    .then(dbFriendData => res.json(dbFriendData))
    .catch(err => {
      console.log(err);
      res.status(400).json(err);
    });
  },

  getFriendById({ params }, res) {
    Friend.findOne({ _id: params.id })
    .then(dbFriendData => {
      if (!dbFriendData) {
        res.status(404).json({ message: 'no friend found' });
        return;
      }
      res.json(dbFriendData);
    })
    .catch(err => {
      console.log(err);
      res.status(400).json(err);
    });
  },

  createFriend({ body }, res) {
    Friend.create(body)
    .then(dbFriendData => res.json(dbFriendData))
    .catch(err => res.status(400).json(err));
  },

  updateFriend({ params, body }, res) {
    Friend.findOneAndUpdate({ _id: params.id }, body, { new: true })
    .then(dbFriendData => {
      if (!dbFriendData) {
        res.status(404).json({ message: 'no friend with this id' });
        return;
      }
      res.json(dbFriendData);
    })
    .catch(err => res.status(400).json(err));
  },

  deleteFriend({ params }, res) {
    Friend.findOneAndDelete({ _id: params.id })
    .then(dbFriendData => {
      if (!dbFriendData) {
        res.status(404).json({ message: 'no friend with this id' });
        return;
      }
      res.json(dbFriendData);
    })
    .catch(err => res.status(400).json(err));
  }
  

};


module.exports = friendController;