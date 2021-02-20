import {
	ApolloClient,
	InMemoryCache,
	createHttpLink,
	ApolloLink,
} from "@apollo/client";

import { setContext } from "@apollo/client/link/context";
import { onError } from "@apollo/client/link/error";

import Alert from "@material-ui/lab/Alert";

const httpLink = createHttpLink({
	uri: "https://amp-gql-api.herokuapp.com/graphql",
});

const errorLink = onError(({ graphQLErrors, networkError }) => {
	if (graphQLErrors) {
		graphQLErrors.map(
			({ message }) => (
				<Alert severity="error">{message}</Alert>
			)
			// toast.error(({ closeToast }) => <Box px="3">{message}</Box>)
		);
	}

	if (networkError) {
        // toast.error(({ closeToast }) => <Box px="3">Oops, Network error</Box>);
        <Alert severity="error">Oops, Network error</Alert>;
	}
});

const authLink = setContext((_, { headers }) => {
	// const token = Cookies.get("x-auth");
	return {
		headers: {
			...headers,
			authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNjAxNTU1YzJiMjM5NmM4MTY4ODdmYWZmIiwiaWF0IjoxNjEyNTkzNTM3LCJleHAiOjE2MTUxODU1Mzd9.dCWuxQgaZVgABKqK7HlC4YOUODIB2Ice5VqRwRVzcRU`,
		},
	};
});

const link = ApolloLink.from([authLink, httpLink]);

const client = new ApolloClient({
	link: link,
	cache: new InMemoryCache(),
});

export default client;
