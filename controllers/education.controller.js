const db= require('../models');

exports.education_list = (req, res) => {
    db.Education.find().then(educations=>{
         
            res.render('education',{
                page: 'Education',
                menuId: 'education',
                educations:educations
            });        
    });    
}

exports.education_updateform=(req, res)=>{
    db.Education.find({educationid: req.params.id})
    .then(education=>{
        res.render('education_updateform',{
          page: 'Modify Education',
          menuId: 'modify education',
          education: education[0]
        }); 
    }); 
   }

   exports.education_update=async function(req, res, next) {
    console.log('Education :>> ', req.body);
    let result = await db.Education.updateOne({educationid : req.body.educationid},{
      $set:req.body
    });
    console.log(result);
    res.redirect('/education');
}

exports.education_delete = (req, res, next) => {
    let education = db.Education;
       education.findByIdAndDelete(req.params.id, (err) => {
        if (err) return next(err);
        res.redirect("/education");
    });
}

exports.education_createform =(req, res)=>{
    res.render('education_createform',{
        page: 'Add Education',
        menuId: 'add education'
    });
}
exports.education_create = (req, res, next)=>{
    let education = new db.Education({
        educationid: req.body.educationid,
        inst_name: req.body.inst_name,
        program: req.body.program,
        start_date: req.body.start_date,
        end_date: req.body.end_date,
        profileid: req.body.profileid
    });
    education.save((err)=>{
        if(err) return next(err);
        res.redirect('/education');
    });
}

// exports.product_create = (req, res) => {
//     let product = new Product({
//         name: req.body.name,
//         price: req.body.price
//     });
//     product.save((err) => {
//         if (err) return next(err);
//         res.redirect('/products/list');
//     });
// }
