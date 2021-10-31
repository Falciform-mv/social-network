const router = require('express').Router();

const {
  getAllFriend,
  getFriendById,
  createFriend,
  updateFriend,
  delteFriend,
  getAllFriends

} = require('../../controllers/friend-controller');

router
.route('/')
.get(getAllFriends)
.post(createFriend);

router
.route('/:id')
.get(getFriendById)
.put(updateFriend)
.delete(deleteFriend);

module.exports = router;