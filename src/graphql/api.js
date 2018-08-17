import ApolloClient from "apollo-boost";
import gql from "graphql-tag";
import { normalize } from "normalizr";

import { hopArraySchema } from "./schema";

const client = new ApolloClient({
  uri: "http://10.0.75.1:4000"
});

const query = gql`
  {
    hops(sortby: NEW) {
      id
      name
      amount
      time
      type
    }
  }
`;

export const getQuery = () => {
  return new Promise((resolve, reject) => {
    client
      .query({
        query
      })
      .then(result => {
        normalizedData = normalize(result.data, hopArraySchema);
        resolve({ result, normalizedData });
      })
      .catch(err => reject(err));
  });
};
