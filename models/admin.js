var mongoose 	=	 require('mongoose');

mongoose.connect('mongodb://localhost/cars');

var db 			=	 mongoose.connection;


//User Schema
var UserSchema 	=  mongoose.Schema({
	username : {
		type 	: String,
		index	: true
	},
	password :	{
		type 	: String, 
		required: true, 
		bcrypt  : true
	},
	email 		: String,
	name 		: String,

});

module.exports =  mongoose.model('User', UserSchema);
