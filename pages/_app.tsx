import "../styles/globals.css";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  HttpLink,
  from,
} from "@apollo/client";
import { onError } from "@apollo/client/link/error";
import Home from ".";

const errorLink = onError(({ graphqlErrors }: any) => {
  if (graphqlErrors) {
    graphqlErrors.map(({ message }: any) => {
      alert(`Graphql error ${message}`);
    });
  }
});

const link = from([
  errorLink,
  new HttpLink({ uri: "https://analytics-api.herokuapp.com/analytics" }),
]);

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: link,
});

function MyApp() {
  return <ApolloProvider client={client}>
    <Home />
  </ApolloProvider>
}

export default MyApp;
