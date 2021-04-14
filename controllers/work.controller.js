const db= require('../models');

exports.work_list = (req, res) => {
    db.Work.find().then(wexperiences=>{
         
            res.render('work',{
                page: 'Work Experience',
                menuId: 'work experience',
                wexperiences: wexperiences
            });        
    });    
}

exports.work_updateform=(req, res)=>{
    db.Work.find({wexperienceid: req.params.id})
    .then(work=>{
        res.render('work_updateform',{
          page: 'Modify Work Experience',
          menuId: 'modify work experience',
          work: work[0]
        }); 
    }); 
   }

   exports.work_update=async function(req, res, next) {
    console.log('Work :>> ', req.body);
    let result = await db.Work.updateOne({wexperienceid : req.body.wexperienceid},{
      $set:req.body
    });
    console.log(result);
    res.redirect('/work');
}

exports.work_delete = (req, res, next) => {
    let work = db.Work;
       work.findByIdAndDelete(req.params.id, (err) => {
        if (err) return next(err);
        res.redirect("/work");
    });
}

exports.work_createform =(req, res)=>{
    res.render('work_createform',{
        page: 'Add Work Experience',
        menuId: 'add work experience'
    });
}
exports.work_create = (req, res, next)=>{
    let work = new db.Work({
        wexperienceid: req.body.wexperienceid,
        companyname: req.body.companyname,
        designation: req.body.designation,
        start_date: req.body.start_date,
        end_date: req.body.end_date,
        responsibilities: req.body.responsibilities,
        profileid: req.body.profileid
    });
    work.save((err)=>{
        if(err) return next(err);
        res.redirect('/work');
    });
}

