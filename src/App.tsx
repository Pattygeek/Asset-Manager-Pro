import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Suspense, lazy } from "react";

function App() {
	return (
		<div className="App">
			<Suspense fallback={<p>Loading...</p>}>
				<Router>
					<Switch></Switch>
				</Router>
			</Suspense>
		</div>
	);
}

export default App;
