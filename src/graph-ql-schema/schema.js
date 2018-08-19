import merchant from './merchant'
import rest from '../rest/restutils'
import appconfig from '../config/appconfig'
const request = require('request');


import {
GraphQLInt,
GraphQLBoolean,
GraphQLString,
GraphQLList,
GraphQLObjectType,
GraphQLNonNull,
GraphQLSchema,
GraphQLID,
} from 'graphql';

const QueryType = new GraphQLObjectType({
  name: 'Query',
  description: 'The root of all... queries',
  fields: () => ({
    merchant: {
      type: merchant.MerchantType,
      args: {
        id: {type: new GraphQLNonNull(GraphQLID)},
      },
      resolve: (root, args) => rest.fetchResponseByURL(`merchant/${args.id}/`)
      // resolve: function (_, args) {
      //   // return request(`http://localhost:8080/merchant/2/`)
      //   //   .then( function (body) {
      //   //       json = JSON.parse(body);
      //   //       return json;
      //   //   },
      //   //   function (error) {
      //   //     console.log(error);
      //   //   });
      //
      //   return request(`http://localhost:8080/merchant/2/`, { json: true }, (err, res, body) => {
      //       if (err) { return console.log(err); }
      //       console.log(res.body);
      //       return res.body;
      //     });
      //
      // }
    },
  }),
});


const schema = new GraphQLSchema({
    query: QueryType,
});

export default schema;
