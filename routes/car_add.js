var express 		=	require('express');
var router 			= 	express.Router();

var path			  =	 require('path');
var fs				= require('fs');
var formidable = require('formidable');
var readChunk = require('read-chunk');
fileType = require('file-type');
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
	var 	imagePath	= 	 req.body.imagePath;

	console.log('yyyyyyyyyyyyyyyyyyyyyyyyyy')
	


	
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
		imagePath	: imagePath,
	 
			
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
		imagePath	: imagePath,
			
		
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


/*router.post('/order', function (req, res, next) {
	var order = new Order({
		name 		: 	req.body.name,
		type 		: 	req.body.type,
		seat 		: 	req.body.seat,
		rental_fee  :	req.body.rental_fee,
		ktp			: 	req.body.ktp,
		start_date	: 	req.body.start_date,
		end_date	:	req.body.end_date,
		c_name		: req.body.c_name,
		c_email	: req.body.c_email,
		c_adress	: req.body.c_adress
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
   */

   //delete order
  router.delete('/order/:id', function (req, res, next) {
	Order.findOneAndRemove(req.params.id, function (err, car) {
	  
		  if(err){
			return next(err);
		  } else {
			return res.send("hahhah");
			console.log('hahah')
		  }
	   
	});
  });
  


  router.post('/order', function(req, res, next){
    var order = new Order();
    order.name 		=	req.body.name;
	order.type 		= 	req.body.type;
	order.seat 		= 	req.body.seat;
	order.rental_fee  =	req.body.rental_fee;
	order.ktp			= 	req.body.ktp;
	order.start_date	= 	req.body.start_date;
	order.end_date	=	req.body.end_date;
	order.c_name		= req.body.c_name;
	order.c_email	= req.body.c_email;
	order.c_adress	= req.body.c_adress;	
    order.save(function(err, insertedorder){
        if(err){
            console.log(err);
        }else{
            res.json(insertedorder);
        }   
    })
 });

//api for image upload

router.get('/upload', function (req, res) {
    // Don't bother about this :)
    var filesPath = path.join(__dirname, 'uploads/');
    fs.readdir(filesPath, function (err, files) {
        if (err) {
            console.log(err);
            return;
        }

        files.forEach(function (file) {
            fs.stat(filesPath + file, function (err, stats) {
                if (err) {
                    console.log(err);
                    return;
                }

                var createdAt = Date.parse(stats.ctime),
                    days = Math.round((Date.now() - createdAt) / (1000*60*60*24));

                if (days > 1) {
                    fs.unlink(filesPath + file);
                }
            });
        });
    });

    res.sendFile(path.join(__dirname, '/'));
});

/**
 * Upload photos route.
 */
router.post('/upload_photos', function (req, res) {
    var photos = [],
        form = new formidable.IncomingForm();

    // Tells formidable that there will be multiple files sent.
    form.multiples = true;
    // Upload directory for the images
    form.uploadDir = path.join(__dirname, 'uploads');

    // Invoked when a file has finished uploading.
    form.on('file', function (name, file) {
        // Allow only 3 files to be uploaded.
        if (photos.length === 3) {
            fs.unlink(file.path);
            return true;
        }

        var buffer = null,
            type = null,
            filename = '';

        buffer = readChunk.sync(file.path, 0, 262);
        type = fileType(buffer);

        // Check the file type, must be either png,jpg or jpeg
        if (type !== null && (type.ext === 'png' || type.ext === 'jpg' || type.ext === 'jpeg')) {
            // Assign new file name
            filename = Date.now() + '-' + file.name;

            // Move the file with the new file name
            fs.rename(file.path, path.join(__dirname, 'uploads/' + filename));

            // Add to the list of photos
            photos.push({
                status: true,
                filename: filename,
                type: type.ext,
                publicPath: 'uploads/' + filename
            });
        } else {
            photos.push({
                status: false,
                filename: file.name,
                message: 'Invalid file type'
            });
            fs.unlink(file.path);
        }
    });

    form.on('error', function(err) {
        console.log('Error occurred during processing - ' + err);
    });

    // Invoked when all the fields have been processed.
    form.on('end', function() {
        console.log('All the request fields have been processed.');
    });

    // Parse the incoming form fields.
    form.parse(req, function (err, fields, files) {
        res.status(200).json(photos);
    });
});




module.exports = router;
