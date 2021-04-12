import Dialog from "@material-ui/core/Dialog";
import Box from "@material-ui/core/Box";
import DialogTitle from "@material-ui/core/DialogTitle";
import makeStyles from "@material-ui/core/styles/makeStyles";
import CircularProgress from "@material-ui/core/CircularProgress";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import FormHelperText from "@material-ui/core/FormHelperText";
import FilledInput from "@material-ui/core/FilledInput";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import Collapse from "@material-ui/core/Collapse";
import CloseIcon from "@material-ui/icons/Close";
import Alert from '@material-ui/lab/Alert';
import { useMutation, useQuery } from "@apollo/client";
import { ADD_CONTACT } from "../../helpers/graphql/mutations";
import { LIST_CONTACT } from "../../helpers/graphql/queries";
import { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

interface ModalProps {
	open: boolean;
	handleClose: () => any;
    propertyID: string | undefined;
}

const useStyles = makeStyles(() => ({
	label: {
		marginBottom: "2px",
		fontWeight: 500,
	},
	helperText: {
		color: "red",
		marginLeft: 0,
	},
	button: {
		color: "#fff",
		padding: "8px 36px",
		width: "100%",
	},
}));

const ContactModal = ({ open, handleClose, propertyID }: ModalProps) => {
	const classes = useStyles();

	const validationSchema = Yup.object().shape({
		contact_email: Yup.string()
			.email("Please enter a valid email")
			.required("This field is required"),
		contact_cell_phone: Yup.string().required("This field is required"),
		contact_office_phone: Yup.string().required("This field is required"),
		contact_fax_number: Yup.string().required("This field is required"),
		contact_company: Yup.string().required("This field is required"),
		contact_company_address: Yup.string().required("This field is required"),
		contact_title: Yup.string().required("This field is required"),
		contact_type: Yup.string().required("This field is required"),
		contact_first_name: Yup.string().required("This field is required"),
		contact_last_name: Yup.string().required("This field is required"),
		contact_company_address_zip: Yup.string().required(
			"This field is required"
		),
		contact_company_address_city: Yup.string().required(
			"This field is required"
		),
		contact_company_address_state: Yup.string().required(
			"This field is required"
		),
	});

	const [success, setSuccess] = useState("");

	//this state handles the alert
	const [openAlert, setOpenAlert] = useState(false);
	const [errorOpen, setErrorOpen] = useState(false);



	//add_contact mutation
	const [add_contact, { loading, error }] = useMutation(ADD_CONTACT, {
		onCompleted({ add_contact }) {
			setSuccess(add_contact.message);
			setOpenAlert(true);
			formik.resetForm();
		},
		refetchQueries: [{ query: LIST_CONTACT }],
		onError(err) {
			setErrorOpen(true);
			console.log(err);
			return null;
		},
	});

	const formik = useFormik({
		initialValues: {
			contact_email: "",
			contact_cell_phone: "",
			contact_office_phone: "",
			contact_fax_number: "",
			contact_company: "",
			contact_title: "",
			contact_type: "",
			contact_first_name: "",
			contact_last_name: "",
			contact_company_address: "",
			contact_company_address_zip: "",
			contact_company_address_city: "",
			contact_company_address_state: "",
		},
		validationSchema: validationSchema,
		onSubmit: (values) => {
			//alert(JSON.stringify(values, null, 2));
			add_contact({
				variables: {
					property_id: propertyID,
					contact_type: values.contact_type,
					contact_first_name: values.contact_first_name,
					contact_last_name: values.contact_last_name,
					contact_email: values.contact_email,
					contact_cell_phone: values.contact_cell_phone,
					contact_office_phone: values.contact_office_phone,
					contact_fax_number: values.contact_fax_number,
					contact_company: values.contact_company,
					contact_company_address: values.contact_company_address,
					contact_title: values.contact_title,
					contact_company_address_city: values.contact_company_address_city,
					contact_company_address_state: values.contact_company_address_state,
					contact_company_address_zip: values.contact_company_address_zip,
				},
			});
		},
	});
	return (
		<>
			<Dialog
				open={open}
				onClose={handleClose}
				aria-labelledby="max-width-dialog-title"
				maxWidth="md"
			>
				<Box width="600px" p={4}>
					<Box fontWeight="bold" fontSize={18}>
						Add Contact
					</Box>
					<form onSubmit={formik.handleSubmit}>
						<Collapse in={openAlert}>
							<Box mt={3}>
								<Alert
									severity="success"
									variant="filled"
									action={
										<IconButton
											aria-label="close"
											color="inherit"
											size="small"
											onClick={() => {
												setOpenAlert(false);
											}}
										>
											<CloseIcon fontSize="inherit" />
										</IconButton>
									}
								>
									{success}
								</Alert>
							</Box>
						</Collapse>
						{error ? (
							<Collapse in={errorOpen}>
								<Box mt={3}>
									<Alert
										severity="error"
										variant="filled"
										action={
											<IconButton
												aria-label="close"
												color="inherit"
												size="small"
												onClick={() => {
													setErrorOpen(false);
												}}
											>
												<CloseIcon fontSize="inherit" />
											</IconButton>
										}
									>
										An error occurred, contact was not successfully added. Try
										again
									</Alert>
								</Box>
							</Collapse>
						) : (
							""
						)}
						<Box display="flex">
							<Box width="50%" mr={3}>
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
									/>
									<FormHelperText className={classes.helperText}>
										{formik.errors.contact_first_name &&
											formik.touched.contact_first_name &&
											formik.errors.contact_first_name}
									</FormHelperText>
								</FormControl>
							</Box>
							<Box width="50%">
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
									/>
									<FormHelperText className={classes.helperText}>
										{formik.errors.contact_last_name &&
											formik.touched.contact_last_name &&
											formik.errors.contact_last_name}
									</FormHelperText>
								</FormControl>
							</Box>
						</Box>
						<Box display="flex">
							<Box width="50%" mr={3}>
								<p className={classes.label}>Email</p>
								<FormControl
									// className={clsx(classes.margin, classes.textField)}
									variant="filled"
								>
									<FilledInput
										name="contact_email"
										value={formik.values.contact_email}
										onChange={formik.handleChange}
										// type="email"
										placeholder="Label"
									/>
									<FormHelperText className={classes.helperText}>
										{formik.errors.contact_email &&
											formik.touched.contact_email &&
											formik.errors.contact_email}
									</FormHelperText>
								</FormControl>
							</Box>
							<Box width="50%">
								<p className={classes.label}>Business Relation</p>
								<FormControl variant="filled">
									<Select
										native
										name="contact_type"
										value={formik.values.contact_type}
										onChange={formik.handleChange}
										placeholder="Label"
									>
										<option aria-label="None" value="" />
										<option value="AUCTION">Auction Agent</option>
										<option value="AGENT">List Agent</option>
										<option value="ATTORNEY">Attorney</option>
										<option value="CLOSING_OFFICE">Closing Office</option>
										<option value="DESIGNER">Designer</option>
										<option value="GC">G.C</option>
									</Select>
									<FormHelperText className={classes.helperText}>
										{formik.errors.contact_type &&
											formik.touched.contact_type &&
											formik.errors.contact_type}
									</FormHelperText>
								</FormControl>
							</Box>
						</Box>
						<Box display="flex">
							<Box width="50%" mr={3}>
								<p className={classes.label}>Title</p>
								<FormControl variant="filled">
									<FilledInput
										name="contact_title"
										value={formik.values.contact_title}
										onChange={formik.handleChange}
										placeholder="Label"
									/>
									<FormHelperText className={classes.helperText}>
										{formik.errors.contact_title &&
											formik.touched.contact_title &&
											formik.errors.contact_title}
									</FormHelperText>
								</FormControl>
							</Box>
							<Box width="50%">
								<p className={classes.label}>Cell Phone</p>
								<FormControl variant="filled">
									<FilledInput
										name="contact_cell_phone"
										value={formik.values.contact_cell_phone}
										onChange={formik.handleChange}
										placeholder="Label"
									/>
									<FormHelperText className={classes.helperText}>
										{formik.errors.contact_cell_phone &&
											formik.touched.contact_cell_phone &&
											formik.errors.contact_cell_phone}
									</FormHelperText>
								</FormControl>
							</Box>
						</Box>
						<Box display="flex">
							<Box width="50%" mr={3}>
								<p className={classes.label}>Office</p>
								<FormControl variant="filled">
									<FilledInput
										name="contact_office_phone"
										value={formik.values.contact_office_phone}
										onChange={formik.handleChange}
										placeholder="Label"
									/>
									<FormHelperText className={classes.helperText}>
										{formik.errors.contact_office_phone &&
											formik.touched.contact_office_phone &&
											formik.errors.contact_office_phone}
									</FormHelperText>
								</FormControl>
							</Box>
							<Box width="50%">
								<p className={classes.label}>Fax</p>
								<FormControl variant="filled">
									<FilledInput
										name="contact_fax_number"
										value={formik.values.contact_fax_number}
										onChange={formik.handleChange}
										placeholder="Label"
									/>
									<FormHelperText className={classes.helperText}>
										{formik.errors.contact_fax_number &&
											formik.touched.contact_fax_number &&
											formik.errors.contact_fax_number}
									</FormHelperText>
								</FormControl>
							</Box>
						</Box>
						<Box display="flex">
							<Box width="50%" mr={3}>
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
									/>
									<FormHelperText className={classes.helperText}>
										{formik.errors.contact_company_address &&
											formik.touched.contact_company_address &&
											formik.errors.contact_company_address}
									</FormHelperText>
								</FormControl>
							</Box>
							<Box width="50%">
								<p className={classes.label}>Business Address Zip</p>
								<FormControl
									// className={clsx(classes.margin, classes.textField)}
									variant="filled"
								>
									<FilledInput
										name="contact_company_address_zip"
										value={formik.values.contact_company_address_zip}
										onChange={formik.handleChange}
										placeholder="Label"
									/>
									<FormHelperText className={classes.helperText}>
										{formik.errors.contact_company_address_zip &&
											formik.touched.contact_company_address_zip &&
											formik.errors.contact_company_address_zip}
									</FormHelperText>
								</FormControl>
							</Box>
						</Box>
						<Box display="flex">
							<Box width="50%" mr={3}>
								<p className={classes.label}>Business Address City</p>
								<FormControl
									// className={clsx(classes.margin, classes.textField)}
									variant="filled"
								>
									<FilledInput
										name="contact_company_address_city"
										value={formik.values.contact_company_address_city}
										onChange={formik.handleChange}
										placeholder="Label"
									/>
									<FormHelperText className={classes.helperText}>
										{formik.errors.contact_company_address_city &&
											formik.touched.contact_company_address_city &&
											formik.errors.contact_company_address_city}
									</FormHelperText>
								</FormControl>
							</Box>
							<Box width="50%">
								<p className={classes.label}>Business Address State</p>
								<FormControl
									// className={clsx(classes.margin, classes.textField)}
									variant="filled"
								>
									<FilledInput
										name="contact_company_address_state"
										value={formik.values.contact_company_address_state}
										onChange={formik.handleChange}
										placeholder="Label"
									/>
									<FormHelperText className={classes.helperText}>
										{formik.errors.contact_company_address_state &&
											formik.touched.contact_company_address_state &&
											formik.errors.contact_company_address_state}
									</FormHelperText>
								</FormControl>
							</Box>
						</Box>

						<Box display="flex">
							<Box width="48%">
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
									/>
									<FormHelperText className={classes.helperText}>
										{formik.errors.contact_company &&
											formik.touched.contact_company &&
											formik.errors.contact_company}
									</FormHelperText>
								</FormControl>
							</Box>
						</Box>
						<Box width="100%" mt={3}>
							<Button
								color="primary"
								variant="contained"
								className={classes.button}
								type="submit"
								disabled={loading ? true : false}
							>
								{loading ? <CircularProgress /> : "Add Contact"}
								
							</Button>
						</Box>
					</form>
				</Box>
			</Dialog>
		</>
	);
};
export default ContactModal;
