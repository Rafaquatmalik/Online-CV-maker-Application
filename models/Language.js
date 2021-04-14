const mongoose = require('mongoose');
const languageSchema = mongoose.Schema({
    languageid: {type: Number, required: true},
    languagedetails:{type: String, required: true},
    profileid:{type: Number, required: true}
});

module.exports=mongoose.model('Language', languageSchema);