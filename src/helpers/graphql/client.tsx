import {
	ApolloClient,
	InMemoryCache,
	createHttpLink,
	ApolloLink,
} from "@apollo/client";

import { setContext } from "@apollo/client/link/context";
import { onError } from "@apollo/client/link/error";

import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert, { AlertProps } from "@material-ui/lab/Alert";

import { useState } from "react";

import { typeDefs } from "./resolvers";
import Cookies from "js-cookie";

const httpLink = createHttpLink({
	uri: "https://amp-gql-api.herokuapp.com/graphql",
});

function Alert(props: AlertProps) {
	return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const errorLink = onError(({ graphQLErrors, networkError }) => {
	const [open, setOpen] = useState(true);

	const handleClose = (event?: React.SyntheticEvent, reason?: string) => {
		if (reason === "clickaway") {
			return;
		}

		setOpen(false);
	};
	if (graphQLErrors) {
		graphQLErrors.map(
			({ message }) => (
				<Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
					<Alert onClose={handleClose} severity="success">
						{message}
					</Alert>
				</Snackbar>
			)
			// toast.error(({ closeToast }) => <Box px="3">{message}</Box>)
		);
	}

	if (networkError) {
		// toast.error(({ closeToast }) => <Box px="3">Oops, Network error</Box>);
		<Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
			<Alert onClose={handleClose} severity="success">
				Oops, Network error
			</Alert>
		</Snackbar>;
	}
});

const authLink = setContext((_, { headers }) => {
	const token = Cookies.get("auth");
	return {
		headers: {
			...headers,
			authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNjA1OGFlNTdkZmFkZWIzNmVlYmExY2MyIiwiaXNfYWRtaW4iOnRydWUsImlhdCI6MTYxNjQyNDYyOCwiZXhwIjoxNjE5MDE2NjI4fQ.klm_D-5JSCrmVoFzNQRlF2EGG62UYaC1oFoLVL0UdNc`,
		},
	};
});

const link = ApolloLink.from([authLink, httpLink, errorLink]);

const cache = new InMemoryCache()

const client = new ApolloClient({
	link,
	typeDefs,
	cache,
});

export default client;
