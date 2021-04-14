const db = require('../models');

exports.research_list=(req, res)=>{
    db.Research.find().then(rexperiences=>{
            res.render('research',{
                page: 'Research Experience',
                menuId:'research experience',
                rexperiences: rexperiences
            });
    });
}
exports.research_updateform=(req, res)=>{
    db.Research.find({rexperienceid: req.params.id})
    .then(research=>{
        res.render('research_updateform',{
          page: 'Modify Research Experience',
          menuId: 'modify research experience',
          research: research[0]
        }); 
    }); 
   }

   exports.research_update=async function(req, res, next) {
    console.log('Research :>> ', req.body);
    let result = await db.Research.updateOne({rexperienceid : req.body.rexperienceid},{
      $set:req.body
    });
    console.log(result);
    res.redirect('/research');
}

exports.research_delete = (req, res, next) => {
    let research = db.Research;
       research.findByIdAndDelete(req.params.id, (err) => {
        if (err) return next(err);
        res.redirect("/research");
    });
}

exports.research_createform =(req, res)=>{
    res.render('research_createform',{
        page: 'Add Research Experience',
        menuId: 'add research experience'
    });
}

exports.research_create = (req, res, next)=>{
    let research = new db.Research({
        rexperienceid: req.body.rexperienceid,
        projectname: req.body.projectname,
        start_date: req.body.start_date,
        end_date: req.body.end_date,
        researchfield: req.body.researchfield,
        profileid: req.body.profileid
    });
    research.save((err)=>{
        if(err) return next(err);
        res.redirect('/research');
    });
}