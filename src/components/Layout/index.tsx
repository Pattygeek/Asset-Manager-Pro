import { Sidebar, Navbar } from "../../components";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";
import { ReactNode, useState } from "react";

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
			// overflowX: "hidden",
		},
		box: {
			width: "100%",
			// overflowX: "hidden",
		},
		main: {
			width: "100%",
			height: "calc(100% - 50px)",
			display: "flex",
			zIndex: -10,
			// overflowX: "hidden",
		},
	}));
	const classes = useStyles();
	return (
		<>
			<Box className={classes.container}>
				<Sidebar toggle={toggle} toggler={toggler} />
				<Box className={classes.box}>
					<Navbar />
					<Box bgcolor="secondary.main" className={classes.main}>
						{children}
					</Box>
				</Box>
			</Box>
		</>
	);
};
export default Layout;
