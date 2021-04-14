const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let educationSchema= mongoose.Schema({
educationid: {type: Number, required: true},
inst_name: {type: String, required: true},
program: {type:String, required: true},
start_date:{type: Date, required: true},
end_date: {type: Date},
profileid: {type: Number, required: true}
});

module.exports=mongoose.model('Education', educationSchema);
