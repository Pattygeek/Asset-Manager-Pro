import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";

//components
import { Sidebar, Navbar } from "../../components";

const useStyles = makeStyles((theme) => ({
	container: {
		height: "100vh",
		display: "flex",
	},
	box: {
		width: "100%",
	},
	main: {
		width: "100%",
		height: "calc(100% - 50px)",
	},
}));

const Home = () => {
	const classes = useStyles();

	return (
		<>
			<Box className={classes.container}>
				<Sidebar />
				<Box className={classes.box}>
					<Navbar />
					<Box bgcolor="secondary.main" className={classes.main}></Box>
				</Box>
			</Box>
		</>
	);
};
export default Home;
