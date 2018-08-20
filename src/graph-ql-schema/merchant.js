import rest from '../rest/restutils'

import {
GraphQLInt,
GraphQLBoolean,
GraphQLString,
GraphQLList,
GraphQLObjectType,
GraphQLNonNull,
GraphQLSchema,
} from 'graphql';

const MerchantType = new GraphQLObjectType({
  name: 'Merchant',
  description: 'Merchant details',
  fields : () => ({
    id : {
      type: GraphQLString // ,
      // resolve: merchant => merchant.id
    },
    email: {type: GraphQLString}, // same name as field in REST response, so resolver is not requested
    mobile: {type: GraphQLString}
  })
});

function fetchMerchantByURL(relativeURL) {
  return rest.fetchResponseByURL(relativeURL).then(json => {
    if(json) {
      return json.merchant
    }
  });
}

const merchant = {
  MerchantType,
  fetchMerchantByURL
}

export default merchant
