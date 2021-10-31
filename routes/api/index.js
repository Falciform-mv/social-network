const router = require('express').Router();
const friendRoutes = require('./friend-routes');

router.use('/friends', friendRoutes);

module.exports = router;