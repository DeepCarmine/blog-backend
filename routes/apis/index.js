const express = require('express');
const router = express.Router();
const blogs = require('./blogs');

router.use('/blogs', blogs);

module.exports = router;