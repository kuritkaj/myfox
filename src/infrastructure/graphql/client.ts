import { ApolloClient, InMemoryCache, HttpLink, ApolloLink } from "@apollo/client";
import { ErrorLink, onError } from "@apollo/client/link/error";
import { GRAPHQL_URL, API_KEY } from "../utils/env";

const http = new HttpLink({
  uri: GRAPHQL_URL,
  headers: { "X-Api-Key": API_KEY },
});

const errorLink = new ErrorLink(
  ({ error, operation }) => {
    console.error(error, operation);
  }
)

export const apollo = new ApolloClient({
  link: ApolloLink.from([errorLink, http]),
  cache: new InMemoryCache({
    typePolicies: {
      Query: { fields: { listCalendars: { keyArgs: ["where", "orderBy"] } } },
    },
  }),
});
