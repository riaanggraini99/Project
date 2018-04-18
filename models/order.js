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
	c_name			:String,
	c_email			:String,
	c_adress		:String,
	start_date	    :String,
	end_date   		:String,

	
});

module.exports =  mongoose.model('Order', OrderSchema);
