var mongoose = require('mongoose');
var pacientModal = require('../models/pacient-model');
var Pacient = mongoose.model('pacient');
var moment = require('moment');

rankingController = function() {

    /*
     * HTTP GET
     */
    get = function(req, res) {

        find = {};
        if (req.params.name)
            find.name = req.params.name;

        pacientModal.find(find, function(err, company) {
            if (err) return res.json(err);
            res.json(company);
        });

    };

    return {
        get: get,
    };

};

module.exports = rankingController();