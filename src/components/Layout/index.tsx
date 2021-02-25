import { Sidebar, Navbar } from "../../components";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";
import { ReactNode, useState, useCallback } from "react";

interface LayoutProps {
	children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
	const [toggle, setToggle] = useState<boolean>(false);

	const toggler = () => {
		setToggle(!toggle);
	};

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
			height: "calc(100% - 50px)",
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
	return (
		<>
			<Box className="container">
				<Sidebar
					toggle={toggle}
					toggler={toggler}
					handleEnter={handleEnter}
					// boxClass={classes.boxClass}
				/>
				<Box className={classes.box}>
					<Navbar
						handleEnter={handleEnter}
						handleLeave={handleLeave}
						// logo={classes.logo}
						toggle={toggle}
					/>
					<Box bgcolor="secondary.main" className={classes.main}>
						{children}
					</Box>
				</Box>
			</Box>
		</>
	);
};
export default Layout;
