var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
    res.send('<html><head><title>API - FEF WMS</title></head><body><h1>API - FEF WMS</h1></body></html>');
});

module.exports = router;
