var mongoose 	=	 require('mongoose');

mongoose.connect('mongodb://localhost/cars');

var db 			=	 mongoose.connection;
var Schema		= 	 mongoose.Schema;
mongoose.models = {};
mongoose.modelSchemas = {};

//User Schema
var UserSchema 	=  new Schema({
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
