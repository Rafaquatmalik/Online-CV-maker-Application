const db = require('../models');

exports.activity_list=(req, res)=>{
    db.Activity.find().then(activities =>{
        res.render('activity',{
            page: 'Extra Curricular Activities',
            menuId: 'extra currilar activities',
            activities: activities
        })
    });
}

exports.activity_updateform=(req, res)=>{
    db.Activity.find({activityid: req.params.id})
    .then(activity=>{
        res.render('activity_updateform',{
          page: 'Modify Extra Curricular Activities',
          menuId: 'modify extra curricular activities',
          activity: activity[0]
        }); 
    }); 
   }

   exports.activity_update=async function(req, res, next) {
    console.log('Activity :>> ', req.body);
    let result = await db.Activity.updateOne({activityid : req.body.activityid},{
      $set:req.body
    });
    console.log(result);
    res.redirect('/activity');
}

exports.activity_delete = (req, res, next) => {
    let activity = db.Activity;
       activity.findByIdAndDelete(req.params.id, (err) => {
        if (err) return next(err);
        res.redirect("/activity");
    });
}
exports.activity_createform =(req, res)=>{
    res.render('activity_createform',{
        page: 'Add Extra Curricular Activities',
        menuId: 'add extra curricular activities'
    });
}

exports.activity_create = (req, res, next)=>{
    let activity = new db.Activity({
        activityid: req.body.activityid,
        activityname: req.body.activityname,
        profileid: req.body.profileid
    });
    activity.save((err)=>{
        if(err) return next(err);
        res.redirect('/activity');
    });
}