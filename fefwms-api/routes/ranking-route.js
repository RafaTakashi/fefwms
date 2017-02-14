var express = require('express');
var router = express.Router();
var controller = require('../controllers/ranking-controller');

router.get('/', controller.get);

router.get('/:id', controller.get);

module.exports = router;