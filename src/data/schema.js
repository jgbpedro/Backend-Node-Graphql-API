import {
    GraphQLObjectType,
    GraphQLSchema
} from 'graphql';
// import queries and mutations from user folder
import userQueries from './user/queries';
import UserMutations from './user/mutations';
//import ProductQueries from './prducts/queries';
// import UserMutations from './user/mutations';
// creating GraphQL schema with parameters
// each parameter can only take one GraphQLObjectType
export default new GraphQLSchema({
    query: new GraphQLObjectType({
        name: 'Query',      // arbitrary name for library API
        fields: Object.assign({}, userQueries) // connect fields from queries.js
    }),
    /*query: new GraphQLObjectType({
        name: 'Product',      // arbitrary name for library API
        fields: Object.assign({}, ProductQueries) // connect fields from queries.js
    }),*/
    mutation: new GraphQLObjectType({
        name: 'User',
        fields: Object.assign({}, UserMutations)
    })
});

//ref: https://github.com/applification/graphql-express-mongodb/blob/master/src/index.js
