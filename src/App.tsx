import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
import { ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import theme from "./helpers/theme";
import Layout from './components/Layout';


const Login = lazy(() => import("./pages/login"));
const Signup = lazy(() => import("./pages/signup"));
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
							<Route path="/login" exact component={Login} />
							<Route path="/signup" exact component={Signup} />
							<Route path="/test" exact component={Test} />
							<Route path="/" component={Layout} />
						</Switch>
					</Router>
				</Suspense>
			</ThemeProvider>
		</div>
	);
}

export default App;
