const mongoose= require('mongoose');
const referenceSchema= mongoose.Schema({
referenceid: {type: Number, required:true},
name: {type: String, required: true},
designation: {type: String, required: true},
company:{type: String, required: true},
contactno:{type:Number,required: true},
profileid:{type:Number, required: true}
});
module.exports=mongoose.model('Reference', referenceSchema);