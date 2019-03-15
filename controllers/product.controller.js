var productModel=require('../models/product.model');
let productController={};

productController.addProduct= function(req,res){
	console.log("REQ BODYYY ==========>" ,req.body);
	var product=new productModel(req.body);

	product.save(function(err,savedProduct)
	{
		res.send(savedProduct);
		console.log(savedProduct);
	})
}

productController.getProducts = function(req,res){
	productModel.find({},function(err,foundProducts)
	{
		res.status(200).send(foundProducts);
	})
}

productController.getProductById=function(req,res){

	var productid = req.params.id;
	console.log(productid);
	productModel.find({_id: productid},function(err,foundProduct)
	{
		console.log(foundProduct);
		res.send(foundProduct);
	})
}

productController.updateProduct = function(req,res){

	 var pid = req.params.id;
	 productModel.findOneAndUpdate({_id:pid},req.body,{upsert:true},function(err,updatedProduct)
	 {
	 	console.log(updatedProduct);
	 	res.send(updatedProduct);

	 })
}

productController.deleteProduct = function(req,res){

	 var pid = req.params.id;
	 productModel.deleteOne({_id: pid}, function(err,deletedProduct)
	 {
	 	console.log(deletedProduct);
	 	res.send(deletedProduct);

	 })
}

module.exports = productController;