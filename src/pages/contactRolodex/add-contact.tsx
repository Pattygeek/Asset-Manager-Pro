import Box from "@material-ui/core/Box";
import Select from "@material-ui/core/Select";
import FormControl from "@material-ui/core/FormControl";
import FormHelperText from "@material-ui/core/FormHelperText";
import makeStyles from "@material-ui/core/styles/makeStyles";
import FilledInput from "@material-ui/core/FilledInput";
import Button from "@material-ui/core/Button";
import { useFormik } from "formik";
import * as Yup from "yup";

const useStyles = makeStyles(() => ({
	div: {
		display: "grid",
		gridTemplateColumns: "repeat(5, 1fr)",
		gap: "28px",
		margin: "0 auto",
	},
	label: {
		marginBottom: "2px",
		fontWeight: 500,
	},
	button: {
		color: "#fff",
		padding: "8px 36px",
	},
	form: {
		margin: "0 auto",
	},
	helperText: {
		color: "red",
		marginLeft: 0,
	},
}));

const validationSchema = Yup.object().shape({
	contact_email: Yup.string().email().required("This field is required"),
	contact_cell_phone: Yup.string().required("This field is required"),
	contact_office_phone: Yup.string().required("This field is required"),
	contact_fax_number: Yup.string().required("This field is required"),
	contact_company: Yup.string().required("This field is required"),
	contact_company_address: Yup.string().required("This field is required"),
	contact_title: Yup.string().required("This field is required"),
	contact_business_relation: Yup.string().required("This field is required"),
	contact_first_name: Yup.string().required("This field is required"),
	contact_last_name: Yup.string().required("This field is required"),
});

const AddContact = () => {
	const classes = useStyles();

	const formik = useFormik({
		initialValues: {
			contact_email: "",
			contact_cell_phone: "",
			contact_office_phone: "",
			contact_fax_number: "",
			contact_company: "",
			contact_title: "",
			contact_business_relation: "",
			contact_first_name: "",
			contact_last_name: "",
			contact_company_address: "",
		},
		validationSchema: validationSchema,
		onSubmit: (values) => {
			alert(JSON.stringify(values, null, 2));
			// default_user_login({
			// 	variables: {
			// 		email: values.email,
			// 		password: values.password,
			// 	},
			// });
		},
	});

	return (
		<>
			<form onSubmit={formik.handleSubmit} className={classes.form}>
				<Box marginX="auto" marginTop={10}>
					<div className={classes.div}>
						<Box>
							<p className={classes.label}>Business Relation</p>
							<FormControl
								// className={clsx(classes.margin, classes.textField)}
								variant="filled"
							>
								<Select
									native
									name="contact_business_relation"
									value={formik.values.contact_business_relation}
									onChange={formik.handleChange}
									// inputProps={{
									// 	name: "contact_business_relation",
									// }}

									placeholder="Label"
								>
									<option aria-label="None" value="" />
									<option value={10}>NEW ASSET</option>
									<option value={20}>NOT REVIEWED</option>
									<option value={30}>NEW LEAD</option>
									<option value={30}>RE-REVIEW</option>
									<option value={30}>NOT INTERESTED</option>
								</Select>
								<FormHelperText
									id="filled-weight-helper-text"
									className={classes.helperText}
								>
									{formik.errors.contact_business_relation &&
										formik.touched.contact_business_relation &&
										formik.errors.contact_business_relation}
								</FormHelperText>
							</FormControl>
						</Box>
						<Box>
							<p className={classes.label}>First Name</p>
							<FormControl
								// className={clsx(classes.margin, classes.textField)}
								variant="filled"
							>
								<FilledInput
									name="contact_first_name"
									value={formik.values.contact_first_name}
									onChange={formik.handleChange}
									placeholder="Label"
									aria-describedby="filled-weight-helper-text"
									inputProps={{
										"aria-label": "weight",
									}}
								/>
								<FormHelperText
									id="filled-weight-helper-text"
									className={classes.helperText}
								>
									{formik.errors.contact_first_name &&
										formik.touched.contact_first_name &&
										formik.errors.contact_first_name}
								</FormHelperText>
							</FormControl>
						</Box>
						<Box>
							<p className={classes.label}>Last Name</p>
							<FormControl
								// className={clsx(classes.margin, classes.textField)}
								variant="filled"
							>
								<FilledInput
									name="contact_last_name"
									value={formik.values.contact_last_name}
									onChange={formik.handleChange}
									placeholder="Label"
									aria-describedby="filled-weight-helper-text"
									inputProps={{
										"aria-label": "weight",
									}}
								/>
								<FormHelperText
									id="filled-weight-helper-text"
									className={classes.helperText}
								>
									{formik.errors.contact_last_name &&
										formik.touched.contact_last_name &&
										formik.errors.contact_last_name}
								</FormHelperText>
							</FormControl>
						</Box>
						<Box>
							<p className={classes.label}>Company</p>
							<FormControl
								// className={clsx(classes.margin, classes.textField)}
								variant="filled"
							>
								<FilledInput
									name="contact_company"
									value={formik.values.contact_company}
									onChange={formik.handleChange}
									placeholder="Label"
									aria-describedby="filled-weight-helper-text"
									inputProps={{
										"aria-label": "weight",
									}}
								/>
								<FormHelperText
									id="filled-weight-helper-text"
									className={classes.helperText}
								>
									{formik.errors.contact_company &&
										formik.touched.contact_company &&
										formik.errors.contact_company}
								</FormHelperText>
							</FormControl>
						</Box>
						<Box>
							<p className={classes.label}>Title</p>
							<FormControl
								// className={clsx(classes.margin, classes.textField)}
								variant="filled"
							>
								<FilledInput
									name="contact_title"
									value={formik.values.contact_title}
									onChange={formik.handleChange}
									placeholder="Label"
									aria-describedby="filled-weight-helper-text"
									inputProps={{
										"aria-label": "weight",
									}}
								/>
								<FormHelperText
									id="filled-weight-helper-text"
									className={classes.helperText}
								>
									{formik.errors.contact_title &&
										formik.touched.contact_title &&
										formik.errors.contact_title}
								</FormHelperText>
							</FormControl>
						</Box>
						<Box>
							<p className={classes.label}>Cell Phone</p>
							<FormControl
								// className={clsx(classes.margin, classes.textField)}
								variant="filled"
							>
								<FilledInput
									name="contact_cell_phone"
									value={formik.values.contact_cell_phone}
									onChange={formik.handleChange}
									placeholder="Label"
									aria-describedby="filled-weight-helper-text"
									inputProps={{
										"aria-label": "weight",
									}}
								/>
								<FormHelperText
									id="filled-weight-helper-text"
									className={classes.helperText}
								>
									{formik.errors.contact_cell_phone &&
										formik.touched.contact_cell_phone &&
										formik.errors.contact_cell_phone}
								</FormHelperText>
							</FormControl>
						</Box>
						<Box>
							<p className={classes.label}>Office</p>
							<FormControl
								// className={clsx(classes.margin, classes.textField)}
								variant="filled"
							>
								<FilledInput
									name="contact_office_phone"
									value={formik.values.contact_office_phone}
									onChange={formik.handleChange}
									placeholder="Label"
									aria-describedby="filled-weight-helper-text"
									inputProps={{
										"aria-label": "weight",
									}}
								/>
								<FormHelperText
									id="filled-weight-helper-text"
									className={classes.helperText}
								>
									{formik.errors.contact_office_phone &&
										formik.touched.contact_office_phone &&
										formik.errors.contact_office_phone}
								</FormHelperText>
							</FormControl>
						</Box>
						<Box>
							<p className={classes.label}>Fax</p>
							<FormControl
								// className={clsx(classes.margin, classes.textField)}
								variant="filled"
							>
								<FilledInput
									name="contact_fax_number"
									value={formik.values.contact_fax_number}
									onChange={formik.handleChange}
									placeholder="Label"
									aria-describedby="filled-weight-helper-text"
									inputProps={{
										"aria-label": "weight",
									}}
								/>
								<FormHelperText
									id="filled-weight-helper-text"
									className={classes.helperText}
								>
									{formik.errors.contact_fax_number &&
										formik.touched.contact_fax_number &&
										formik.errors.contact_fax_number}
								</FormHelperText>
							</FormControl>
						</Box>
						<Box>
							<p className={classes.label}>Email</p>
							<FormControl
								// className={clsx(classes.margin, classes.textField)}
								variant="filled"
							>
								<FilledInput
									name="contact_email"
									value={formik.values.contact_email}
									onChange={formik.handleChange}
									type="email"
									placeholder="Label"
									aria-describedby="filled-weight-helper-text"
									inputProps={{
										"aria-label": "weight",
									}}
								/>
								<FormHelperText
									id="filled-weight-helper-text"
									className={classes.helperText}
								>
									{formik.errors.contact_email &&
										formik.touched.contact_email &&
										formik.errors.contact_email}
								</FormHelperText>
							</FormControl>
						</Box>
						<Box>
							<p className={classes.label}>Business Address</p>
							<FormControl
								// className={clsx(classes.margin, classes.textField)}
								variant="filled"
							>
								<FilledInput
									name="contact_company_address"
									value={formik.values.contact_company_address}
									onChange={formik.handleChange}
									placeholder="Label"
									aria-describedby="filled-weight-helper-text"
									inputProps={{
										"aria-label": "weight",
									}}
								/>
								<FormHelperText
									id="filled-weight-helper-text"
									className={classes.helperText}
								>
									{formik.errors.contact_company_address &&
										formik.touched.contact_company_address &&
										formik.errors.contact_company_address}
								</FormHelperText>
							</FormControl>
						</Box>
					</div>
					<Box display="flex" justifyContent="flex-end" marginTop={4}>
						<Button
							color="primary"
							variant="contained"
							className={classes.button}
							type="submit"
						>
							Add Contact
						</Button>
					</Box>
				</Box>
			</form>
		</>
	);
};
export default AddContact;
