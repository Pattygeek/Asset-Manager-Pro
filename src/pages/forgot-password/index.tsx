import Box from "@material-ui/core/Box";
import makeStyles from "@material-ui/core/styles/makeStyles";
import withStyles from "@material-ui/core/styles/withStyles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { useFormik } from "formik";
import * as Yup from "yup";
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
	form: {
		margin: "0 auto",
		textAlign: "center",
		width: "55%",
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
	helperText: {
		error: {
			backgroundColor: "transparent",
		},
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
});
const Forgot = () => {
	const classes = useStyles();

	const helperTextClass = helperTextStyles();

	const formik = useFormik({
		initialValues: {
			email: "",
		},
		validationSchema: validationSchema,
		onSubmit: (values) => {
			alert(JSON.stringify(values, null, 2));
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
					<p className={classes.text}>
						Enter your email to retrieve your password
					</p>
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
						<Button
							variant="contained"
							color="primary"
							className={classes.button}
							disableElevation
							type="submit"
						>
							Submit
						</Button>
					</form>
				</Box>
			</Box>
		</>
	);
};
export default Forgot;
