var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var companySchema = new Schema({
    typeAddiction: String,
    treatment: String,
    causedProblem: String
});

module.exports = mongoose.model('customer', companySchema);