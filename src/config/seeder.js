'use strict';
const mongoose = require("mongoose");
const bcrypt = require('bcrypt-nodejs')
mongoose.connect("mongodb://127.0.0.1:27017/user_auth_demo");


const Schema = mongoose.Schema;

/*
*
* User SCHEMA
*
*/
const userSchema = new Schema({    
    username: {
        type: String,
        unique: true,
        required: true
    },
    displayName: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});

const UserModel = mongoose.model('User', userSchema);

const seedUser = async (ctx, next)=> { 
	const { username, displayName, password } = {"username":"jgbpedro","displayName":"Guilherme","password": bcrypt.hashSync("123456", bcrypt.genSaltSync(10))};

	const user = await UserModel.findOne({ username });
	   if (user) {
	      ctx.error = errorBuilder.badRequest('Usuario existe.');
	      await next();
	   } else {
      const user = new UserModel({
         username,
         displayName,
         password
      });
      console.log(user);
      await user.save();
   }
};

/*
*
* Product SCHEMA
*
*/

const productSchema = new Schema({
    productName: {
        type: String,
        unique: true,
        required: true
    },
});


const ProductModel = mongoose.model('Product', productSchema);

const seedProducts = async (ctx, next)=> { 
	const products = [
		{productName : "Celular"}, 
		{productName : "Tablet"}, 
		{productName : "Computador"}, 
		{productName : "Televisão"}, 
		{productName : "Micro system"}, 
	];

	products.forEach(async function(obj){
	  const product = new ProductModel(obj);
	  await product.save();
	});	
      
      
};

const seed = ()=> {
	seedUser();
	seedProducts();
}

seed();
console.log('Data is seeded successfully');