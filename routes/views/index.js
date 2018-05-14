const router = require('express').Router();
const controller = require('./views.controller');

/* blog list */
router.get('/list', controller.list);

/* blog detail */
router.get('/detail', controller.list);

/* blog write */
router.get('/write', controller.list);

/* blog edit */
router.get('/edit', controller.list);

module.exports = router;