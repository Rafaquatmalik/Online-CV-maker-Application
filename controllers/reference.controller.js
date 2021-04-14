const db = require('../models');

exports.reference_list=(req, res)=>{
    db.Reference.find().then(references=>{
        res.render('reference',{
            page: 'References',
            menuId: 'references',
            references: references
        })
    });
}

exports.reference_updateform=(req, res)=>{
    db.Reference.find({referenceid: req.params.id})
    .then(reference=>{
        res.render('reference_updateform',{
          page: 'Modify Reference',
          menuId: 'modify reference',
          reference: reference[0]
        }); 
    }); 
   }

   exports.reference_update=async function(req, res, next) {
    console.log('Reference :>> ', req.body);
    let result = await db.Reference.updateOne({referenceid : req.body.referenceid},{
      $set:req.body
    });
    console.log(result);
    res.redirect('/reference');
}

exports.reference_delete = (req, res, next) => {
    let reference = db.Reference;
       reference.findByIdAndDelete(req.params.id, (err) => {
        if (err) return next(err);
        res.redirect("/reference");
    });
}

exports.reference_createform =(req, res)=>{
    res.render('reference_createform',{
        page: 'Add Reference',
        menuId: 'add reference'
    });
}

exports.reference_create = (req, res, next)=>{
    let reference = new db.Reference({
        referenceid: req.body.referenceid,
        name: req.body.name,
        designation: req.body.designation,
        company: req.body.company,
        contactno: req.body.contactno,
        profileid: req.body.profileid
    });
    reference.save((err)=>{
        if(err) return next(err);
        res.redirect('/reference');
    });
}