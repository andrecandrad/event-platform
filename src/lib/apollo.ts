import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
    uri: 'https://api-sa-east-1.graphcms.com/v2/cl4rssvnu1ioo01zc3q1f2af9/master',
    cache: new InMemoryCache(),
})