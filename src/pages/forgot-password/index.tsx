import Box from "@material-ui/core/Box";
import makeStyles from "@material-ui/core/styles/makeStyles";
import withStyles from "@material-ui/core/styles/withStyles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { useFormik } from "formik";
import { useMutation } from "@apollo/client";
import { FORGOT_PASSWORD } from "../../helpers/graphql/mutations";
import * as Yup from "yup";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert, { AlertProps } from "@material-ui/lab/Alert";
import CheckIcon from "@material-ui/icons/Check";
import CircularProgress from "@material-ui/core/CircularProgress";
import logo from "../../assets/logo/AMP-logo.png";
import React, { useState } from "react";

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

function Alert(props: AlertProps) {
	return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const Forgot = () => {
	const classes = useStyles();

	const helperTextClass = helperTextStyles();

	const [open, setOpen] = useState(false);

	const handleClose = (event?: React.SyntheticEvent, reason?: string) => {
		if (reason === "clickaway") {
			return;
		}

		setOpen(false);
	};

	//forgot password mutation
	const [forgot_password_request, { loading }] = useMutation(FORGOT_PASSWORD, {
		onCompleted({ forgot_password_request }) {
            setOpen(true);
			<Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
				<Alert onClose={handleClose} severity="success">
					{forgot_password_request.message}
				</Alert>
			</Snackbar>;
		},
		onError(err) {
			console.log(err);
			return null;
		},
	});

	const formik = useFormik({
		initialValues: {
			email: "",
		},
		validationSchema: validationSchema,
		onSubmit: (values) => {
			//alert(JSON.stringify(values, null, 2));
			forgot_password_request({
				variables: {
					email: values.email,
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
							{loading ? <CircularProgress /> : "Submit"}
						</Button>
					</form>
				</Box>
			</Box>
		</>
	);
};
export default Forgot;
