var mongoose= require("mongoose");
var Schema=mongoose.Schema;

var productSchema=new Schema({

	name: String,
	price: String,
	qun: Number
});

module.exports = mongoose.model('products',productSchema);