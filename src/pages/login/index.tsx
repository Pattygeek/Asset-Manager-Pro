import Box from "@material-ui/core/Box";
import makeStyles from "@material-ui/core/styles/makeStyles";
import withStyles from "@material-ui/core/styles/withStyles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import logo from "../../assets/logo/AMP-logo.png";
import { Link } from "react-router-dom";

const CssTextField = withStyles({
	root: {
		"& label.Mui-focused": {
			color: "#109CF1",
		},
		"& .MuiInput-underline:after": {
			borderBottomColor: "#109CF1",
		},
		"& .MuiOutlinedInput-root": {
			"& fieldset": {
				borderColor: "#109CF1",
				// backgroundColor: "white",
			},
			"&:hover fieldset": {
				borderColor: "#109CF1",
			},
			"&.Mui-focused fieldset": {
				borderColor: "#109CF1",
			},
		},
	},
})(TextField);

const useStyles = makeStyles(() => ({
	img: {
		width: "138px",
		height: "105px",
		margin: "0 auto",
	},
	text: {
		fontSize: "16px",
		lineHeight: "28px",
		margin: "12px auto",
		fontWeight: 500,
	},
	user: {
		margin: "18px auto 0",
		textAlign: "center",
		fontSize: "16px",
		color: "#353535",
		fontWeight: 500,
	},

	span: {
		color: "#109CF1",
	},
	input: {
		margin: "0 auto 20px",
		width: "55%",
		backgroundColor: "white",
		"&:nth-child(5)": {
			margin: "0 auto",
		},
	},
	button: {
		margin: "0 auto 4px",
		width: "55%",
		color: "white",
		textTransform: "capitalize",
		height: "56px",
		fontSize: "16px",
	},
}));

const Login = () => {
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
					<p className={classes.text}>Login</p>
					<CssTextField
						className={classes.input}
						label="Email"
						variant="outlined"
						id="custom-css-outlined-input"
					/>
					<CssTextField
						className={classes.input}
						label="Password"
						variant="outlined"
						id="custom-css-outlined-input"
						type="password"
					/>
					<Button
						variant="contained"
						color="primary"
						className={classes.button}
						disableElevation
					>
						Login
					</Button>
					<Link to="/forgot-password">
						<p className={classes.user}>
							<span className={classes.span}>Forgot your password?</span>
						</p>
					</Link>
					<Link to="/signup">
						<p className={classes.user}>
							Not a user?&nbsp;
							<span className={classes.span}>Register for a new account</span>
						</p>
					</Link>
				</Box>
			</Box>
		</>
	);
};
export default Login;
