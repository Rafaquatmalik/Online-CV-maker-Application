const db = require('../models');


//     exports.profile_update=function(req,res){
//         console.log(req.body);
//         db.Profile.findByIdAndUpdate(req.params.id, {$set: req.body}, function (err, profile) {
//             if (err) return next(err);
//             res.redirect('/');
//         });

// }
exports.profile_update=async function(req, res, next) {
    console.log('Profile :>> ', req.body);
    let result = await db.Profile.updateOne({profileid : req.body.profileid},{
      $set:req.body
    });
    console.log(result);
    res.redirect('/');
}



exports.profile_list = (req, res) => {
    db.Profile.find().then(profiles=>{
         
            res.render('profile',{
                page: 'Profile',
                menuId: 'profile',
                profiles:profiles
            });        
    });    
}


exports.profile_updateform=(req, res)=>{
 db.Profile.find({profileid: req.params.id})
 .then(profile=>{
     res.render('profile_updateform',{
       page: 'Modify Profile',
       menuId: 'modify profile',
       profile: profile[0]
     }); 
 }); 
}
