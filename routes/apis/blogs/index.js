const express = require('express');
const router = express.Router();
const controller = require('./blogs.controller');

/* blog list */
router.get('/', controller.list);

/* new blog */
router.post('/', controller.newBlog);

/* edit blog */
router.put('/:id', controller.editBlog);

/* blog detail */
router.get('/detail/:id', controller.detail);

/* get comments */
router.get('/:id/comments/:id', controller.getComments);

/* new comments */
router.post('/:id/comments/:id', controller.newComments);

/* edit comments */
router.put('/:id/comments/:id', controller.editComments);

/* delete comments */
router.delete('/:id/comments/:id', controller.deleteComments);

module.exports = router;