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
import AutoComplete from "../../ContactsAutocomplete";
import PhotoBox from "./PhotoBox";
import pix1 from "../../../assets/images/pix1.png";
import pix2 from "../../../assets/images/pix2.png";
import pix3 from "../../../assets/images/pix3.png";
import pix4 from "../../../assets/images/pix4.png";
import pix5 from "../../../assets/images/pix5.png";
import pix6 from "../../../assets/images/pix6.png";
import { PropertyRecord } from "../../../components/Types";
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
	box: {
		cursor: "pointer",
		padding: "2px 0px 2px 8px",
		// position:"absolute",
		// zIn
		"&:hover": {
			backgroundColor: "#f7f7f7",
		},
	},
}));

interface BuyProps {
	options: any[];
	rowData: PropertyRecord;
}

const Buy = ({ options, rowData }: BuyProps) => {
	const classes = useStyles();

	console.log(rowData);

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
		sqft: rowData.square_feet,
		br: "",
		ba: "",
		lot: rowData.lot_size,
		year: "",
		resale: rowData.resale_price,
		rehab: "",
		buy_price: rowData.buy_price,
		tpp: "",
		annual_tax: "",
		hud_exp: rowData.hud_percent,
		profit: rowData.profit,
		roi: rowData.return_on_investment,
		hold_time: "",
		mkt: "",
		auction_list_price: rowData.auction_list_price,
		high_bid: "",
		auction_agent: "",
		list_agent: "",
		auction_agent_number: "",
		auction_agent_email: "",
		list_agent_number: "",
		list_agent_email: "",
		reason: "",
		access: "",
		occupancy: "",
		product: "",
		status: rowData.property_status,
		property_type: "",
		
	});



	const [optionList, setOptionList] = useState<any[]>([]);
	let optionData;
	let filteredOption;

	//state handler for autocomplete
	const [openDiv, setOpenDiv] = useState(false);

	const handleAuctionChange = (event: React.ChangeEvent<any>) => {
		const { name, value } = event.target;
		setOpenDiv(true);
		setData({
			...data,
			[name]: value,
		});

		filteredOption = options.filter((optionName: any) =>
			optionName.contact_first_name.toLowerCase().includes(event.target.value)
		);

		setOptionList(filteredOption);
	};

	if (optionList?.length > 0 && data.auction_agent != "") {
		optionData = optionList?.map((option: any) => (
			<Box
				className={classes.box}
				key={option._id}
				onClick={() => {
					setData({
						...data,
						auction_agent: option.contact_first_name,
						auction_agent_email: option.contact_email,
						auction_agent_number: option.contact_cell_phone,
					});
					setOpenDiv(false);
				}}
			>
				{option.contact_first_name}
			</Box>
		));
	} else if (optionList?.length == 0 && data.auction_agent != "") {
		optionData = (
			<Box display="flex" py={2}>
				<Box className={classes.box} my="auto" mr={2}>
					No options
				</Box>
				<Button
					variant="contained"
					disableElevation
					color="primary"
					style={{ color: "#fff" }}
				>
					Add Contact
				</Button>
			</Box>
		);
	}

	//onchange handler for input fields
	const handleChange = (event: React.ChangeEvent<any>) => {
		const { name, value } = event.target;
		setData({
			...data,
			[name]: value,
		});
	};

	//function to get current year
	const currentYear = () => {
		let date = new Date();
		let presentYear = date.getFullYear();
		return presentYear;
	};

	//input validations that needs to be reviewed *BA, LOT, Year, HUDExp, INTEREST
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
						>
							<option aria-label="None" value="" />
							<option value="NEW_ASSET">NEW ASSET</option>
							<option value="NOT_REVIEWED">NOT REVIEWED</option>
							<option value="NEW_LEAD">NEW LEAD</option>
							<option value="RE_REVIEW">RE-REVIEW</option>
							<option value="NOT_INTERESTED">NOT INTERESTED</option>
							<option value="CALL_AGENT">CALL AGENT</option>
							<option value="PENDING_INTEL">PENDING INTEL</option>
							<option value="FOLLOW_UP">FOLLOW UP</option>
							<option value="BID_PENDING">BID PENDING</option>
							<option value="PROXY">PROXY</option>
							<option value="BID">BID</option>
							<option value="WON">WON</option>
							<option value="REJECTED">REJECTED</option>
							<option value="SALE_CANCELLED">SALE CANCELLED</option>
							<option value="LOST">LOST</option>
							<option value="AUCTION_SOLD">AUCTION SOLD</option>
							<option value="IN_CLOSING_B">IN CLOSING (B)</option>
							<option value="CLOSED">CLOSED</option>
							<option value="OCCUPIED">OCCUPIED</option>
							<option value="PENDING_VACANCY">PENDING VACANCY</option>
							<option value="IN_EVICTION">IN EVICTION</option>
							<option value="PENDING_BID">PENDING BID</option>
							<option value="BEING_REHABBED">BEING REHABBED</option>
							<option value="LISTED">LISTED</option>
							<option value="IN_CLOSING_S">IN CLOSING (S)</option>
							<option value="SOLD">SOLD</option>
							<option value="NONE">NONE</option>
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
							<option value="no_spread">No Spread</option>
							<option value="too_rural">Too Rural</option>
							<option value="too_much_work">Too Much Work</option>
							<option value="land_only">Land Only</option>
							<option value="hard_eviction">Hard Eviction</option>
							<option value="teardown">Teardown</option>
							<option value="55+">55+</option>
							<option value="raised_home">Raised Home</option>
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
							placeholder=""
							aria-describedby="filled-weight-helper-text"
							name="year"
							type="number"
							value={data.year}
							onChange={handleChange}
							inputProps={{
								min: 1800,
								max: currentYear(),
								maxLength: 4, //TODO - Year format is not perfectly done, remember to come back to it.
							}}
							// inputComponent={YearFormat as any}
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
							placeholder=""
							aria-describedby="filled-weight-helper-text"
							name="hud_exp"
							value={data.hud_exp}
							onChange={handleChange}
							inputProps={{
								maxLength: 6,
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
									value={data.auction_agent}
									onChange={handleAuctionChange}
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
					{openDiv ? (
						<AutoComplete
							options={options}
							input={data.auction_agent}
							optionData={optionData}
							optionList={optionList}
						/>
					) : (
						""
					)}
					<div className={classes.sectionDiv}>
						<Box>
							<p className={classes.label}>List Agent</p>
							<FormControl
								// className={clsx(classes.margin, classes.textField)}
								variant="filled"
							>
								<FilledInput
									value={data.list_agent}
									onChange={handleAuctionChange}
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
					{/* {openDiv ? (
						<AutoComplete
							options={options}
							input={data.auction_agent}
							optionData={optionData}
							optionList={optionList}
						/>
					) : (
						""
					)} */}
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
