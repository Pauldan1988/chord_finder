import { ApolloClient, InMemoryCache, createHttpLink } from "@apollo/client";
import type { DefaultOptions } from "@apollo/client";

const defaultOptions: DefaultOptions = {
    watchQuery: {
        fetchPolicy: "no-cache",
        errorPolicy: "ignore",
    },
    query: {
        fetchPolicy: "no-cache",
        errorPolicy: "all",
    },
}

const httpLink = createHttpLink({
    uri: "http://localhost:4000/graphql",
})