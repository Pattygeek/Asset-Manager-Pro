import Box from "@material-ui/core/Box";
import makeStyles from "@material-ui/core/styles/makeStyles";
import logo from "../../assets/logo/AMP-logo.png";
import { Link } from "react-router-dom";

const useStyles = makeStyles(() => ({
	img: {
		width: "138px",
		height: "105px",
		margin: "0 auto",
	},
	text: {
		fontSize: "16px",
		lineHeight: "28px",
		margin: "122px auto 12px",
		fontWeight: 500,
		color: "#6D6D6D",
	},
	span: {
		color: "#109CF1",
		fontSize: "16px",
		lineHeight: "28px",
		margin: "12px auto",
		fontWeight: 500,
		textAlign: "center",
	},
}));

const Logout = () => {
	const classes = useStyles();
	return (
		<>
			<Box bgcolor="#EDF7FF" height="100vh" width="100%">
				<Box
					width="50%"
					marginX="auto"
					display="flex"
					flexDirection="column"
					paddingY={6}
				>
					<img src={logo} className={classes.img} />
					<p className={classes.text}>You have successfully logout</p>
					<Link to="/login">
						<p className={classes.span}>Login again</p>
					</Link>
				</Box>
			</Box>
		</>
	);
};
export default Logout;
