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
import {
	DisplayOptions,
	NoOptions,
} from "../../ContactsAutocomplete/AutocompleteComponent";
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
		fontSize: "12px",
	},
	div: {
		// display: "grid",
		// gridTemplateColumns: "repeat(6, 1fr)",
		// gap: "12px",
		display: "flex",
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
		"&:hover": {
			backgroundColor: "#f7f7f7",
		},
	},
	input: {
		fontSize: "12px",
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

	//state handler for auction agent autocomplete
	const [openDiv, setOpenDiv] = useState(false);

	//state handler for list agent autocomplete
	const [openListDiv, setOpenListDiv] = useState(false);

	//onchange handler for auction agent
	const handleAuctionChange = (event: React.ChangeEvent<any>) => {
		const { value } = event.target;
		setOpenDiv(true);
		setData({
			...data,
			auction_agent: value,
		});

		filteredOption = options.filter((optionName: any) =>
			optionName.contact_first_name.toLowerCase().includes(event.target.value)
		);
		setOptionList(filteredOption);
	};

	//autocomplete function for auction agent
	if (optionList?.length > 0 && data.auction_agent != "") {
		optionData = optionList?.map((option: any) => (
			<DisplayOptions
				key={option._id}
				name={option.contact_first_name}
				handleClick={() => {
					setData({
						...data,
						auction_agent: option.contact_first_name,
						auction_agent_email: option.contact_email,
						auction_agent_number: option.contact_cell_phone,
					});
					setOpenDiv(false);
				}}
			/>
		));
	} else if (optionList?.length == 0 && data.auction_agent != "") {
		optionData = <NoOptions />;
	}
	//===========end of auction agent onchange========================

	//onchange handler for list agent
	const handleListAgentChange = (event: React.ChangeEvent<any>) => {
		const { value } = event.target;
		setOpenListDiv(true);
		setData({
			...data,
			list_agent: value,
		});

		filteredOption = options.filter((optionName: any) =>
			optionName.contact_first_name.toLowerCase().includes(event.target.value)
		);
		setOptionList(filteredOption);
	};

	//autocomplete function for list agent
	if (optionList?.length > 0 && data.list_agent != "") {
		optionData = optionList?.map((option: any) => (
			<DisplayOptions
				key={option._id}
				name={option.contact_first_name}
				handleClick={() => {
					setData({
						...data,
						list_agent: option.contact_first_name,
						list_agent_email: option.contact_email,
						list_agent_number: option.contact_cell_phone,
					});
					setOpenListDiv(false);
				}}
			/>
		));
	} else if (optionList?.length == 0 && data.list_agent != "") {
		optionData = <NoOptions />;
	}
	//===========end of list agent onchange========================

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
				<Box width="320px" marginRight={1}>
					<p className={classes.label}>Status</p>
					<FormControl
						variant="filled"
					>
						<Select
							native
							value={data.status}
							onChange={handleChange}
							name="status"
							className={classes.input}
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
				<Box width="280px" marginRight={1}>
					<p className={classes.label}>Reason</p>
					<FormControl
						
						variant="filled"
					>
						<Select
							native
							value={data.reason}
							onChange={handleChange}
							name="reason"
							className={classes.input}
							
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
				<Box marginRight={1}>
					<p className={classes.label}>Access?</p>
					<FormControl
					
						variant="filled"
					>
						<Select
							native
							value={data.access}
							onChange={handleChange}
							name="access"
							className={classes.input}
						
							placeholder=""
						>
							<option aria-label="None" value="" />
							<option value={10}>Yes</option>
							<option value={20}>No</option>
						</Select>
						<FormHelperText id="filled-weight-helper-text"></FormHelperText>
					</FormControl>
				</Box>
				<Box marginRight={1}>
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
							
							className={classes.input}
						/>
						<FormHelperText id="filled-weight-helper-text"></FormHelperText>
					</FormControl>
				</Box>
				<Box width="200px" marginRight={1}>
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
							className={classes.input}
							placeholder=""
						>
							<option aria-label="None" value="" />
							<option value={10}>Occupied</option>
							<option value={20}>Vacant</option>
						</Select>
						<FormHelperText id="filled-weight-helper-text"></FormHelperText>
					</FormControl>
				</Box>

				<Box marginRight={1} width="200px">
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
							className={classes.input}
						/>
						<FormHelperText id="filled-weight-helper-text"></FormHelperText>
					</FormControl>
				</Box>
				<Box marginRight={1}>
					<p className={classes.label}>SQFT</p>
					<FormControl
						// className={clsx(classes.margin, classes.textField)}
						variant="filled"
					>
						<FilledInput
							className={classes.input}
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
				<Box width="60px" marginRight={1}>
					<p className={classes.label}>BR</p>
					<FormControl
						// className={clsx(classes.margin, classes.textField)}
						variant="filled"
					>
						<FilledInput
							className={classes.input}
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
				<Box width="80px" marginRight={1}>
					<p className={classes.label}>BA</p>
					<FormControl
					
						variant="filled"
					>
						<FilledInput
							placeholder=""
							className={classes.input}
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
				<Box marginRight={1} width="100px">
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
							className={classes.input}
							inputComponent={RegularNumberWithDecimalFormat as any}
						/>
						<FormHelperText id="filled-weight-helper-text"></FormHelperText>
					</FormControl>
				</Box>
				<Box marginRight={1} width="120px">
					<p className={classes.label}>Year</p>
					<FormControl
					
						variant="filled"
					>
						<FilledInput
							placeholder=""
							name="year"
							type="number"
							value={data.year}
							onChange={handleChange}
							inputProps={{
								min: 1800,
								max: currentYear(),
								maxLength: 4, //TODO - Year format is not perfectly done, remember to come back to it.
							}}
							className={classes.input}
							// inputComponent={YearFormat as any}
						/>
						<FormHelperText id="filled-weight-helper-text"></FormHelperText>
					</FormControl>
				</Box>
				<Box marginRight={1}>
					<p className={classes.label}>Hold Time</p>
					<FormControl variant="filled">
						<FilledInput
							value={data.hold_time}
							onChange={handleChange}
							placeholder=""
							className={classes.input}
							inputProps={{
								maxLength: 5,
							}}
							inputComponent={RegularNumberWithDecimalFormat as any}
						/>
						<FormHelperText id="filled-weight-helper-text"></FormHelperText>
					</FormControl>
				</Box>
				<Box marginRight={1}>
					<p className={classes.label}>MKT</p>
					<FormControl variant="filled">
						<FilledInput
							placeholder=""
							className={classes.input}
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
				<Box marginRight={1} width="120px">
					<p className={classes.label}>HUD Exp</p>
					<FormControl
						// className={clsx(classes.margin, classes.textField)}
						variant="filled"
					>
						<FilledInput
							placeholder=""
							className={classes.input}
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
				<Box marginRight={1}>
					<p className={classes.label}>Profit ($)</p>
					<FormControl
					
						variant="filled"
					>
						<FilledInput
							placeholder=""
							className={classes.input}
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
				<Box width="100px">
					<p className={classes.label}>ROI %</p>
					<FormControl variant="filled">
						<FilledInput
							placeholder=""
							className={classes.input}
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
			</div>

			<div className={classes.section}>
				<div style={{ width: "67%", marginTop: "20px", marginRight: "30px" }}>
					<div className={classes.div}>
						<Box marginRight={1} width="200px">
							<p className={classes.label}>Auction LP</p>
							<FormControl variant="filled">
								<FilledInput
									placeholder=""
									className={classes.input}
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
								Price History
							</p>
							<PriceHistory open={open} handleClose={handleClose} />
						</Box>
						<Box>
							<p className={classes.label}>High Bid</p>
							<FormControl
								
								variant="filled"
							>
								<FilledInput
									value={data.high_bid}
									onChange={handleChange}
									placeholder=""
									className={classes.input}
									inputProps={{
										maxLength: 11,
									}}
									inputComponent={NumberCurrencyFormatCustom as any}
								/>
								<FormHelperText id="filled-weight-helper-text"></FormHelperText>
							</FormControl>
							<p className={classes.price} onClick={handleShow}>
								Bid History
							</p>
							<BidHistory open={show} handleClose={handleCloseShow} />
						</Box>
						<Box marginX={1}>
							<p className={classes.label}>Annual Taxes</p>
							<FormControl
								
								variant="filled"
							>
								<FilledInput
									placeholder=""
									className={classes.input}
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
						<Box marginRight={1}>
							<p className={classes.label}>ST RSV</p>
							<FormControl
								// className={clsx(classes.margin, classes.textField)}
								variant="filled"
							>
								<FilledInput
									value={data.stRsv}
									name="stRsv"
									className={classes.input}
									onChange={handleChange}
									placeholder=""
									inputComponent={NumberCurrencyFormatCustom as any}
								/>
								<FormHelperText id="filled-weight-helper-text"></FormHelperText>
							</FormControl>
						</Box>
						<Box marginRight={1}>
							<p className={classes.label}>Buy Price</p>
							<FormControl
								
								variant="filled"
							>
								<FilledInput
									placeholder=""
									className={classes.input}
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
						<Box marginRight={1}>
							<p className={classes.label}>TPP</p>
							<FormControl
								
								variant="filled"
							>
								<FilledInput
									placeholder=""
									className={classes.input}
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
						<Box marginRight={1} width="240px">
							<p className={classes.label}>Rehab</p>
							<FormControl
							
								variant="filled"
							>
								<FilledInput
									placeholder=""
									className={classes.input}
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
							<FormControlLabel
								control={
									<Checkbox
										// checked={state.checkedB}
										// onChange={handleChange}
										name="checkedB"
										color="primary"
										size="small"
									/>
								}
								style={{ fontSize: "8px" }}
								label="Bid Confirm"
							/>
						</Box>
						<Box width="240px">
							<p className={classes.label}>Resale</p>
							<FormControl
							
								variant="filled"
							>
								<FilledInput
									placeholder=""
									className={classes.input}
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
										size="small"
									/>
								}
								style={{ fontSize: "8px" }}
								label="Agent Confirm"
							/>
						</Box>
					</div>
					<div style={{ width: "100%" }}>
						<Box width="90%" mb={1}>
							<p className={classes.label}>Note</p>
							<FormControl
								// className={clsx(classes.margin, classes.textField)}
								variant="filled"
								className={classes.input}
							>
								<TextField
									id="filled-multiline-static"
									multiline
									rows={3}
									className={classes.input}
									// defaultValue="Default Value"
									variant="filled"
								/>
								<FormHelperText id="filled-weight-helper-text"></FormHelperText>
							</FormControl>
						</Box>
					</div>
					<div style={{ width: "90%" }}>
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
										className={classes.input}
									/>
									<FormHelperText id="filled-weight-helper-text"></FormHelperText>
								</FormControl>
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
										className={classes.input}
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
										className={classes.input}
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
						<div className={classes.sectionDiv}>
							<Box>
								<p className={classes.label}>List Agent</p>
								<FormControl
									// className={clsx(classes.margin, classes.textField)}
									variant="filled"
								>
									<FilledInput
										value={data.list_agent}
										onChange={handleListAgentChange}
										name="list_agent"
										placeholder=""
										className={classes.input}
									/>
									<FormHelperText id="filled-weight-helper-text"></FormHelperText>
								</FormControl>
								{openListDiv ? (
									<AutoComplete
										options={options}
										input={data.list_agent}
										optionData={optionData}
										optionList={optionList}
									/>
								) : (
									""
								)}
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
										className={classes.input}
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
										className={classes.input}
									/>
									<FormHelperText id="filled-weight-helper-text"></FormHelperText>
								</FormControl>
							</Box>
						</div>
						{/* {openListDiv ? (
						<AutoComplete
							options={options}
							input={data.list_agent}
							optionData={optionData}
							optionList={optionList}
						/>
					) : (
						""
					)} */}
					</div>
					{/* <div> */}
					<div className={classes.buttonStack} style={{ width: "100%" }}>
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
					{/* </div> */}
				</div>

				<Box width="33%" mt={5}>
					<PhotoBox images={images} />
				</Box>
			</div>

			<div className={classes.section}></div>
			<Box width="100%" display="flex" justifyContent="space-between">
				<History property_id={rowData?._id} />
				<Document />
			</Box>
		</>
	);
};
export default Buy;
