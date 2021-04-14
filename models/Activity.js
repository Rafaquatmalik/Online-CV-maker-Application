const mongoose = require('mongoose');
let activitySchema=mongoose.Schema({
activityid: {type: Number, required: true},
activityname: {type: String, required: true},
profileid: {type: Number, required: true}
});

module.exports=mongoose.model('Activity', activitySchema);
