var express = require('express');
var router = express.Router();
var controller = require('../controllers/pacient-controller');

router.get('/', controller.get);

router.get('/:id', controller.get);

router.post('/', controller.post);

router.put('/:id', controller.put);

router.delete('/:id', controller.delete);

router.delete('/', controller.delAll);

module.exports = router;