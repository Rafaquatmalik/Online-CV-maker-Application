const mongoose = require('mongoose');
const researchexperienceSchema=mongoose.Schema({
    rexperienceid: {type:Number, required:true},
    projectname: {type:String, required:true},
    start_date: {type:String, required: true},
    end_date: String,
    researchfield: {type: String, required: true},
    profileid:{type:Number, required: true},
},{collection:'rexperiences'});
module.exports=mongoose.model('Research',researchexperienceSchema);