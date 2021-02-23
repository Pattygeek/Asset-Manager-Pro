import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
import { ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import theme from "./helpers/theme";

const Home = lazy(() => import("./pages/home"));
const Login = lazy(() => import("./pages/login"));
const Signup = lazy(() => import("./pages/signup"));
const Contact = lazy(() => import("./pages/contactRolodex"));
const ManageUsers = lazy(() => import("./pages/manageUsers"));
const Search = lazy(() => import("./pages/search"));
const UploadData = lazy(() => import("./pages/uploadData"));
const Reporting = lazy(() => import("./pages/reporting"));
const Formulas = lazy(() => import("./pages/formulas"));
const Test = lazy(() => import("./pages/test"));

function App() {
	return (
		<div>
			<ThemeProvider theme={theme}>
				{/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
				<CssBaseline />
				<Suspense fallback={<p>Loading...</p>}>
					<Router>
						<Switch>
							<Route path="/" exact component={Home} />
							<Route path="/login" exact component={Login} />
							<Route path="/signup" exact component={Signup} />
							<Route path="/contact-rolodex" exact component={Contact} />
							<Route path="/manage-users" exact component={ManageUsers} />
							<Route path="/search" exact component={Search} />
							<Route path="/upload-data" exact component={UploadData} />
							<Route path="/reporting" exact component={Reporting} />
							<Route path="/formulas" exact component={Formulas} />
							<Route path="/test" exact component={Test} />
						</Switch>
					</Router>
				</Suspense>
			</ThemeProvider>
		</div>
	);
}

export default App;
