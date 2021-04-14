var express = require('express');
var router = express.Router();
var profile_controller = require('../controllers/profile.controller');
var education_controller = require('../controllers/education.controller');
var work_controller = require('../controllers/work.controller');
var research_controller = require('../controllers/research.controller');
var reference_controller = require('../controllers/reference.controller');
var language_controller = require('../controllers/language.controller');
var activity_controller = require('../controllers/activities.controller.js');
const db = require('../models');


// Profile Routes
router.get('/', profile_controller.profile_list);
router.post('/updateform/:id', profile_controller.profile_updateform);
router.post('/:id/update', profile_controller.profile_update);
//Education Routes
router.get('/education', education_controller.education_list);
router.post('/education/updateform/:id', education_controller.education_updateform);
router.post('/education/:id/update', education_controller.education_update);
router.post('/education/:id/delete', education_controller.education_delete);
router.post('/education/createform', education_controller.education_createform);
router.post('/education/create', education_controller.education_create);

// Work Experience Routes
router.get('/work', work_controller.work_list);
router.post('/work/updateform/:id', work_controller.work_updateform);
router.post('/work/:id/update', work_controller.work_update);
router.post('/work/:id/delete', work_controller.work_delete);
router.post('/work/createform', work_controller.work_createform);
router.post('/work/create', work_controller.work_create);

// Research Experience Routes
router.get('/research', research_controller.research_list);
router.post('/research/updateform/:id', research_controller.research_updateform);
router.post('/research/:id/update', research_controller.research_update);
router.post('/research/:id/delete', research_controller.research_delete);
router.post('/research/createform', research_controller.research_createform);
router.post('/research/create', research_controller.research_create);

//References Routes
router.get('/reference', reference_controller.reference_list);
router.post('/reference/updateform/:id', reference_controller.reference_updateform);
router.post('/reference/:id/update', reference_controller.reference_update);
router.post('/reference/:id/delete', reference_controller.reference_delete);
router.post('/reference/createform', reference_controller.reference_createform);
router.post('/reference/create', reference_controller.reference_create);

//Language Routes
router.get('/language', language_controller.language_list);
router.post('/language/updateform/:id', language_controller.language_updateform);
router.post('/language/:id/update', language_controller.language_update);
router.post('/language/:id/delete', language_controller.language_delete);
router.post('/language/createform', language_controller.language_createform);
router.post('/language/create', language_controller.language_create);

//Extra Cuuricular Activity Routes
router.get('/activity', activity_controller.activity_list);
router.post('/activity/updateform/:id', activity_controller.activity_updateform);
router.post('/activity/:id/update', activity_controller.activity_update);
router.post('/activity/:id/delete', activity_controller.activity_delete);
router.post('/activity/createform', activity_controller.activity_createform);
router.post('/activity/create', activity_controller.activity_create);


router.get('/view',function (req, res) {
    db.Profile.find().then(profiles => {
        db.Education.find().then(educations=>{
            db.Work.find().then(wexperiences=> {
                db.Activity.find().then(activities=>{
                    db.Research.find().then(rexperiences=>{
                        db.Language.find().then(languages=>{
                            db.Reference.find().then(references=>{
                                res.render('index', {
                                    page: 'CURRICULUM VITAE',
                                    menuId: 'curriculum vitae',
                                    profiles: profiles,
                                    educations:educations,
                                    wexperiences: wexperiences,
                                    activities:activities,
                                    rexperiences:rexperiences,
                                    languages: languages,
                                    references:references
                                });
                            });
                        });
                    });
                });
            });
        });
      
       console.log(JSON.stringify(profiles, null, ' '));
      
    });
});
// router.get('/view', async function(){
//     db.Profile.aggregate([
//         {
//             $lookup:{
//                 from: 'educations',
//                 localField: 'profileid',
//                 foreignField: 'profileid',
//                 as: 'educations'
//             }
//         }
//     ])
//     .then(profiles=>{
//         console.log(JSON.stringify(profiles, null, ' '));
//         research_controller.render('index',{
//           title: 'CURRICULUM VITAE',
//           menuId: 'curriculum vitae',
//           profiles: profiles 
//         })
//     })

//     })
module.exports = router;