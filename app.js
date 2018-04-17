var express           = require('express');
var path              = require('path');
var createError       = require('http-errors');
var express           = require('express');
var path              = require('path');
var cookieParser      = require('cookie-parser');
var logger            = require('morgan');
var bodyParser        = require('body-parser');
var session			  = require('express-session');
var passport		  = require('passport');
var localStrategy	  = require('passport-local').Strategy;
var multer			  = require('multer');
var flash 			  =	require('connect-flash');
var mongo			  =	require('mongodb');
var mongoose		  =	require('mongoose');
var util              = require('util');
var express           = require('express');
var expressValidator  = require('express-validator');
var swig              = require('swig');
var methodOverride    = require('method-override');
var favicon			  = require('serve-favicon')
var db 				  =	mongoose.connection;


// var routes 				= 	require('./routes/index');
var users				=	require('./routes/users');
var adminRoutes 		=	require('./routes/admin');
var addCar				=	require('./routes/car_add');
//var routeradmin			= 	require('./routes/admin_login');

var app = express();
// var admin = express();
// admin.use('/', adminRoutes);
// admin.use('/admin', adminRoutes);


var app = express();
app.use(methodOverride('_method'));
// view engine setup
var swig = new swig.Swig();
app.engine('html', swig.renderFile);
app.set('view engine', 'html');


app.use(multer({dest:__dirname+'/uploads/'}).any());

// uncomment after placing your favicon in /public
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//Handle EXpress Sessions
app.use(session({
	secret:'secret' ,
	saveUninitialized: true,
	resave: true
}));

//Paasport
app.use(passport.initialize());
app.use(passport.session());


///Validator
app.use(expressValidator({
	errorFormator: function(param,msg,value) {
		var namespace = param.split('.')
		, root = namespace.shift()
		, formParam = root;
		
		while(namespace.length) {
			formParam += '[' + namespace.shift() + ']';
		}
		
		return {
			param 	: formParam,
			msg 	: msg,
			value	: value
		};
	}
}));


app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


app.use(flash());
app.use(function(req,res,next) {
	res.locals.messages = require('express-messages')(req,res);
	next();
});

app.use('/', users);
app.use('/admin', adminRoutes);
app.use('/api/car', addCar);

app.get('*', function(req,res,next) {
	//local variable to hold user info
	res.locals.user = req.user ||  null;
	next();
});

// app.use('/', userRoute);
app.get('/test', function(req, res) {
	res.sendFile(__dirname + '/test.html')
})

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
