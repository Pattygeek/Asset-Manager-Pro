import Box from "@material-ui/core/Box";
import makeStyles from "@material-ui/core/styles/makeStyles";
import withStyles from "@material-ui/core/styles/withStyles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import logo from "../../assets/logo/AMP-logo.png";

const useStyles = makeStyles(() => ({
	img: {
		width: "138px",
		height: "105px",
		margin: "0 auto",
	},
	text: {
		fontSize: "18px",
		lineHeight: "28px",
		margin: "0 auto",
	},
	info: {
		margin: "0 auto",
		width: "441px",
		textAlign: "center",
	},
	user: {
		margin: "0 auto",
		textAlign: "center",
	},
	input: {
		margin: "0 auto",
		width: "441px",
	},
	button: {
		margin: "0 auto",
		width: "441px",
		color: "white",
		textTransform: "capitalize",
		height: "56px",
	},
}));

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
				backgroundColor: "white",
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

const Signup = () => {
	const classes = useStyles();
	return (
		<>
			<Box bgcolor="#EDF7FF" height="100vh" width="100%">
				<Box
					width="50%"
					marginX="auto"
					border={1}
					display="flex"
					flexDirection="column"
					paddingY={6}
				>
					<img src={logo} className={classes.img} />
					<p className={classes.text}>Create a new account</p>
					<CssTextField
						className={classes.input}
						label="First Name"
						variant="outlined"
						id="custom-css-outlined-input"
					/>
					<CssTextField
						className={classes.input}
						label="Last Name"
						variant="outlined"
						id="custom-css-outlined-input"
					/>
					<CssTextField
						className={classes.input}
						label="Password"
						variant="outlined"
						id="custom-css-outlined-input"
					/>
					<CssTextField
						className={classes.input}
						label="Confirm Password"
						variant="outlined"
						id="custom-css-outlined-input"
					/>
					<CssTextField
						className={classes.input}
						label="Email"
						variant="outlined"
						id="custom-css-outlined-input"
					/>
					<CssTextField
						className={classes.input}
						label="Phone Number"
						variant="outlined"
						id="custom-css-outlined-input"
					/>
					<Button
						variant="contained"
						color="primary"
						className={classes.button}
					>
						Signup
					</Button>
					<p className={classes.info}>
						By clicking the "Signup" button, you are creating an AMP account,
						and you agree to <span>AMP's Terms of Use</span> and
						<span>Privacy Policy</span>.
					</p>
					<p className={classes.user}>
						Already a user?<span>Signin</span>
					</p>
				</Box>
			</Box>
		</>
	);
};
export default Signup;
