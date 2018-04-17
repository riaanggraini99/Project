var express = require('express');
var car_crud = require('./car_add');
var router = express.Router();
var Car 			= 	require('../models/car');



//GET home page. 
router.get('/', function(req, res, next) {
  res.render('index_admin', { title: 'Dashboard' });
}); 

router.get('/car', function(req, res, next) {
  // connect to database, get find{} car
  Car.find({}, function(err, cars){    
    res.render('car_admin', { title: 'car', cars:cars});
  });
  });

router.get('/m_car', function(req, res, next) {
   res.render('m_car', { title: 'm_car' });
});
  
router.get('/user_admin', function(req, res, next){
  res.render('user_admin', { title: 'user_admin' });
});


router.get('/add_user', function(req, res, next){
  res.render('add_user', { title: 'add_user' });
});


//admin login

/*router.get('/admin', ensureAuthenticated, function(req, res, next) {
  res.render('index_admin', { title: 'Dashboard' });
});

function ensureAuthenticated(req,res,next) {
	if(req.isAuthenticated()) {
		return next();
	}
	req.flash('error','You have to Login First.');
	res.redirect('/admin/login_admin');
}

router.get('admin/login_admin', function(req, res, next) {
  res.render('login_admin',{
      //'title': 'Login'
  });
 });

*/


module.exports = router;



