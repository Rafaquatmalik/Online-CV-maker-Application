const db = require('../models');

exports.language_list=(req, res)=>{
    db.Language.find().then(languages=>{
        res.render('language',{
            page: 'Languages',
            menuId: 'languages',
            languages: languages
        })
    });
}

exports.language_updateform=(req, res)=>{
    db.Language.find({languageid: req.params.id})
    .then(language=>{
        res.render('language_updateform',{
          page: 'Modify Languages',
          menuId: 'modify languages',
          language: language[0]
        }); 
    }); 
   }

   exports.language_update=async function(req, res, next) {
    console.log('Language :>> ', req.body);
    let result = await db.Language.updateOne({languageid : req.body.languageid},{
      $set:req.body
    });
    console.log(result);
    res.redirect('/language');
}

exports.language_delete = (req, res, next) => {
    let language = db.Language;
       language.findByIdAndDelete(req.params.id, (err) => {
        if (err) return next(err);
        res.redirect("/language");
    });
}

exports.language_createform =(req, res)=>{
    res.render('language_createform',{
        page: 'Add Languages',
        menuId: 'add Languages'
    });
}

exports.language_create = (req, res, next)=>{
    let language = new db.Language({
        languageid: req.body.languageid,
        languagedetails: req.body.languagedetails,
        profileid: req.body.profileid
    });
    language.save((err)=>{
        if(err) return next(err);
        res.redirect('/language');
    });
}