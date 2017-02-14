var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var pacientSchema = new Schema({
    cod: String,
    name: String,
    rg: String,
    cpf: String,
    age: String,
    bloodType: String,
    dependency: String,
    rehab: Boolean,
    address: {
        street: String,
        number: String,
        neighborhood: String,
        cep: String,
        city: String,
        state: String
    },
    consultation: [{
        treatmentType: String,
        ong: String,
        data: String,
        notes: String
    }]
});




module.exports = mongoose.model('pacient', pacientSchema);