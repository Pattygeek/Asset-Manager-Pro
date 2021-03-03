import Box from "@material-ui/core/Box";
import makeStyles from "@material-ui/core/styles/makeStyles";
import withStyles from "@material-ui/core/styles/withStyles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import logo from "../../assets/logo/AMP-logo.png";


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
		margin: "68px auto 12px",
		fontWeight: 500,
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


const Forgot = () => {
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
					<p className={classes.text}>
						Enter your email to retrieve your password
					</p>
					<CssTextField
						className={classes.input}
						label="Email"
						variant="outlined"
						id="custom-css-outlined-input"
					/>
					<Button
						variant="contained"
						color="primary"
						className={classes.button}
						disableElevation
					>
						Submit
					</Button>
				</Box>
			</Box>
		</>
	);
};
export default Forgot;
