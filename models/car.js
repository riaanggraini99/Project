var mongoose 	=	 require('mongoose');

mongoose.connect('mongodb://localhost/cars');

var db 	=	 mongoose.connection;
var Schema = mongoose.Schema

mongoose.models = {};
mongoose.modelSchemas = {};

//car Schema
var CarSchema 	=  new Schema({
	name : {
		type 	: String,
		index	: true
	},
	type :	{
		type 	: String, 
		required: true, 
		
	},
	seat 		: String,
	price		: Number,
	image	 	: String
});

module.exports =  mongoose.model('Car', CarSchema);
