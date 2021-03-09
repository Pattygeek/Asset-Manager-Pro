import Box from "@material-ui/core/Box";
import Select from "@material-ui/core/Select";
import FormControl from "@material-ui/core/FormControl";
import FormHelperText from "@material-ui/core/FormHelperText";
import makeStyles from "@material-ui/core/styles/makeStyles";
import FilledInput from "@material-ui/core/FilledInput";
import Button from "@material-ui/core/Button";

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
}));

const AddContact = () => {
	const classes = useStyles();
	return (
		<>
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
								// value={state.age}
								// onChange={handleChange}
								inputProps={{
									name: "age",
									id: "filled-age-native-simple",
								}}
								placeholder="Label"
							>
								<option aria-label="None" value="" />
								<option value={10}>NEW ASSET</option>
								<option value={20}>NOT REVIEWED</option>
								<option value={30}>NEW LEAD</option>
								<option value={30}>RE-REVIEW</option>
								<option value={30}>NOT INTERESTED</option>
							</Select>
							<FormHelperText id="filled-weight-helper-text">
								helper text
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
								id="filled-adornment-weight"
								// value={values.weight}
								// onChange={handleChange("weight")}
								placeholder="Label"
								aria-describedby="filled-weight-helper-text"
								inputProps={{
									"aria-label": "weight",
								}}
							/>
							<FormHelperText id="filled-weight-helper-text">
								helper text
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
								id="filled-adornment-weight"
								// value={values.weight}
								// onChange={handleChange("weight")}
								placeholder="Label"
								aria-describedby="filled-weight-helper-text"
								inputProps={{
									"aria-label": "weight",
								}}
							/>
							<FormHelperText id="filled-weight-helper-text">
								helper text
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
								id="filled-adornment-weight"
								// value={values.weight}
								// onChange={handleChange("weight")}
								placeholder="Label"
								aria-describedby="filled-weight-helper-text"
								inputProps={{
									"aria-label": "weight",
								}}
							/>
							<FormHelperText id="filled-weight-helper-text">
								helper text
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
								id="filled-adornment-weight"
								// value={values.weight}
								// onChange={handleChange("weight")}
								placeholder="Label"
								aria-describedby="filled-weight-helper-text"
								inputProps={{
									"aria-label": "weight",
								}}
							/>
							<FormHelperText id="filled-weight-helper-text">
								helper text
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
								id="filled-adornment-weight"
								// value={values.weight}
								// onChange={handleChange("weight")}
								placeholder="Label"
								aria-describedby="filled-weight-helper-text"
								inputProps={{
									"aria-label": "weight",
								}}
							/>
							<FormHelperText id="filled-weight-helper-text">
								helper text
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
								id="filled-adornment-weight"
								// value={values.weight}
								// onChange={handleChange("weight")}
								placeholder="Label"
								aria-describedby="filled-weight-helper-text"
								inputProps={{
									"aria-label": "weight",
								}}
							/>
							<FormHelperText id="filled-weight-helper-text">
								helper text
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
								id="filled-adornment-weight"
								// value={values.weight}
								// onChange={handleChange("weight")}
								placeholder="Label"
								aria-describedby="filled-weight-helper-text"
								inputProps={{
									"aria-label": "weight",
								}}
							/>
							<FormHelperText id="filled-weight-helper-text">
								helper text
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
								id="filled-adornment-weight"
								// value={values.weight}
								// onChange={handleChange("weight")}
								placeholder="Label"
								aria-describedby="filled-weight-helper-text"
								inputProps={{
									"aria-label": "weight",
								}}
							/>
							<FormHelperText id="filled-weight-helper-text">
								helper text
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
								id="filled-adornment-weight"
								// value={values.weight}
								// onChange={handleChange("weight")}
								placeholder="Label"
								aria-describedby="filled-weight-helper-text"
								inputProps={{
									"aria-label": "weight",
								}}
							/>
							<FormHelperText id="filled-weight-helper-text">
								helper text
							</FormHelperText>
						</FormControl>
					</Box>
				</div>
				<Box display="flex" justifyContent="flex-end" marginTop={4}>
					<Button
						color="primary"
						variant="contained"
						className={classes.button}
					>
						Add Contact
					</Button>
				</Box>
			</Box>
		</>
	);
};
export default AddContact;
