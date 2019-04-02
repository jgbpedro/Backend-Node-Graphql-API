import {
   GraphQLID,
   GraphQLNonNull
} from 'graphql';
import { ProductType, ProductModel } from './model';

const products = {
   type: ProductType,
   description: 'Represent the type of a user by id',
   resolve(root, params) {
      return ProductModel
         ..findById(params.id)
         .exec();  // return JSON
   }
};

const queries = {
   products,
};


export default queries;
