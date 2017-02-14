var config = require('../config');
var companyModel = require('../models/company-model');

loginController = function() {


    login = function(req, res) {

        console.log(req.body)

        var find = {
            email: req.body.email,
            password: req.body.password
        };

        companyModel.findOne(find, function(err, company) {
            if (err || !company) return res.status(403).json('Usuário Inválido');

            var resp = {
                company: company
            };

            res.json(resp);

        });

    };

    return {
        login: login
    };

};

module.exports = loginController();
