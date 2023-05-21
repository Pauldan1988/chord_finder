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
    uri: "/api/graphql",

})

const client = new ApolloClient({
    link: httpLink,
    cache: new InMemoryCache(),
    defaultOptions: defaultOptions,
})

export default client