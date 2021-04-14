const mongoose=require('mongoose');
const Schema = mongoose.Schema;
var profileSchema = new mongoose.Schema({
    profileid :{type:Number, required: true},
    name :{type:String, required: true},
    email:{type: String, required: true},
    mobileno:{type:Number, required: true},
    address:{type: String, required: true}
    
});

module.exports=mongoose.model('Profile', profileSchema);
