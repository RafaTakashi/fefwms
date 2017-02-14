var mongoose = require('mongoose');
var companyModel = require('../models/company-model');
var Company = mongoose.model('company');
var moment = require('moment');

companyController = function () {
    /*
     * HTTP GET
     */
    get = function (req, res) {

        find = {};
        if (req.params.id)
            find._id = req.params.id;

        companyModel.find(find, function (err, company) {
            if (err) return res.json(err);
            console.log(company.consultation);
            res.json(company);
        });

    };

    /*
     * HTTP POST
     */
    post = function (req, res) {

        company = new Company(req.body);

        company.memberSince = moment().format();

        company.save(function (err, company) {
            if (err) return res.json(err);
            res.json(company);
        });

    };

    /*
     * HTTP PUT
     */
    put = function (req, res) {

        if (req.body.rehab) {

            find = {
                _id: req.params.id
            };

            companyModel.findOne(find, function (err, ong) {
                console.log(ong);
                ong.rehab += 1;
                companyModel.update({
                    _id: req.params.id
                }, ong, function (err, company) {
                    if (err) return res.json(err);
                    return res.json('Usuário atualizado!');
                });
            })
        }

    };

    /*
     * HTTP DELETE
     */
    del = function (req, res) {

        companyModel.find({
            _id: req.params.id
        }).remove(function (err, company) {
            if (err) return res.json(err);
            res.json('Usuário removido!');
        });

    };

    delAll = function (req,res){
        companyModel.find({
            
        }).remove(function(err, company){
            if(err) return res.json(err);
            res.json('Todos as instituições removidas com sucesso');
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

module.exports = companyController();