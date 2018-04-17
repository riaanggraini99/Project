var mongoose 	=	 require('mongoose');

mongoose.connect('mongodb://localhost/cars');

var db 	=	 mongoose.connection;
var Schema = mongoose.Schema

mongoose.models = {};
mongoose.modelSchemas = {};

//car Schema
var OrderSchema 	=  new Schema({
	name : {
		type 	: String,
		index	: true
	},
	type :	{
		type 	: String, 
		required: true, 
		
	},
	seat 		: {
		type :String,
	},
	rental_fee		:Number,
	ktp            	:String,
	start_date	    :Number,
	end_date   		:Number,
	
});

module.exports =  mongoose.model('Order', OrderSchema);
