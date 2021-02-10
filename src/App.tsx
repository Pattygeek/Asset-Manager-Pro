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

function App() {
	return (
		<div className="App">
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
					</Switch>
				</Router>
			</Suspense>
		</div>
	);
}

export default App;
