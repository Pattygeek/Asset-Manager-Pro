import { Sidebar, Navbar } from "../../components";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";
import { ReactNode, useState, useCallback } from "react";
import { useToggle } from "../../helpers/contexts/toggleContext";
import { Route, Switch, useLocation } from "react-router-dom";
import { Suspense, lazy } from "react";

const Contact = lazy(() => import("../../pages/contactRolodex"));
const ManageUsers = lazy(() => import("../../pages/manageUsers"));
const Search = lazy(() => import("../../pages/search"));
const UploadData = lazy(() => import("../../pages/uploadData"));
const Reporting = lazy(() => import("../../pages/reporting"));
const Formulas = lazy(() => import("../../pages/formulas"));
const Home = lazy(() => import("../../pages/home"));

const Layout = () => {
	const location = useLocation();
	console.log(location.pathname);
	const { toggle, handleToggle } = useToggle();

	const useStyles = makeStyles((theme) => ({
		container: {
			height: "100vh",
			display: "flex",
			position: "relative",
			width: "100%",
			overflowX: "auto",
		},
		box: {
			width: toggle ? "calc(100% - 256px)" : "100%",
			// width: "100%",
			// marginLeft: "0px",
			// overflowX: "hidden",
		},
		main: {
			width: "100%",
			// width: toggle ? "calc(100% - 0px)" : "100%",
			// width: "inherit",
			minHeight: "calc(100% - 50px)",
			display: "flex",
			zIndex: -10,
			// overflowX: "hidden",
		},
		boxClass: {
			height: "100%",
			width: toggle ? "80px" : "256px",
			backgroundColor: theme.palette.primary.main,
			color: theme.palette.background.default,
			position: "absolute",
			top: 0,
			zIndex: +20,
			display: "none",
		},
		logo: {
			fontWeight: "bold",
			color: "#109CF1",
			margin: "auto 48px auto 0px",
			fontSize: "28px",

			"&:hover": {
				boxClass: { display: "block" },
			},
		},
	}));
	const classes = useStyles();

	const [show, setShow] = useState(false);
	console.log(show);
	const handleLeave = () => {
		setShow(false);
	};

	const handleEnter = useCallback(() => {
		setShow(true);
	}, []);

	let title;
	//switch for page title
	switch (location.pathname) {
		case "/":
			title = "Home";
			break;
		case "/upload-data":
			title = "Upload Data";
			break;
		case "/search":
			title = "Search";
			break;
		case "/reporting":
			title = "Reporting";
			break;
		case "/contact-rolodex":
			title = "Contact Rolodex";
			break;
		case "/manage-users":
			title = "Manage Users";
			break;
		case "/formulas":
			title = "Formulas";
			break;
		default:
			title = "Home";
			break;
	}
	return (
		<>
			<Box className="container">
				<Sidebar
					toggle={toggle}
					toggler={handleToggle}
					handleEnter={handleEnter}
					// boxClass={classes.boxClass}
				/>
				<Box className={classes.box}>
					<Navbar
						handleEnter={handleEnter}
						handleLeave={handleLeave}
						// logo={classes.logo}
						toggle={toggle}
						pageTitle={title}
					/>
					<Box bgcolor="secondary.main" className={classes.main}>
						<Switch>
							<Suspense fallback={null}>
								<Route path="/" exact component={Home} />
								<Route path="/contact-rolodex" component={Contact} />
								<Route path="/manage-users" component={ManageUsers} />
								<Route path="/search" component={Search} />
								<Route path="/upload-data" component={UploadData} />
								<Route path="/reporting" component={Reporting} />
								<Route path="/formulas" component={Formulas} />
							</Suspense>
						</Switch>
						{/* {children} */}
					</Box>
				</Box>
			</Box>
		</>
	);
};
export default Layout;
