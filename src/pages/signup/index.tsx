import Box from "@material-ui/core/Box";
import makeStyles from "@material-ui/core/styles/makeStyles";
import withStyles from "@material-ui/core/styles/withStyles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import logo from "../../assets/logo/AMP-logo.png";
import { Formik, Form } from "formik";
import * as Yup from "yup";
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
		margin: "12px auto",
		fontWeight: 500,
	},
	info: {
		margin: "9px auto",
		width: "54%",
		textAlign: "center",
		fontSize: "12px",
		fontWeight: 500,
	},
	user: {
		margin: "0 auto",
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
		margin: "0 auto",
		width: "55%",
		color: "white",
		textTransform: "capitalize",
		height: "56px",
		fontSize: "16px",
	},
	pass: {
		color: "#6D6D6D",
		textAlign: "center",
		fontSize: "12px",
		width: "50%",
		margin: "6px auto",
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
			<Box bgcolor="#EDF7FF" minHeight="100vh" width="100%">
				<Box
					width="50%"
					marginX="auto"
					display="flex"
					flexDirection="column"
					paddingY={6}
				>
					<img src={logo} className={classes.img} />
					<p className={classes.text}>Create a new account</p>
					<Formik
						initialValues={{
							firstName: "",
							lastName: "",
							password: "",
							confirmPassword: "",
							email: "",
							phone: "",
						}}
						onSubmit={() => {}}
						validationSchema={Yup.object().shape({
							firstName: Yup.string().required("This field is required"),
							lastName: Yup.string().required("This field is required"),
							email: Yup.string().email().required("This field is required"),
							password: Yup.string().required("This field is required"),
							confirmPassword: Yup.string().oneOf(
								[Yup.ref("password")],
								"Passwords do not match"
							),
							phone: Yup.string().required("This field is required"),
						})}
					>
						{(props) => {
							const {
								values,
								touched,
								errors,
								dirty,
								isSubmitting,
								handleChange,
								handleBlur,
								handleSubmit,
								handleReset,
							} = props;
							return (
								<form onSubmit={handleSubmit}>
									<CssTextField
										className={classes.input}
										label="First Name"
										variant="outlined"
										id="custom-css-outlined-input"
										value={values.firstName}
										onChange={handleChange}
										onBlur={handleBlur}
										error={
											touched.firstName && Boolean(errors.firstName)
										}
										helperText={
											errors.firstName && touched.firstName && errors.firstName
										}
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
									<p className={classes.pass}>
										Password: Make sure it's at least 8 characters including a
										number and a lowercase letter
									</p>
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
										type="submit"
										className={classes.button}
										disableElevation
									>
										Signup
									</Button>
								</form>
							);
						}}
					</Formik>
					<p className={classes.info}>
						By clicking the "Signup" button, you are creating an AMP account,
						and you agree to{" "}
						<span className={classes.span}>AMP's Terms of Use</span> and&nbsp;
						<span className={classes.span}>Privacy Policy</span>.
					</p>
					<Link to="/login">
						<p className={classes.user}>
							Already a user?&nbsp;<span className={classes.span}>Signin</span>
						</p>
					</Link>
				</Box>
			</Box>
		</>
	);
};
export default Signup;
