import makeStyles from "@material-ui/core/styles/makeStyles";
import Box from "@material-ui/core/Box";
import TextField from "@material-ui/core/TextField";
import FilledInput from "@material-ui/core/FilledInput";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import FormHelperText from "@material-ui/core/FormHelperText";
import Button from "@material-ui/core/Button";

//assets & components
import { ReactComponent as FileIcon } from "../../../assets/icons/file.svg";
import History from "../History";
import Document from "../Document";
import Utilities from "./Utilities";
import EscrowPhoto from "../Escrow/EscrowPhoto";
import pix1 from "../../../assets/images/pix1.png";
import pix2 from "../../../assets/images/pix2.png";
import pix3 from "../../../assets/images/pix3.png";
import pix4 from "../../../assets/images/pix4.png";
import pix5 from "../../../assets/images/pix5.png";
import pix6 from "../../../assets/images/pix6.png";

const useStyles = makeStyles(() => ({
	label: {
		marginBottom: "2px",
		fontWeight: 500,
	},
	div: {
		display: "grid",
		gridTemplateColumns: "repeat(6, 1fr)",
		gap: "12px",
	},
	sectionDiv: {
		display: "grid",
		gridTemplateColumns: "repeat(4, 1fr)",
		gap: "12px",
	},
	price: {
		color: "#109CF1",
		cursor: "pointer",
	},
	section: {
		display: "flex",
		justifyContent: "space-between",
	},
	buttonStack: {
		display: "flex",
		marginTop: "32px",
		marginBottom: "32px",
	},
	buttonBox: {
		border: "1px solid #109CF1",
		borderRadius: "4px",
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		padding: "0px 12px",
		backgroundColor: "#EDF7FF",
		fontWeight: 500,
		marginRight: "12px",
		cursor: "pointer",
	},
	icon: {
		height: "18px",
		width: "18px",
		margin: "auto 10px auto 0px",
	},
	uploadButton: {
		boxShadow: "0px 4px 10px rgba(16, 156, 241, 0.24)",
	},
}));

const Index = () => {
	const classes = useStyles();

	const images = [pix1, pix2, pix3, pix4, pix5, pix6];
	return (
		<>
			<div className={classes.div}>
				<Box>
					<p className={classes.label}>Status</p>
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
							placeholder=""
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
					<p className={classes.label}>TPP</p>
					<FormControl
						// className={clsx(classes.margin, classes.textField)}
						variant="filled"
					>
						<FilledInput
							id="filled-adornment-weight"
							// value={values.weight}
							// onChange={handleChange("weight")}
							placeholder=""
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
					<p className={classes.label}>List Price ($)</p>
					<FormControl
						// className={clsx(classes.margin, classes.textField)}
						variant="filled"
					>
						<FilledInput
							id="filled-adornment-weight"
							// value={values.weight}
							// onChange={handleChange("weight")}
							placeholder=""
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
					<p className={classes.label}>Profit ($)</p>
					<FormControl
						// className={clsx(classes.margin, classes.textField)}
						variant="filled"
					>
						<FilledInput
							id="filled-adornment-weight"
							// value={values.weight}
							// onChange={handleChange("weight")}
							placeholder=""
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
					<p className={classes.label}>ROI (%)</p>
					<FormControl
						// className={clsx(classes.margin, classes.textField)}
						variant="filled"
					>
						<FilledInput
							id="filled-adornment-weight"
							// value={values.weight}
							// onChange={handleChange("weight")}
							placeholder=""
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
					<p className={classes.label}>Hold Time</p>
					<FormControl
						// className={clsx(classes.margin, classes.textField)}
						variant="filled"
					>
						<FilledInput
							id="filled-adornment-weight"
							// value={values.weight}
							// onChange={handleChange("weight")}
							placeholder=""
							type="number"
							aria-describedby="filled-weight-helper-text"
							inputProps={{
								"aria-label": "weight",
								step:"0.1"
							}}
						/>
						<FormHelperText id="filled-weight-helper-text">
							helper text
						</FormHelperText>
					</FormControl>
				</Box>
			</div>
			<div>
				<Box width="60%" mb={5}>
					<p className={classes.label}>Note</p>
					<FormControl
						// className={clsx(classes.margin, classes.textField)}
						variant="filled"
					>
						<TextField
							id="filled-multiline-static"
							multiline
							rows={3}
							// defaultValue="Default Value"
							variant="filled"
						/>
						<FormHelperText id="filled-weight-helper-text">
							helper text
						</FormHelperText>
					</FormControl>
				</Box>
			</div>

			<div className={classes.section}>
				<div style={{ width: "69%", marginTop: "10px" }}>
					<div className={classes.sectionDiv}>
						<Box>
							<p className={classes.label}>Occupancy</p>
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
									placeholder=""
								>
									<option aria-label="None" value="" />
									<option value={10}>Occupied</option>
									<option value={20}>Vacant</option>
								</Select>
								<FormHelperText id="filled-weight-helper-text">
									helper text
								</FormHelperText>
							</FormControl>
						</Box>
						<Box>
							<p className={classes.label}>Eviction</p>
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
									placeholder=""
								>
									<option aria-label="None" value="" />
									<option value={10}>Yes</option>
									<option value={20}>No</option>
								</Select>
								<FormHelperText id="filled-weight-helper-text">
									helper text
								</FormHelperText>
							</FormControl>
						</Box>
						<Box>
							<p className={classes.label}>CFK</p>
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
									<option value={10}>Yes</option>
									<option value={20}>No</option>
								</Select>
								<FormHelperText id="filled-weight-helper-text">
									helper text
								</FormHelperText>
							</FormControl>
						</Box>
						<Box>
							<p className={classes.label}>CFK Amount ($)</p>
							<FormControl
								// className={clsx(classes.margin, classes.textField)}
								variant="filled"
							>
								<FilledInput
									id="filled-adornment-weight"
									// value={values.weight}
									// onChange={handleChange("weight")}

									placeholder=""
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
							<p className={classes.label}>Occupant</p>
							<FormControl
								// className={clsx(classes.margin, classes.textField)}
								variant="filled"
							>
								<FilledInput
									id="filled-adornment-weight"
									// value={values.weight}
									// onChange={handleChange("weight")}

									placeholder=""
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
							<p className={classes.label}>Occupant Number</p>
							<FormControl
								// className={clsx(classes.margin, classes.textField)}
								variant="filled"
							>
								<FilledInput
									id="filled-adornment-weight"
									// value={values.weight}
									// onChange={handleChange("weight")}

									placeholder=""
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
							<p className={classes.label}>Occupant Email</p>
							<FormControl
								// className={clsx(classes.margin, classes.textField)}
								variant="filled"
							>
								<FilledInput
									id="filled-adornment-weight"
									// value={values.weight}
									// onChange={handleChange("weight")}

									placeholder=""
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
							<p className={classes.label}>Eviction Date</p>
							<FormControl
								// className={clsx(classes.margin, classes.textField)}
								variant="filled"
							>
								<FilledInput
									id="filled-adornment-weight"
									// value={values.weight}
									// onChange={handleChange("weight")}
									type="date"
									placeholder=""
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
							<p className={classes.label}>Attorney Name</p>
							<FormControl
								// className={clsx(classes.margin, classes.textField)}
								variant="filled"
							>
								<FilledInput
									id="filled-adornment-weight"
									// value={values.weight}
									// onChange={handleChange("weight")}

									placeholder=""
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
							<p className={classes.label}>Attorney Number</p>
							<FormControl
								// className={clsx(classes.margin, classes.textField)}
								variant="filled"
							>
								<FilledInput
									id="filled-adornment-weight"
									// value={values.weight}
									// onChange={handleChange("weight")}

									placeholder=""
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
							<p className={classes.label}>Attorney Email</p>
							<FormControl
								// className={clsx(classes.margin, classes.textField)}
								variant="filled"
							>
								<FilledInput
									id="filled-adornment-weight"
									// value={values.weight}
									// onChange={handleChange("weight")}

									placeholder=""
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
							<p className={classes.label}>Eviction Cost ($)</p>
							<FormControl
								// className={clsx(classes.margin, classes.textField)}
								variant="filled"
							>
								<FilledInput
									id="filled-adornment-weight"
									// value={values.weight}
									// onChange={handleChange("weight")}

									placeholder=""
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
							<p className={classes.label}>Water Co</p>
							<FormControl
								// className={clsx(classes.margin, classes.textField)}
								variant="filled"
							>
								<FilledInput
									id="filled-adornment-weight"
									// value={values.weight}
									// onChange={handleChange("weight")}

									placeholder=""
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
							<p className={classes.label}>Water Co Number</p>
							<FormControl
								// className={clsx(classes.margin, classes.textField)}
								variant="filled"
							>
								<FilledInput
									id="filled-adornment-weight"
									// value={values.weight}
									// onChange={handleChange("weight")}

									placeholder=""
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
							<p className={classes.label}>Electric Co</p>
							<FormControl
								// className={clsx(classes.margin, classes.textField)}
								variant="filled"
							>
								<FilledInput
									id="filled-adornment-weight"
									// value={values.weight}
									// onChange={handleChange("weight")}

									placeholder=""
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
							<p className={classes.label}>Electric Co Number</p>
							<FormControl
								// className={clsx(classes.margin, classes.textField)}
								variant="filled"
							>
								<FilledInput
									id="filled-adornment-weight"
									// value={values.weight}
									// onChange={handleChange("weight")}

									placeholder=""
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
							<p className={classes.label}>Gas Co</p>
							<FormControl
								// className={clsx(classes.margin, classes.textField)}
								variant="filled"
							>
								<FilledInput
									id="filled-adornment-weight"
									// value={values.weight}
									// onChange={handleChange("weight")}

									placeholder=""
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
							<p className={classes.label}>Gas Co Number</p>
							<FormControl
								// className={clsx(classes.margin, classes.textField)}
								variant="filled"
							>
								<FilledInput
									id="filled-adornment-weight"
									// value={values.weight}
									// onChange={handleChange("weight")}

									placeholder=""
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
							<p className={classes.label}>Taxes</p>
							<FormControl
								// className={clsx(classes.margin, classes.textField)}
								variant="filled"
							>
								<FilledInput
									id="filled-adornment-weight"
									// value={values.weight}
									// onChange={handleChange("weight")}

									placeholder=""
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
							<p className={classes.label}>Taxes Number</p>
							<FormControl
								// className={clsx(classes.margin, classes.textField)}
								variant="filled"
							>
								<FilledInput
									id="filled-adornment-weight"
									// value={values.weight}
									// onChange={handleChange("weight")}

									placeholder=""
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
				</div>

				<Box width="29%" mt={3} mb={2}>
					<EscrowPhoto images={images} />
				</Box>
			</div>
			<div className={classes.div}>
				<Box>
					<p className={classes.label}>Contractor Bid Received</p>
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
							placeholder=""
						>
							<option aria-label="None" value="" />
							<option value={10}>Yes</option>
							<option value={20}>No</option>
						</Select>
						<FormHelperText id="filled-weight-helper-text">
							helper text
						</FormHelperText>
					</FormControl>
				</Box>
				<Box>
					<p className={classes.label}>Rehab ($)</p>
					<FormControl
						// className={clsx(classes.margin, classes.textField)}
						variant="filled"
					>
						<FilledInput
							id="filled-adornment-weight"
							// value={values.weight}
							// onChange={handleChange("weight")}

							placeholder=""
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
					<p className={classes.label}>G.C.</p>
					<FormControl
						// className={clsx(classes.margin, classes.textField)}
						variant="filled"
					>
						<FilledInput
							id="filled-adornment-weight"
							// value={values.weight}
							// onChange={handleChange("weight")}

							placeholder=""
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
					<p className={classes.label}>G.C. Number</p>
					<FormControl
						// className={clsx(classes.margin, classes.textField)}
						variant="filled"
					>
						<FilledInput
							id="filled-adornment-weight"
							// value={values.weight}
							// onChange={handleChange("weight")}

							placeholder=""
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
					<p className={classes.label}>G.C. Email</p>
					<FormControl
						// className={clsx(classes.margin, classes.textField)}
						variant="filled"
					>
						<FilledInput
							id="filled-adornment-weight"
							// value={values.weight}
							// onChange={handleChange("weight")}

							placeholder=""
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
			<div className={classes.div}>
				<Box>
					<p className={classes.label}>List Agent</p>
					<FormControl
						// className={clsx(classes.margin, classes.textField)}
						variant="filled"
					>
						<FilledInput
							id="filled-adornment-weight"
							// value={values.weight}
							// onChange={handleChange("weight")}

							placeholder=""
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
					<p className={classes.label}>List Agent Number</p>
					<FormControl
						// className={clsx(classes.margin, classes.textField)}
						variant="filled"
					>
						<FilledInput
							id="filled-adornment-weight"
							// value={values.weight}
							// onChange={handleChange("weight")}

							placeholder=""
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
					<p className={classes.label}>List Agent Email</p>
					<FormControl
						// className={clsx(classes.margin, classes.textField)}
						variant="filled"
					>
						<FilledInput
							id="filled-adornment-weight"
							// value={values.weight}
							// onChange={handleChange("weight")}

							placeholder=""
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
					<p className={classes.label}>Sold Price ($)</p>
					<FormControl
						// className={clsx(classes.margin, classes.textField)}
						variant="filled"
					>
						<FilledInput
							id="filled-adornment-weight"
							// value={values.weight}
							// onChange={handleChange("weight")}

							placeholder=""
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
					<p className={classes.label}>Sold Date</p>
					<FormControl
						// className={clsx(classes.margin, classes.textField)}
						variant="filled"
					>
						<FilledInput
							id="filled-adornment-weight"
							// value={values.weight}
							// onChange={handleChange("weight")}
							type="date"
							placeholder=""
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
			<div className={classes.buttonStack}>
				<Button
					variant="outlined"
					color="primary"
					className={classes.uploadButton}
				>
					upload Document
				</Button>
			</div>
			<Box
				width="100%"
				display="flex"
				justifyContent="space-between"
				marginTop={10}
			>
				<Utilities />
			</Box>
			<Box
				width="100%"
				display="flex"
				justifyContent="space-between"
				marginTop={6}
			>
				<History />
				<Document />
			</Box>
		</>
	);
};
export default Index;
