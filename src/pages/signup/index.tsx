import Box from "@material-ui/core/Box";
import makeStyles from "@material-ui/core/styles/makeStyles";
import withStyles from "@material-ui/core/styles/withStyles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import logo from "../../assets/logo/AMP-logo.png";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Link, useHistory } from "react-router-dom";
import { REGISTER } from "../../helpers/graphql/mutations";
import { useMutation } from "@apollo/client";
import CircularProgress from "@material-ui/core/CircularProgress";

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
	form: {
		margin: "0 auto",
		textAlign: "center",
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
		cursor: "pointer",
	},
	input: {
		margin: "0 auto 20px",
		width: "55%",
		backgroundColor: "white",
		"&:nth-child(3)": {
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
			"& valueset": {
				borderColor: "#109CF1",
			},
			"&:hover valueset": {
				borderColor: "#109CF1",
			},
			"&.Mui-focused valueset": {
				borderColor: "#109CF1",
			},
		},
	},
})(TextField);

const validationSchema = Yup.object().shape({
	firstName: Yup.string().required("This field is required"),
	lastName: Yup.string().required("This field is required"),
	email: Yup.string().email().required("This field is required"),
	password: Yup.string().required("This field is required"),
	confirmPassword: Yup.string()
		.required("This field is required")
		.oneOf([Yup.ref("password")], "Passwords do not match"),
	phone: Yup.string().required("This field is required"),
});

//custom style for the helpertext
const helperTextStyles = makeStyles((theme) => ({
	root: {
		margin: 0,
		paddingTop: 4,
		color: "black",
	},
	error: {
		"&.MuiFormHelperText-root.Mui-error": {
			color: "red",
			backgroundColor: "#EDF7FF",
		},
	},
}));

const Signup = () => {
	const classes = useStyles();

	const helperTextClass = helperTextStyles();

	const history = useHistory();

	//signup mutation
	const [default_user_registration, { loading }] = useMutation(REGISTER, {
		onCompleted({ default_user_registration }) {
			document.cookie = "x-auth=" + default_user_registration.token;
			history.push("/");
		},
		onError(err) {
			console.log(err);
			return null;
		},
	});

	const formik = useFormik({
		initialValues: {
			firstName: "",
			lastName: "",
			password: "",
			confirmPassword: "",
			email: "",
			phone: "",
		},
		validationSchema: validationSchema,
		onSubmit: (values) => {
			//alert(JSON.stringify(values, null, 2));

			default_user_registration({
				variables: {
					first_name: values.firstName,
					last_name: values.lastName,
					phone_number: values.phone,
					email: values.email,
					password: values.password,
				},
			});
		},
	});
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
					<form onSubmit={formik.handleSubmit} className={classes.form}>
						<CssTextField
							className={classes.input}
							label="First Name"
							variant="outlined"
							id="custom-css-outlined-input"
							value={formik.values.firstName}
							onChange={formik.handleChange}
							name="firstName"
							onBlur={formik.handleBlur}
							error={
								formik.touched.firstName && Boolean(formik.errors.firstName)
							}
							helperText={
								formik.errors.firstName &&
								formik.touched.firstName &&
								formik.errors.firstName
							}
							FormHelperTextProps={{
								classes: helperTextClass,
							}}
						/>
						<CssTextField
							className={classes.input}
							label="Last Name"
							variant="outlined"
							id="custom-css-outlined-input"
							value={formik.values.lastName}
							onChange={formik.handleChange}
							name="lastName"
							onBlur={formik.handleBlur}
							error={formik.touched.lastName && Boolean(formik.errors.lastName)}
							helperText={
								formik.errors.lastName &&
								formik.touched.lastName &&
								formik.errors.lastName
							}
							FormHelperTextProps={{
								classes: helperTextClass,
							}}
						/>
						<CssTextField
							className={classes.input}
							label="Password"
							variant="outlined"
							type="password"
							id="custom-css-outlined-input"
							value={formik.values.password}
							onChange={formik.handleChange}
							name="password"
							onBlur={formik.handleBlur}
							error={formik.touched.password && Boolean(formik.errors.password)}
							helperText={
								formik.errors.password &&
								formik.touched.password &&
								formik.errors.password
							}
							FormHelperTextProps={{
								classes: helperTextClass,
							}}
						/>
						<p className={classes.pass}>
							Password: Make sure it's at least 8 characters including a number
							and a lowercase letter
						</p>
						<CssTextField
							className={classes.input}
							label="Confirm Password"
							type="password"
							variant="outlined"
							id="custom-css-outlined-input"
							value={formik.values.confirmPassword}
							onChange={formik.handleChange}
							name="confirmPassword"
							onBlur={formik.handleBlur}
							error={
								formik.touched.confirmPassword &&
								Boolean(formik.errors.confirmPassword)
							}
							helperText={
								formik.errors.confirmPassword &&
								formik.touched.confirmPassword &&
								formik.errors.confirmPassword
							}
							FormHelperTextProps={{
								classes: helperTextClass,
							}}
						/>
						<CssTextField
							className={classes.input}
							label="Email"
							variant="outlined"
							id="custom-css-outlined-input"
							type="email"
							value={formik.values.email}
							onChange={formik.handleChange}
							name="email"
							onBlur={formik.handleBlur}
							error={formik.touched.email && Boolean(formik.errors.email)}
							helperText={
								formik.errors.email &&
								formik.touched.email &&
								formik.errors.email
							}
							FormHelperTextProps={{
								classes: helperTextClass,
							}}
						/>
						<CssTextField
							className={classes.input}
							label="Phone Number"
							variant="outlined"
							id="custom-css-outlined-input"
							value={formik.values.phone}
							onChange={formik.handleChange}
							name="phone"
							type="tel"
							onBlur={formik.handleBlur}
							error={formik.touched.phone && Boolean(formik.errors.phone)}
							helperText={
								formik.errors.phone &&
								formik.touched.phone &&
								formik.errors.phone
							}
							FormHelperTextProps={{
								classes: helperTextClass,
							}}
						/>
						<Button
							variant="contained"
							color="primary"
							type="submit"
							className={classes.button}
							disableElevation
						>
							{loading ? <CircularProgress /> : "Signup"}
						</Button>
					</form>

					<p className={classes.info}>
						By clicking the "Signup" button, you are creating an AMP account,
						and you agree to&nbsp;
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
