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
import History from "../History";
import Document from "../Document";
import PriceHistory from "./PriceHistory";
import BidHistory from "./BidHistory";
import { useState } from "react";
import {
	NumberCurrencyFormatCustom,
	RegularNumberWithoutDecimalFormat,
	RegularNumberWithDecimalFormat,
	YearFormat,
	PercentageFormat,
	PercentageWithoutDecimalFormat,
	PhoneNumberFormat,
} from "../../../utils/formats";

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
		cursor: "pointer",
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

	//state handler for all the input fields
	const [data, setData] = useState({
		stRsv: "",
		sqft: "",
		br: "",
		ba: "",
		lot: "",
		year: "",
		resale: "",
		rehab: "",
		buy_price: "",
		tpp: "",
		annual_tax: "",
		hud_exp: "",
		profit: "",
		roi: "",
		hold_time: "",
		mkt: "",
		auction_list_price: "",
		high_bid: "",
		auction_agent: "",
		list_agent: "",
		potential_rehab: "",
		potential_lp: "",
		potential_profit: "",
		potential_roi: "",
		loan_amount: "",
		down_payment: "",
		interest: "",
		cfk_amount: "",
		attorney_name: "",
		water_co_number: "",
		electric_co_number: "",
		gas_co_number: "",
		taxes_number: "",
		gc: "",
		sold_price: "",
		auction_agent_number: "",
		auction_agent_email: "",
		list_agent_number: "",
		list_agent_email: "",
		reason: "",
		access: "",
		occupancy: "",
		product: "",
		status: "",
		property_type: "",
	});

	//onchange handler for input fields
	const handleChange = (event: React.ChangeEvent<any>) => {
		const { name, value } = event.target;
		setData({
			...data,
			[name]: value,
		});
	};
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
							value={data.status}
							onChange={handleChange}
							name="status"
							// inputProps={{
							// 	name: "age",
							// 	id: "filled-age-native-simple",
							// }}
							placeholder=""
						>
							<option aria-label="None" value="" />
							<option value={10}>NEW ASSET</option>
							<option value={20}>NOT REVIEWED</option>
							<option value={30}>NEW LEAD</option>
							<option value={30}>RE-REVIEW</option>
							<option value={30}>NOT INTERESTED</option>
						</Select>
						<FormHelperText id="filled-weight-helper-text"></FormHelperText>
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
							value={data.reason}
							onChange={handleChange}
							name="reason"
							// inputProps={{
							// 	name: "reason",
							// 	// id: "filled-age-native-simple",
							// }}
							placeholder=""
						>
							<option aria-label="None" value="" />
							<option value={10}>No Spread</option>
							<option value={20}>Too Rural</option>
							<option value={30}>Too Much Work</option>
							<option value={30}>Land Only</option>
							<option value={30}>Hard Eviction</option>
						</Select>
						<FormHelperText id="filled-weight-helper-text"></FormHelperText>
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
							value={data.access}
							onChange={handleChange}
							name="access"
							// inputProps={{
							// 	name: "age",
							// 	id: "filled-age-native-simple",
							// }}
							placeholder=""
						>
							<option aria-label="None" value="" />
							<option value={10}>Yes</option>
							<option value={20}>No</option>
						</Select>
						<FormHelperText id="filled-weight-helper-text"></FormHelperText>
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
							value={data.product}
							onChange={handleChange}
							name="product"
							placeholder=""
							aria-describedby="filled-weight-helper-text"
							inputProps={{
								"aria-label": "weight",
							}}
						/>
						<FormHelperText id="filled-weight-helper-text"></FormHelperText>
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
							value={data.occupancy}
							onChange={handleChange}
							name="occupancy"
							// inputProps={{
							// 	name: "age",
							// 	id: "filled-age-native-simple",
							// }}
							placeholder=""
						>
							<option aria-label="None" value="" />
							<option value={10}>Occupied</option>
							<option value={20}>Vacant</option>
						</Select>
						<FormHelperText id="filled-weight-helper-text"></FormHelperText>
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
							value={data.stRsv}
							name="stRsv"
							onChange={handleChange}
							placeholder=""
							aria-describedby="filled-weight-helper-text"
							inputComponent={NumberCurrencyFormatCustom as any}
						/>
						<FormHelperText id="filled-weight-helper-text"></FormHelperText>
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
							value={data.property_type}
							onChange={handleChange}
							name="property_type"
							placeholder=""
							aria-describedby="filled-weight-helper-text"
							inputProps={{
								"aria-label": "weight",
							}}
						/>
						<FormHelperText id="filled-weight-helper-text"></FormHelperText>
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
							placeholder=""
							aria-describedby="filled-weight-helper-text"
							name="sqft"
							value={data.sqft}
							onChange={handleChange}
							inputProps={{
								maxLength: 7,
							}}
							inputComponent={NumberCurrencyFormatCustom as any}
						/>
						<FormHelperText id="filled-weight-helper-text"></FormHelperText>
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
							placeholder=""
							aria-describedby="filled-weight-helper-text"
							name="br"
							value={data.br}
							onChange={handleChange}
							inputProps={{
								maxLength: 2,
							}}
							inputComponent={RegularNumberWithoutDecimalFormat as any}
						/>
						<FormHelperText id="filled-weight-helper-text"></FormHelperText>
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
							placeholder=""
							aria-describedby="filled-weight-helper-text"
							name="ba"
							value={data.ba}
							onChange={handleChange}
							inputProps={{
								maxLength: 5,
							}}
							inputComponent={RegularNumberWithDecimalFormat as any}
						/>
						<FormHelperText id="filled-weight-helper-text"></FormHelperText>
					</FormControl>
				</Box>
				<Box>
					<p className={classes.label}>Lot</p>
					<FormControl variant="filled">
						<FilledInput
							id="filled-adornment-weight"
							placeholder=""
							aria-describedby="filled-weight-helper-text"
							name="lot"
							value={data.lot}
							onChange={handleChange}
							inputProps={{
								maxLength: 6,
							}}
							inputComponent={RegularNumberWithDecimalFormat as any}
						/>
						<FormHelperText id="filled-weight-helper-text"></FormHelperText>
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
							placeholder=""
							aria-describedby="filled-weight-helper-text"
							name="year"
							value={data.year}
							onChange={handleChange}
							inputProps={{
								maxLength: 4, //TODO - Year format is not perfectly done, remember to come back to it.
							}}
							inputComponent={YearFormat as any}
						/>
						<FormHelperText id="filled-weight-helper-text"></FormHelperText>
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
						<FormHelperText id="filled-weight-helper-text"></FormHelperText>
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
							placeholder=""
							aria-describedby="filled-weight-helper-text"
							name="resale"
							value={data.resale}
							onChange={handleChange}
							inputProps={{
								maxLength: 11,
							}}
							inputComponent={NumberCurrencyFormatCustom as any}
						/>
						<FormHelperText id="filled-weight-helper-text"></FormHelperText>
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
						style={{ fontSize: "14px" }}
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
							placeholder=""
							aria-describedby="filled-weight-helper-text"
							name="rehab"
							value={data.rehab}
							onChange={handleChange}
							inputProps={{
								maxLength: 11,
							}}
							inputComponent={NumberCurrencyFormatCustom as any}
						/>
						<FormHelperText id="filled-weight-helper-text"></FormHelperText>
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
							placeholder=""
							aria-describedby="filled-weight-helper-text"
							name="buy_price"
							value={data.buy_price}
							onChange={handleChange}
							inputProps={{
								maxLength: 11,
							}}
							inputComponent={NumberCurrencyFormatCustom as any}
						/>
						<FormHelperText id="filled-weight-helper-text"></FormHelperText>
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
							placeholder=""
							aria-describedby="filled-weight-helper-text"
							name="tpp"
							value={data.tpp}
							onChange={handleChange}
							inputProps={{
								maxLength: 11,
							}}
							inputComponent={NumberCurrencyFormatCustom as any}
						/>
						<FormHelperText id="filled-weight-helper-text"></FormHelperText>
					</FormControl>
				</Box>
				<Box>
					<p className={classes.label}>Annual Taxes ($)</p>
					<FormControl
						// className={clsx(classes.margin, classes.textField)}
						variant="filled"
					>
						<FilledInput
							id="filled-adornment-weight"
							placeholder=""
							aria-describedby="filled-weight-helper-text"
							name="annual_tax"
							value={data.annual_tax}
							onChange={handleChange}
							inputProps={{
								maxLength: 11,
							}}
							inputComponent={NumberCurrencyFormatCustom as any}
						/>
						<FormHelperText id="filled-weight-helper-text"></FormHelperText>
					</FormControl>
				</Box>
				<Box>
					<p className={classes.label}>HUD Exp (%)</p>
					<FormControl
						// className={clsx(classes.margin, classes.textField)}
						variant="filled"
					>
						<FilledInput
							id="filled-adornment-weight"
							placeholder=""
							aria-describedby="filled-weight-helper-text"
							name="hud_exp"
							value={data.hud_exp}
							onChange={handleChange}
							inputProps={{
								maxLength: 11,
							}}
							inputComponent={PercentageFormat as any}
						/>
						<FormHelperText id="filled-weight-helper-text"></FormHelperText>
					</FormControl>
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
							placeholder=""
							aria-describedby="filled-weight-helper-text"
							name="profit"
							value={data.profit}
							onChange={handleChange}
							inputProps={{
								maxLength: 11,
							}}
							inputComponent={NumberCurrencyFormatCustom as any}
						/>
						<FormHelperText id="filled-weight-helper-text"></FormHelperText>
					</FormControl>
				</Box>
				<Box>
					<p className={classes.label}>ROI %</p>
					<FormControl variant="filled">
						<FilledInput
							id="filled-adornment-weight"
							placeholder=""
							aria-describedby="filled-weight-helper-text"
							name="roi"
							value={data.roi}
							onChange={handleChange}
							inputProps={{
								maxLength: 5,
							}}
							inputComponent={PercentageWithoutDecimalFormat as any}
						/>
						<FormHelperText id="filled-weight-helper-text"></FormHelperText>
					</FormControl>
				</Box>
				<Box>
					<p className={classes.label}>Hold Time</p>
					<FormControl variant="filled">
						<FilledInput
							id="filled-adornment-weight"
							value={data.hold_time}
							onChange={handleChange}
							placeholder=""
							aria-describedby="filled-weight-helper-text"
							inputProps={{
								maxLength: 5,
							}}
							inputComponent={RegularNumberWithDecimalFormat as any}
						/>
						<FormHelperText id="filled-weight-helper-text"></FormHelperText>
					</FormControl>
				</Box>
				<Box>
					<p className={classes.label}>MKT</p>
					<FormControl variant="filled">
						<FilledInput
							id="filled-adornment-weight"
							placeholder=""
							aria-describedby="filled-weight-helper-text"
							value={data.mkt}
							onChange={handleChange}
							inputProps={{
								maxLength: 5,
							}}
							inputComponent={RegularNumberWithDecimalFormat as any}
						/>
						<FormHelperText id="filled-weight-helper-text"></FormHelperText>
					</FormControl>
				</Box>
				<Box>
					<p className={classes.label}>Auction List Price ($)</p>
					<FormControl variant="filled">
						<FilledInput
							id="filled-adornment-weight"
							placeholder=""
							aria-describedby="filled-weight-helper-text"
							value={data.auction_list_price}
							onChange={handleChange}
							inputProps={{
								maxLength: 11,
							}}
							inputComponent={NumberCurrencyFormatCustom as any}
						/>
						<FormHelperText id="filled-weight-helper-text"></FormHelperText>
					</FormControl>
					<p className={classes.price} onClick={handleOpen}>
						View Price History
					</p>
					<PriceHistory open={open} handleClose={handleClose} />
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
							placeholder=""
							aria-describedby="filled-weight-helper-text"
							inputProps={{
								"aria-label": "weight",
							}}
						/>
						<FormHelperText id="filled-weight-helper-text"></FormHelperText>
					</FormControl>
					<p className={classes.price} onClick={handleShow}>
						View Bid History
					</p>
					<BidHistory open={show} handleClose={handleCloseShow} />
				</Box>
			</div>
			<div className={classes.section}>
				<div style={{ width: "67%", marginTop: "20px" }}>
					<div className={classes.sectionDiv}>
						<Box>
							<p className={classes.label}>Auction Agent</p>
							<FormControl
								// className={clsx(classes.margin, classes.textField)}
								variant="filled"
							>
								<FilledInput
									id="filled-adornment-weight"
									value={data.auction_agent}
									onChange={handleChange}
									name="auction_agent"
									placeholder=""
									aria-describedby="filled-weight-helper-text"
									inputProps={{
										"aria-label": "weight",
									}}
								/>
								<FormHelperText id="filled-weight-helper-text"></FormHelperText>
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
									value={data.auction_agent_number}
									onChange={handleChange}
									name="auction_agent_number"
									placeholder=""
									aria-describedby="filled-weight-helper-text"
									inputProps={{
										"aria-label": "weight",
									}}
									inputComponent={PhoneNumberFormat as any}
								/>
								<FormHelperText id="filled-weight-helper-text"></FormHelperText>
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
									value={data.auction_agent_email}
									onChange={handleChange}
									name="auction_agent_email"
									type="email"
									placeholder=""
									aria-describedby="filled-weight-helper-text"
									inputProps={{
										"aria-label": "weight",
									}}
								/>
								<FormHelperText id="filled-weight-helper-text"></FormHelperText>
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
									value={data.list_agent}
									onChange={handleChange}
									name="list_agent"
									placeholder=""
									aria-describedby="filled-weight-helper-text"
									inputProps={{
										"aria-label": "weight",
									}}
								/>
								<FormHelperText id="filled-weight-helper-text"></FormHelperText>
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
									value={data.list_agent_number}
									onChange={handleChange}
									name="list_agent_number"
									placeholder=""
									aria-describedby="filled-weight-helper-text"
									inputProps={{
										"aria-label": "weight",
									}}
									inputComponent={PhoneNumberFormat as any}
								/>
								<FormHelperText id="filled-weight-helper-text"></FormHelperText>
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
									value={data.list_agent_email}
									onChange={handleChange}
									name="list_agent_email"
									type="email"
									placeholder=""
									aria-describedby="filled-weight-helper-text"
									inputProps={{
										"aria-label": "weight",
									}}
								/>
								<FormHelperText id="filled-weight-helper-text"></FormHelperText>
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
				<Box width="33%" mt={5}>
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
