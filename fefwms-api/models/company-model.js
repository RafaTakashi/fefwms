var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var companySchema = new Schema({
    cnpj: String,
    name: String,
    address: {
        street: String,
        number: String,
        neighborhood: String,
        cep: String,
        city: String,
        state: String
    },
    category: String,
    rehab: Number,
    consultation: Number,
    phone: String,
    email: String,
    password: String
});

module.exports = mongoose.model('company', companySchema);