var express 		=	require('express');
var router 			= 	express.Router();
var multer			= 	require('multer');
var Car 			= 	require('../models/car');
var Order			=	require('../models/order')


router.get('/', function(req, res){
	Car.find({}, function(err, cars){
		cars.title = 'title'
		res.json(cars)

		cars: cars

	});
  });
 

//POST Cars Lists
router.post('/',function(req,res,next) {

	console.log(req.body)
	//Get Form Values
	var name 			=	 req.body.name;
	var type 			=	 req.body.type;
	var seat 		  	=	 req.body.seat;
	var daily_rate   	=	 req.body.daily_rate;
	var weekend_rate	= 	 req.body.weekend_rate;
	var weekly_rate		= 	 req.body.weekly_rate;
	var monthly_rate	=	 req.body.monthly_rate;

	console.log('yyyyyyyyyyyyyyyyyyyyyyyyyy')
	


	//Check for IMage Field
	// if(req.files.length) {

	// 	console.log('uploading');

	// 	var imageOriginalName  = 	req.files[0].originalname;
	// 	var imageName 		  =		req.files[0].originalname
	// 	var imageMime 		  =		req.files[0].mimeType;
	// 	var imagePath 		  =		req.files[0].path;
	// 	var imageSize 		  =		req.files[0].size;

	// } else {
	// 	//Set a Default Image
	// 	var image 		  = 	'noImage.png';
	// } 

	// //form Validation using Express-Validator
	// req.checkBody( 'name','Name Field is Required').notEmpty();
	// req.checkBody( 'type','Type Field is Required').notEmpty();
	// req.checkBody('seat','seat not Valid').notEmpty();
	// req.checkBody('price','price  is not valid').notEmpty()
	//  console.log('22222222')

	// //Check for Errors
	var errors = req.validationErrors();

	console.log('333333333333')

	if(errors) {
		res.render('m_car',{
		errors 		: 	errors,
		name 		: 	name,
		type 		: 	type,
     	seat 		: 	seat,
		daily_rate   	:	 daily_rate,
		weekend_rate	: 	 weekend_rate,
		weekly_rate		: 	 weekly_rate,
		monthly_rate	:	 monthly_rate,
	 
			
		});
	} else {
		//CReating a MOdal for New cars
		console.log('ooooo')
		var newCar	= new Car({
      	name 		: 	name,
		type 		: 	type,
      	seat 		: 	seat,
		daily_rate  :	 daily_rate,
		weekend_rate: 	 weekend_rate,
		weekly_rate	: 	 weekly_rate,
		monthly_rate:	 monthly_rate,
			
		
		});

		//Create Cars
		console.log( newCar );		

			
			//Create New car
			newCar.save(newCar,function(err,car) {
				if(err)  throw err;
				console.log(car);
				jsoncar = JSON.stringify({car: 'car'});
				console.log(jsoncar);
				res.send(jsoncar);
			});

			//Success Message
			//req.flash('success','The cars added');


			//res.location('/api/car');
			//res.redirect('/admin/car');
			
			
	}

});


router.delete('/car/:id', function (req, res, next) {
  Car.findOneAndRemove(req.params.id, function (err, car) {
    
        if(err){
          return next(err);
        } else {
		  return res.send("hahhah");
		  console.log('hahah')
        }
     
  });
});




//get data book

router.get('/book/:id', function(req, res, next) {
	Car.findById(req.params.id, function (err, data) {
    data:data
        if(err){
          return next(err);
        } else {
		  return res.send(data);
		  console.log('hahah')
		  console.log(data)
        }
     
  });
});

// router.get('/book/:id', function(req, res) {
// 	// res.send('Just a test');
// 	 var query = {id: req.params.id};
// 	 Car.findById(query, function(err, data){
// 		 console.log('hahahahhahahah')
// 		 data: data
// 			 console.log(data)
// 			 res.send('success')
			 		 
// 	 });
// }); 

		 
/*router.post('/order',function(req,res,next) {

	console.log(req.body)
	//Get Form Values
	var name 			=	 req.body.name;
	var type 			=	 req.body.type;
	var seat 		  	=	 req.body.seat;
	var rental_fee   	=	 req.body.daily_rate;
	var ktp				= 	 req.body.ktp;
	var start_date		= 	 req.body.start_date;
	var end_date		=	 req.body.end_date;

	console.log('yyyyyyyyyyyyyyyyyyyyyyyyyy')
	
	var errors = req.validationErrors();

	console.log('333333333333')

	if(errors) {
		res.render('/',{
		errors 		: 	errors,
		name 		: 	name,
		type 		: 	type,
     	seat 		: 	seat,
		rental_fee  :	rental_fee,
		ktp			: 	ktp,
		start_date	: 	start_date,
		end_date	:	end_date,
	 
			
		});
		console.log(errors)
	} else {
		//CReating a MOdal for New cars
		console.log('ooooo')
		var NewOrder	= new Order({
			name 		: 	name,
			type 		: 	type,
			seat 		: 	seat,
			rental_fee  :	rental_fee,
			ktp			: 	ktp,
			start_date	: 	start_date,
			end_date	:	end_date,
		 
			// image		 	:   imageName
		
		});

		//Create Cars
		console.log(err);
		console.log( newOrder );		

			
			//Create New car
			newOrder.save(newOrder,function(err,order) {
				if(err)  throw err;
				console.log(order);
				console.log(err)
				jsonorder = JSON.stringify({order: 'order'});
				console.log(jsonorder);
				res.send(jsonorder);
			});

	}

});

*/


router.post('/order', function (req, res, next) {
	var order = new Order({
		name 		: 	req.body.name,
		type 		: 	req.body.type,
		seat 		: 	req.body.seat,
		rental_fee  :	req.body.rental_fee,
		ktp			: 	req.body.ktp,
		start_date	: 	req.body.start_date,
		end_date	:	req.body.end_date,
	});
  
	order.save( function (err) {
	  if (err) return next(err);
	});
  console.log(order)
  });

  //get order data

  router.get('/order', function(req, res){
	Order.find({}, function(err, orders){
		orders.title = 'title'
		res.json(orders)

		orders: orders

	});
  });


module.exports = router;
