'use strict';
import mongoose from 'mongoose';
import {
   GraphQLObjectType,
   GraphQLNonNull,
   GraphQLString,
   GraphQLID
} from 'graphql';
const Schema = mongoose.Schema;
// set up a mongoose model
const productSchema = new Schema({
    productName: {
        type: String,
        unique: true,
        required: true
    },
});


export const ProductModel = mongoose.model('Product', productSchema);

export const ProductType = new GraphQLObjectType({
   name: "product",
   fields: {
      _id: {
         type: new GraphQLNonNull(GraphQLID)
      },
      productName:{
         type: GraphQLString
      }
   }
});