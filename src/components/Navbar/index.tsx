import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles((theme) => ({
	nav: {
		height: "50px",
		borderBottom: "1px solid #EBEFF2",
		display: "flex",
		width: "100%",
	},
}));

const Navbar = () => {
	const classes = useStyles();
	return (
		<>
			<Box className={classes.nav}>
				<p>Navbar</p>
			</Box>
		</>
	);
};
export default Navbar;
