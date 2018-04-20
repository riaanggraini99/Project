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
	seat 		: {
		type :String,
	},
	image		:String,
	daily_rate   	:String,
	weekend_rate	: 	 Number,
	weekly_rate		: 	 Number,
	monthly_rate	:	 Number,
	imagePath		: String,
});

module.exports =  mongoose.model('Car', CarSchema);
