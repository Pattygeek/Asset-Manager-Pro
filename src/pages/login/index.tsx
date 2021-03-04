import Box from "@material-ui/core/Box";
import makeStyles from "@material-ui/core/styles/makeStyles";
import withStyles from "@material-ui/core/styles/withStyles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import logo from "../../assets/logo/AMP-logo.png";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Link, useHistory } from "react-router-dom";
import { useLazyQuery } from "@apollo/client";
import { LOGIN } from "../../helpers/graphql/queries";
import CircularProgress from "@material-ui/core/CircularProgress";

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
	error: {
		margin: "0 auto 20px",
		width: "55%",
		color: "#B00020",
		padding: "12px 0",
		backgroundColor: "#fff1f1",
		textAlign: "center",
		fontWeight: 500,
		fontSize: "16px",
	},
	input: {
		margin: "0 auto 20px",
		width: "100%",
		backgroundColor: "white",
		"&:nth-child(5)": {
			margin: "0 auto",
		},
	},
	form: {
		margin: "0 auto",
		textAlign: "center",
		width: "55%",
	},
	button: {
		margin: "0 auto 4px",
		width: "100%",
		color: "white",
		textTransform: "capitalize",
		height: "56px",
		fontSize: "16px",
	},
}));

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

const validationSchema = Yup.object().shape({
	email: Yup.string().email().required("This field is required"),
	password: Yup.string().required("This field is required"),
});

const Login = () => {
	const classes = useStyles();

	const helperTextClass = helperTextStyles();

	const history = useHistory();

	//signup mutation
	const [default_user_login, { loading, error, data }] = useLazyQuery(LOGIN, {
		onCompleted() {
			document.cookie = "x-auth=" + data.default_user_login.token;
			history.push("/");
		},
		onError(err) {
			console.log(err);
			return null;
		},
	});

	// console.log(error?.errors[0].message);

	const formik = useFormik({
		initialValues: {
			password: "",
			email: "",
		},
		validationSchema: validationSchema,
		onSubmit: (values) => {
			//alert(JSON.stringify(values, null, 2));
			default_user_login({
				variables: {
					email: values.email,
					password: values.password,
				},
			});
		},
	});
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
					{/* {error && (
						<Box className={classes.error} border={1} borderColor="#B00020">
							{error.errors[0].message}
						</Box>
					)} */}
					<form onSubmit={formik.handleSubmit} className={classes.form}>
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
							label="Password"
							variant="outlined"
							id="custom-css-outlined-input"
							type="password"
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
						<Button
							variant="contained"
							color="primary"
							className={classes.button}
							disableElevation
							type="submit"
						>
							{loading ? <CircularProgress /> : "Login"}
						</Button>
					</form>
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
