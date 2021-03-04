import Box from "@material-ui/core/Box";
import makeStyles from "@material-ui/core/styles/makeStyles";
import withStyles from "@material-ui/core/styles/withStyles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import CircularProgress from "@material-ui/core/CircularProgress";
import { useFormik } from "formik";
import * as Yup from "yup";
import logo from "../../assets/logo/AMP-logo.png";
import Alert from "@material-ui/lab/Alert";
import { useMutation } from "@apollo/client";
import { RESET_PASSWORD } from "../../helpers/graphql/mutations";

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
	password: Yup.string().required("This field is required"),
	confirmPassword: Yup.string()
		.required("This field is required")
		.oneOf(["password"], "Both passwords do not match"),
});

const Reset = () => {
	const classes = useStyles();

	const helperTextClass = helperTextStyles();

	//reset password mutation
	const [reset_password_request, { loading }] = useMutation(RESET_PASSWORD, {
		onCompleted({ reset_password_request }) {
			<Alert severity="success">{reset_password_request.message}</Alert>;
		},
		onError(err) {
			console.log(err);
			return null;
		},
	});

	const formik = useFormik({
		initialValues: {
			password: "",
			confirmPassword: "",
		},
		validationSchema: validationSchema,
		onSubmit: (values) => {
			//alert(JSON.stringify(values, null, 2));
			reset_password_request({
				variables: {
					new_password: values.password,
					confirm_password: values.confirmPassword,
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
					<p className={classes.text}>Enter your new password</p>
					<form onSubmit={formik.handleSubmit} className={classes.form}>
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
						<CssTextField
							className={classes.input}
							label="Confirm Password"
							variant="outlined"
							id="custom-css-outlined-input"
							type="password"
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
						<Button
							variant="contained"
							color="primary"
							className={classes.button}
							disableElevation
							type="submit"
						>
							{loading ? <CircularProgress /> : "Submit"}
						</Button>
					</form>
				</Box>
			</Box>
		</>
	);
};
export default Reset;
