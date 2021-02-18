import Box from "@material-ui/core/Box";
import TextField from "@material-ui/core/TextField";
import FilledInput from "@material-ui/core/FilledInput";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import FormHelperText from "@material-ui/core/FormHelperText";
import makeStyles from "@material-ui/core/styles/makeStyles";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Button from "@material-ui/core/Button";

//assets & components
import { ReactComponent as FileIcon } from "../../../assets/icons/file.svg";
import PhotoBox from "./PhotoBox";
import pix1 from "../../../assets/images/pix1.png";
import pix2 from "../../../assets/images/pix2.png";
import pix3 from "../../../assets/images/pix3.png";
import pix4 from "../../../assets/images/pix4.png";
import pix5 from "../../../assets/images/pix5.png";
import pix6 from "../../../assets/images/pix6.png";
import History from "./History";
import Document from "./Document";
import PriceHistory from "./PriceHistory";
import BidHistory from "./BidHistory";
import { useState } from "react";

const useStyles = makeStyles((theme) => ({
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
	},
	icon: {
		height: "18px",
		width: "18px",
		margin: "auto 10px auto 0px",
	},
}));

const Buy = () => {
	const classes = useStyles();

	//================pricehistory modal handler==============
	const [open, setOpen] = useState(false);

	const handleOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};
	//======================================================

	//================bidhistory modal handler==============
	const [show, setShow] = useState(false);

	const handleShow = () => {
		setShow(true);
	};

	const handleCloseShow = () => {
		setShow(false);
	};
	//=======================================================

	const images = [pix1, pix2, pix3, pix4, pix5, pix6];

	return (
		<>
			<div className={classes.div}>
				<Box>
					<p className={classes.label}>User</p>
					<FormControl
						// className={clsx(classes.margin, classes.textField)}
						variant="filled"
					>
						<FilledInput
							id="filled-adornment-weight"
							// value={values.weight}
							// onChange={handleChange("weight")}
							placeholder="User"
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
					<p className={classes.label}>Auction Status</p>
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
							<option value={10}>Auction</option>
							<option value={20}>Removed</option>
							<option value={30}>Sold</option>
						</Select>
						<FormHelperText id="filled-weight-helper-text">
							helper text
						</FormHelperText>
					</FormControl>
				</Box>
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
					<p className={classes.label}>Reason</p>
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
							<option value={10}>No Spread</option>
							<option value={20}>Too Rural</option>
							<option value={30}>Too Much Work</option>
							<option value={30}>Land Only</option>
							<option value={30}>Hard Eviction</option>
						</Select>
						<FormHelperText id="filled-weight-helper-text">
							helper text
						</FormHelperText>
					</FormControl>
				</Box>
				<Box>
					<p className={classes.label}>Access?</p>
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
					<p className={classes.label}>Product</p>
					<FormControl
						// className={clsx(classes.margin, classes.textField)}
						variant="filled"
					>
						<FilledInput
							id="filled-adornment-weight"
							// value={values.weight}
							// onChange={handleChange("weight")}
							placeholder="Product"
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
					<p className={classes.label}>Property Type</p>
					<FormControl
						// className={clsx(classes.margin, classes.textField)}
						variant="filled"
					>
						<FilledInput
							id="filled-adornment-weight"
							// value={values.weight}
							// onChange={handleChange("weight")}
							placeholder="Property"
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
					<p className={classes.label}>SQFT</p>
					<FormControl
						// className={clsx(classes.margin, classes.textField)}
						variant="filled"
					>
						<FilledInput
							id="filled-adornment-weight"
							// value={values.weight}
							// onChange={handleChange("weight")}
							placeholder="SQFT"
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
					<p className={classes.label}>BR</p>
					<FormControl
						// className={clsx(classes.margin, classes.textField)}
						variant="filled"
					>
						<FilledInput
							id="filled-adornment-weight"
							// value={values.weight}
							// onChange={handleChange("weight")}
							placeholder="BR"
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
					<p className={classes.label}>BA</p>
					<FormControl
						// className={clsx(classes.margin, classes.textField)}
						variant="filled"
					>
						<FilledInput
							id="filled-adornment-weight"
							// value={values.weight}
							// onChange={handleChange("weight")}
							placeholder="BA"
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
					<p className={classes.label}>Lot</p>
					<FormControl
						// className={clsx(classes.margin, classes.textField)}
						variant="filled"
					>
						<FilledInput
							id="filled-adornment-weight"
							// value={values.weight}
							// onChange={handleChange("weight")}
							placeholder="Lot"
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
					<p className={classes.label}>Year</p>
					<FormControl
						// className={clsx(classes.margin, classes.textField)}
						variant="filled"
					>
						<FilledInput
							id="filled-adornment-weight"
							// value={values.weight}
							// onChange={handleChange("weight")}
							placeholder="Year"
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
			<div>
				<Box width="60%">
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
			<div className={classes.div}>
				<Box>
					<p className={classes.label}>Resale ($)</p>
					<FormControl
						// className={clsx(classes.margin, classes.textField)}
						variant="filled"
					>
						<FilledInput
							id="filled-adornment-weight"
							// value={values.weight}
							// onChange={handleChange("weight")}
							placeholder="Year"
							aria-describedby="filled-weight-helper-text"
							inputProps={{
								"aria-label": "weight",
							}}
						/>
						<FormHelperText id="filled-weight-helper-text">
							helper text
						</FormHelperText>
					</FormControl>
					<FormControlLabel
						control={
							<Checkbox
								// checked={state.checkedB}
								// onChange={handleChange}
								name="checkedB"
								color="primary"
							/>
						}
						label="Agent Confirm"
					/>
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
							placeholder="Year"
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
					<p className={classes.label}>Buy Price ($)</p>
					<FormControl
						// className={clsx(classes.margin, classes.textField)}
						variant="filled"
					>
						<FilledInput
							id="filled-adornment-weight"
							// value={values.weight}
							// onChange={handleChange("weight")}
							placeholder="Year"
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
					<p className={classes.label}>ST RSV ($)</p>
					<FormControl
						// className={clsx(classes.margin, classes.textField)}
						variant="filled"
					>
						<FilledInput
							id="filled-adornment-weight"
							// value={values.weight}
							// onChange={handleChange("weight")}
							placeholder="Year"
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
					<p className={classes.label}>Auction List Price ($)</p>
					<FormControl
						// className={clsx(classes.margin, classes.textField)}
						variant="filled"
					>
						<FilledInput
							id="filled-adornment-weight"
							// value={values.weight}
							// onChange={handleChange("weight")}
							placeholder="Year"
							aria-describedby="filled-weight-helper-text"
							inputProps={{
								"aria-label": "weight",
							}}
						/>
						<FormHelperText id="filled-weight-helper-text">
							helper text
						</FormHelperText>
					</FormControl>
					<p className={classes.price} onClick={handleOpen}>
						View Price History
					</p>
					<PriceHistory open={open} handleClose={handleClose} />
				</Box>
			</div>
			<div className={classes.div}>
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
							placeholder="Year"
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
					<p className={classes.label}>ROI %</p>
					<FormControl
						// className={clsx(classes.margin, classes.textField)}
						variant="filled"
					>
						<FilledInput
							id="filled-adornment-weight"
							// value={values.weight}
							// onChange={handleChange("weight")}
							placeholder="Year"
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
							placeholder="Year"
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
							placeholder="Label"
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
					<p className={classes.label}>High Bid ($)</p>
					<FormControl
						// className={clsx(classes.margin, classes.textField)}
						variant="filled"
					>
						<FilledInput
							id="filled-adornment-weight"
							// value={values.weight}
							// onChange={handleChange("weight")}
							placeholder="Year"
							aria-describedby="filled-weight-helper-text"
							inputProps={{
								"aria-label": "weight",
							}}
						/>
						<FormHelperText id="filled-weight-helper-text">
							helper text
						</FormHelperText>
					</FormControl>
					<p className={classes.price} onClick={handleShow}>
						View Bid History
					</p>
					<BidHistory open={show} handleClose={handleCloseShow} />
				</Box>
			</div>
			<div className={classes.section}>
				<div style={{ width: "67%" }}>
					<div className={classes.sectionDiv}>
						<Box>
							<p className={classes.label}>Auction Agent</p>
							<FormControl
								// className={clsx(classes.margin, classes.textField)}
								variant="filled"
							>
								<FilledInput
									id="filled-adornment-weight"
									// value={values.weight}
									// onChange={handleChange("weight")}
									placeholder="Year"
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
							<p className={classes.label}>Auction Agent Number</p>
							<FormControl
								// className={clsx(classes.margin, classes.textField)}
								variant="filled"
							>
								<FilledInput
									id="filled-adornment-weight"
									// value={values.weight}
									// onChange={handleChange("weight")}
									placeholder="Year"
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
							<p className={classes.label}>Auction Agent Email</p>
							<FormControl
								// className={clsx(classes.margin, classes.textField)}
								variant="filled"
							>
								<FilledInput
									id="filled-adornment-weight"
									// value={values.weight}
									// onChange={handleChange("weight")}
									placeholder="Year"
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
					<div className={classes.sectionDiv}>
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
									placeholder="Year"
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
									placeholder="Year"
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
									placeholder="Year"
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
						<div className={classes.buttonBox}>
							<FileIcon className={classes.icon} color="red" />
							Property Inspection Report
						</div>
						<div className={classes.buttonBox}>
							<FileIcon className={classes.icon} color="red" />
							Property Information Report
						</div>
						<Button variant="outlined" color="primary">
							upload Document
						</Button>
					</div>
				</div>
				<Box width="33%">
					<PhotoBox images={images} />
				</Box>
			</div>
			<Box
				width="100%"
				display="flex"
				justifyContent="space-between"
				marginTop={4}
			>
				<History />
				<Document />
			</Box>
		</>
	);
};
export default Buy;
