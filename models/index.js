const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost/cvsDb",{useNewUrlParser:true,useUnifiedTopology: true, useFindAndModify: false})
.then(()=>{
  console.log("Connected to the database");
})
.catch(err =>{
  console.log("Cannot connect to the database");
  process.exit();
});
module.exports={
    'Profile': require('./Profile'),
    'Education': require('./Education'),
    'Language': require('./Language'),
    'Work' : require('./Work'),
    'Research' : require('./Research'),
    'Activity' : require('./Activity'),
    'Reference' : require('./Reference')
}