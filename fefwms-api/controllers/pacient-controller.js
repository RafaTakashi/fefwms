var mongoose = require('mongoose');
var pacientModel = require('../models/pacient-model');
var Pacient = mongoose.model('pacient');
var moment = require('moment');

pacientController = function() {

    /*
     * HTTP GET
     */
    get = function(req, res) {

        find = {};
        if (req.params.id)
            find._id = req.params.id;

        pacientModel.find(find, function(err, pacient) {
            if (err) return res.json(err);
            res.json(pacient);
        });

    };

    /*
     * HTTP POST
     */
    post = function(req, res) {

        pacient = new Pacient(req.body);

        pacient.memberSince = moment().format();

        pacient.save(function(err, pacient) {
            if (err) return res.json(err);
            res.json('Usuário -' + pacient.name + '- cadastrado!');
        });

    };

    /*
     * HTTP PUT
     */
    put = function(req, res) {

        pacientModel.update({
            _id: req.params.id
        }, req.body, function(err, pacient) {
            if (err) return res.json(err);
            res.json('Usuário atualizado!');
        });

    };

    /*
     * HTTP DELETE
     */
    del = function(req, res) {

        pacientModel.find({
            _id: req.params.id
        }).remove(function(err, pacient) {
            if (err) return res.json(err);
            res.json('Usuário removido!');
        });

    };

    delAll = function(req, res){
        pacientModel.find({

        }).remove(function(err, pacient){
            if(err) return res.json(err);
            res.json('Todos os usários removidos com sucesso')
        });
    }

    return {
        get: get,
        post: post,
        put: put,
        delete: del,
        delAll: delAll
    };

};

module.exports = pacientController();