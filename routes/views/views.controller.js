var router = require('express').Router();

exports.list = (req, res, next) => {
    res.render('blogList', { title: 'Title', blogs: blogs });
};

module.exports = router;