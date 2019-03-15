var exp = require('express');
var mongoose = require('mongoose');
var productController = require('./controllers/product.controller');
var cors = require('cors');
var bodyParser = require('body-parser');

var app = exp();

mongoose.connect('mongodb://localhost:27017/productsCollection', {useNewUrlParser: true})
.then(() => console.log("Connected"))
.catch(err => console.log(err));

app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());

//router for product controller
app.post('/product',productController.addProduct);
app.get('/product',productController.getProducts);
app.get('/product/:id',productController.getProductById);
app.put('/product/:id',productController.updateProduct);
app.delete('/product/:id',productController.deleteProduct);

app.listen(3000);