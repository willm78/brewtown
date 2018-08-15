import ApolloClient from "apollo-boost";
import gql from "graphql-tag";

const client = new ApolloClient({
  uri: "https://fakerql.com/graphql"
});

export const getQuery = () => {
  return new Promise((resolve, reject) => {
    client
      .query({
        query: gql`
          {
            allProducts(count: 25) {
              id
              name
              price
            }

            User(id: "wk0z1j1tzj7xc0116is3ckdrx") {
              id
              firstName
              lastName
              email
              avatar
            }
          }
        `
      })
      .then(result => resolve(result))
      .catch(err => reject(err));
  });
};
