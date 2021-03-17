import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "handsontable/dist/handsontable.full.css";
import { ApolloProvider } from "@apollo/client";
import client from "./helpers/graphql/client";
import { ToggleProvider } from "./helpers/contexts/toggleContext";
// import ContactsContext from "./helpers/contexts/contactsContext";

ReactDOM.render(
	<React.StrictMode>
		<ApolloProvider client={client}>
			<ToggleProvider>
				{/* <ContactsContext> */}
				<App />
				{/* </ContactsContext> */}
			</ToggleProvider>
		</ApolloProvider>
	</React.StrictMode>,
	document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
