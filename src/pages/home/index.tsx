import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";

//components
import { Sidebar, Navbar } from "../../components";

const useStyles = makeStyles((theme) => ({
	container: {
		border: "1px solid black",
		height: "100vh",
		display: "flex",
	},
	box: {
		width: "100%",
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
					<p>Home</p>
				</Box>
			</Box>
		</>
	);
};
export default Home;
