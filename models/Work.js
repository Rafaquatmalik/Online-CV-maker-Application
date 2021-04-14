const mongoose = require('mongoose');
const workexperienceSchema = mongoose.Schema({
wexperienceid:{type:Number, required:true},
companyname:{type:String, required: true},
designation: {type: String, required: true},
start_date:{type:Date, required: true},
end_date: Date,
responsibilities: String,
profileid:{type:Number, required:true},
},{collection: 'wexperiences'});
module.exports=mongoose.model('Work',workexperienceSchema);