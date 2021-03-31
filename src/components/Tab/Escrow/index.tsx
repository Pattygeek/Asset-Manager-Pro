import makeStyles from "@material-ui/core/styles/makeStyles";
import Box from "@material-ui/core/Box";
import TextField from "@material-ui/core/TextField";
import FilledInput from "@material-ui/core/FilledInput";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import FormHelperText from "@material-ui/core/FormHelperText";
import Button from "@material-ui/core/Button";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import DoneOutlinedIcon from "@material-ui/icons/DoneOutlined";

//assets & components
import { ReactComponent as FileIcon } from "../../../assets/icons/file.svg";
import History from "../History";
import Document from "../Document";
import EscrowPhoto from "./EscrowPhoto";
import pix1 from "../../../assets/images/pix1.png";
import pix2 from "../../../assets/images/pix2.png";
import pix3 from "../../../assets/images/pix3.png";
import pix4 from "../../../assets/images/pix4.png";
import pix5 from "../../../assets/images/pix5.png";
import pix6 from "../../../assets/images/pix6.png";
import {
	NumberCurrencyFormatCustom,
	PercentageFormat,
	PercentageWithoutDecimalFormat,
	PhoneNumberFormat,
} from "../../../utils/formats";
import { PropertyRecord } from "../../../components/Types";
import {
	DisplayOptions,
	NoOptions,
} from "../../ContactsAutocomplete/AutocompleteComponent";
import AutoComplete from "../../ContactsAutocomplete";
import { red } from "@material-ui/core/colors";
import DateFnsUtils from "@date-io/date-fns";
import {
	MuiPickersUtilsProvider,
	KeyboardTimePicker,
	KeyboardDatePicker,
} from "@material-ui/pickers";
import { useState } from "react";

const useStyles = makeStyles(() => ({
	label: {
		marginBottom: "2px",
		fontWeight: 500,
		fontSize: "12px",
	},
	input: {
		fontSize: "12px",
	},
	div: {
		display: "flex",
		// gridTemplateColumns: "repeat(6, 1fr)",
		// gap: "12px",
	},
	grid: {
		display: "grid",
		gridTemplateColumns: "repeat(6, 1fr)",
		gap: "8px",
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
	datePicker: {
		position: "relative",
		backgroundColor: "rgba(0, 0, 0, 0.09)",
		padding: "4px 0px 0px 12px",
		borderTopLeftRadius: "4px",
		borderTopRightRadius: "4px",
		fontSize: "12px",
		"&:before": {
			borderBottom: `2px solid #2196f3`,
			left: 0,
			bottom: 0,
			// Doing the other way around crash on IE 11 "''" https://github.com/cssinjs/jss/issues/242
			content: '"\\00a0"',
			position: "absolute",
			right: 0,
			pointerEvents: "none", // Transparent to the hover style.
		},

		underline: {
			"&:after": {
				borderBottom: `2px solid #2196f3`,
				left: 0,
				bottom: 0,
				// Doing the other way around crash on IE 11 "''" https://github.com/cssinjs/jss/issues/242
				content: '""',
				position: "absolute",
				right: 0,
				transform: "scaleX(0)",
				// transition: theme.transitions.create("transform", {
				// 	duration: theme.transitions.duration.shorter,
				// 	easing: theme.transitions.easing.easeOut,
				// }),
				pointerEvents: "none", // Transparent to the hover style.
			},
			"&$focused:after": {
				transform: "scaleX(1)",
			},
			"&$error:after": {
				borderBottomColor: red.A400,
				transform: "scaleX(1)", // error is always underlined in red
			},
			"&:before": {
				borderBottom: `2px solid #2196f3`,
				left: 0,
				bottom: 0,
				// Doing the other way around crash on IE 11 "''" https://github.com/cssinjs/jss/issues/242
				content: '"\\00a0"',
				position: "absolute",
				right: 0,
				// transition: theme.transitions.create("border-bottom-color", {
				// 	duration: theme.transitions.duration.shorter,
				// }),
				pointerEvents: "none", // Transparent to the hover style.
			},
			"&:hover:before": {
				borderBottom: `2px solid #2196f3`,
			},
			"&$disabled:before": {
				borderBottomStyle: "dotted",
			},
		},
	},
}));

interface BuyProps {
	options: any[];
	rowData: PropertyRecord;
}

const Index = ({ options, rowData }: BuyProps) => {
	const classes = useStyles();

	const images = [pix1, pix2, pix3, pix4, pix5, pix6];

	const [data, setData] = useState({
		status: rowData.property_status,
		tpp: "",
		potential_rehab: "",
		potential_lp: "",
		potential_profit: "",
		potential_roi: "",
		est_coe: "",
		occupancy: "",
		property_access: "",
		property_received: "",
		co_needed: "",
		co_completed: "",
		oil_swept: "",
		sewer_checked: "",
		list_agent: "",
		list_agent_number: "",
		list_agent_email: "",
		auction_agent: "",
		auction_agent_number: "",
		auction_agent_email: "",
		financing: "",
		loan_amount: "",
		appraisal_ordered: "",
		appraisal_date_ordered: "",
		title_received: "",
		deed_received: "",
		final_work_through: "",
		ready_to_close: "",
		bought_date: "",
		note: "",
		down_payment: "",
		loan_interest: "",
		contractor_received: "",
	});

	//onchange handler for input fields
	const handleChange = (event: React.ChangeEvent<any>) => {
		const { name, value } = event.target;
		setData({
			...data,
			[name]: value,
		});
	};

	//state and change handler for date
	const [estDate, setEstDate] = useState<any>(new Date());

	const handleEstDateChange = (date: Date | null) => {
		setEstDate(date);
	};

	const [appraisalDate, setAppraisalDate] = useState<any>(new Date());

	const handleAppraisalDateChange = (date: Date | null) => {
		setAppraisalDate(date);
	};

	const [boughtDate, setBoughtDate] = useState<any>(new Date());

	const handleBoughtDateChange = (date: Date | null) => {
		setBoughtDate(date);
	};

	//===============end of date handler===================

	const [optionList, setOptionList] = useState<any[]>([]);
	const [listAgentOptions, setListAgentOptions] = useState<any[]>([]);
	let optionData;
	let filteredOption;

	//state handler for auction agent autocomplete
	const [openDiv, setOpenDiv] = useState(false);

	//state handler for list agent autocomplete
	const [openListDiv, setOpenListDiv] = useState(false);

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
		setListAgentOptions(filteredOption);
	};

	//autocomplete function for list agent
	if (listAgentOptions?.length > 0 && data.list_agent != "") {
		optionData = listAgentOptions?.map((option: any) => (
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
	} else if (listAgentOptions?.length == 0 && data.list_agent != "") {
		optionData = <NoOptions />;
	}
	//===========end of list agent onchange=========================

	//onchange handler for auction agent
	const handleAuctionChange = (evt: React.ChangeEvent<any>) => {
		const { value } = evt.target;
		setOpenDiv(true);
		setData({
			...data,
			auction_agent: value,
		});

		filteredOption = options.filter((optionName: any) =>
			optionName.contact_first_name.toLowerCase().includes(evt.target.value)
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

	return (
		<>
			<MuiPickersUtilsProvider utils={DateFnsUtils}>
				<div className={classes.div}>
					<div style={{ width: "69%", marginTop: "10px", marginRight: "20px" }}>
						<div className={classes.div}>
							<Box width="200px">
								<p className={classes.label}>Status</p>
								<FormControl variant="filled">
									<Select
										native
										value={data.status}
										onChange={handleChange}
										name="status"
										className={classes.input}
										placeholder=""
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
							<Box marginX={1}>
								<p className={classes.label}>TPP</p>
								<FormControl variant="filled">
									<FilledInput
										name="tpp"
										value={data.tpp}
										onChange={handleChange}
										className={classes.input}
										inputProps={{
											maxLength: 11,
										}}
										inputComponent={NumberCurrencyFormatCustom as any}
									/>
									<FormHelperText id="filled-weight-helper-text"></FormHelperText>
								</FormControl>
							</Box>
							<Box marginRight={1}>
								<p className={classes.label}>Pot. Rehab</p>
								<FormControl variant="filled">
									<FilledInput
										name="potential_rehab"
										value={data.potential_rehab}
										onChange={handleChange}
										className={classes.input}
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
									style={{ fontSize: "10px" }}
									label="Bid Confirm"
								/>
							</Box>
							<Box marginRight={1}>
								<p className={classes.label}>Pot. LP</p>
								<FormControl
									// className={clsx(classes.margin, classes.textField)}
									variant="filled"
								>
									<FilledInput
										name="potential_lp"
										value={data.potential_lp}
										onChange={handleChange}
										className={classes.input}
										inputProps={{
											maxLength: 11,
										}}
										inputComponent={NumberCurrencyFormatCustom as any}
									/>
									<FormHelperText id="filled-weight-helper-text"></FormHelperText>
								</FormControl>
							</Box>
							<Box marginRight={1}>
								<p className={classes.label}>Pot. Profit</p>
								<FormControl
									// className={clsx(classes.margin, classes.textField)}
									variant="filled"
								>
									<FilledInput
										name="potential_profit"
										className={classes.input}
										value={data.potential_profit}
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
								<p className={classes.label}>Pot. ROI</p>
								<FormControl
									// className={clsx(classes.margin, classes.textField)}
									variant="filled"
								>
									<FilledInput
										name="potential_roi"
										className={classes.input}
										value={data.potential_roi}
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
								<p className={classes.label}>EST COE</p>
								<FormControl
									// className={clsx(classes.margin, classes.textField)}
									variant="filled"
								>
									<KeyboardDatePicker
										disableToolbar
										variant="inline"
										format="MM/dd/yyyy"
										margin="normal"
										id="date-picker-inline"
										value={estDate}
										onChange={handleEstDateChange}
										KeyboardButtonProps={{
											"aria-label": "change date",
										}}
										InputProps={{
											classes: {
												root: classes.datePicker,
											},
										}}
									/>
									<FormHelperText id="filled-weight-helper-text"></FormHelperText>
								</FormControl>
							</Box>
						</div>
						<Box width="85%" mb={3}>
							<p className={classes.label}>Note</p>
							<FormControl
								// className={clsx(classes.margin, classes.textField)}
								variant="filled"
							>
								<TextField
									id="filled-multiline-static"
									name="note"
									value={data.note}
									onChange={handleChange}
									multiline
									rows={3}
									// defaultValue="Default Value"
									variant="filled"
								/>
								<FormHelperText id="filled-weight-helper-text"></FormHelperText>
							</FormControl>
						</Box>
						<div className={classes.div} style={{ width: "100%" }}>
							<Box width="90px" marginRight={1}>
								<p className={classes.label}>CO Needed</p>
								<FormControl
									// className={clsx(classes.margin, classes.textField)}
									variant="filled"
								>
									<Select
										native
										value={data.co_needed}
										onChange={handleChange}
										name="co_needed"
										placeholder=""
										className={classes.input}
									>
										<option aria-label="None" value="" />
										<option value="n/a">N/A</option>
										<option value="needed">Needed</option>
										<option value="completed">Completed</option>
									</Select>
									<FormHelperText id="filled-weight-helper-text"></FormHelperText>
								</FormControl>
							</Box>
							<Box marginRight={1} width="50px">
								<p className={classes.label}>Oil ✓</p>

								<FormControl
									// className={clsx(classes.margin, classes.textField)}
									variant="filled"
								>
									<Select
										native
										value={data.oil_swept}
										onChange={handleChange}
										name="oil_swept"
										placeholder=""
										className={classes.input}
									>
										<option aria-label="None" value="" />
										<option value={10}>Yes</option>
										<option value={20}>No</option>
									</Select>
									<FormHelperText id="filled-weight-helper-text"></FormHelperText>
								</FormControl>
							</Box>
							<Box marginRight={1} width="90px">
								<p className={classes.label}>Sewer ✓</p>
								<FormControl variant="filled">
									<Select
										native
										value={data.sewer_checked}
										onChange={handleChange}
										name="sewer_checked"
										className={classes.input}
										placeholder=""
									>
										<option aria-label="None" value="" />
										<option value="N/A">N/A</option>
										<option value="needed">Needed</option>
										<option value="completed">Completed</option>
									</Select>
									<FormHelperText id="filled-weight-helper-text"></FormHelperText>
								</FormControl>
							</Box>
							<Box marginRight={1}>
								<p className={classes.label}>Financing</p>
								<FormControl
									// className={clsx(classes.margin, classes.textField)}
									variant="filled"
								>
									<Select
										native
										value={data.financing}
										onChange={handleChange}
										name="financing"
										className={classes.input}
										placeholder=""
									>
										<option aria-label="None" value="" />
										<option value={10}>Loan</option>
										<option value={20}>Cash</option>
									</Select>
									<FormHelperText id="filled-weight-helper-text"></FormHelperText>
								</FormControl>
							</Box>
							<Box marginRight={1} width="100px">
								<p className={classes.label}>Loan $</p>
								<FormControl
									// className={clsx(classes.margin, classes.textField)}
									variant="filled"
								>
									<FilledInput
										value={data.loan_amount}
										onChange={handleChange}
										name="loan_amount"
										placeholder=""
										className={classes.input}
										inputComponent={NumberCurrencyFormatCustom as any}
									/>
									<FormHelperText id="filled-weight-helper-text"></FormHelperText>
								</FormControl>
							</Box>
							<Box marginRight={1} width="100px">
								<p className={classes.label}>Down $</p>
								<FormControl
									// className={clsx(classes.margin, classes.textField)}
									variant="filled"
								>
									<FilledInput
										value={data.down_payment}
										onChange={handleChange}
										name="down_payment"
										placeholder=""
										className={classes.input}
										inputComponent={NumberCurrencyFormatCustom as any}
									/>
									<FormHelperText id="filled-weight-helper-text"></FormHelperText>
								</FormControl>
							</Box>
							<Box marginRight={1} width="80px">
								<p className={classes.label}>Interest %</p>
								<FormControl
									// className={clsx(classes.margin, classes.textField)}
									variant="filled"
								>
									<FilledInput
										value={data.loan_interest}
										onChange={handleChange}
										name="loan_interest"
										placeholder=""
										className={classes.input}
										inputProps={{
											maxLength: 6,
										}}
										inputComponent={PercentageFormat as any}
									/>
									<FormHelperText id="filled-weight-helper-text"></FormHelperText>
								</FormControl>
							</Box>
							<Box marginRight={1} width="70px">
								<p className={classes.label}>Appraisal</p>
								<FormControl
									// className={clsx(classes.margin, classes.textField)}
									variant="filled"
								>
									<Select
										native
										value={data.appraisal_ordered}
										onChange={handleChange}
										name="appraisal_ordered"
										className={classes.input}
										placeholder=""
									>
										<option aria-label="None" value="" />
										<option value="N/A">N/A</option>
										<option value="ordered">Ordered</option>
									</Select>
									<FormHelperText id="filled-weight-helper-text"></FormHelperText>
								</FormControl>
							</Box>
							<Box width="150px" marginRight={2}>
								<p className={classes.label}>Appraisal Date Ordered</p>
								<FormControl
									// className={clsx(classes.margin, classes.textField)}
									variant="filled"
								>
									<KeyboardDatePicker
										disableToolbar
										variant="inline"
										format="MM/dd/yyyy"
										margin="normal"
										id="date-picker-inline"
										// label="Date picker inline"
										name="appraisal"
										value={appraisalDate}
										onChange={handleAppraisalDateChange}
										KeyboardButtonProps={{
											"aria-label": "change date",
										}}
										InputProps={{
											classes: {
												root: classes.datePicker,
											},
										}}
									/>
									<FormHelperText id="filled-weight-helper-text"></FormHelperText>
								</FormControl>
							</Box>
							<Box marginRight={1} width="80px">
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
										placeholder=""
										className={classes.input}
									>
										<option aria-label="None" value="" />
										<option value={10}>Occupied</option>
										<option value={20}>Vacant</option>
									</Select>
									<FormHelperText id="filled-weight-helper-text"></FormHelperText>
								</FormControl>
							</Box>
						</div>
					</div>
					<Box width="29%" mt={3} mb={2}>
						<EscrowPhoto images={images} />
					</Box>
				</div>
				{/* 
				<div className={classes.section}>
					<div style={{ width: "69%", marginTop: "10px" }}>
						<div className={classes.sectionDiv}>
							<Box>
								<p className={classes.label}>Contractor Received?</p>
								<FormControl
									// className={clsx(classes.margin, classes.textField)}
									variant="filled"
								>
									<Select
										native
										value={data.contractor_received}
										onChange={handleChange}
										name="contractor_received"
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
								<p className={classes.label}>C.O. Completed</p>
								<FormControl
									// className={clsx(classes.margin, classes.textField)}
									variant="filled"
								>
									<Select
										native
										value={data.co_completed}
										onChange={handleChange}
										name="co_completed"
										placeholder=""
									>
										<option aria-label="None" value="" />
										<option value={10}>Yes</option>
										<option value={20}>No</option>
									</Select>
									<FormHelperText id="filled-weight-helper-text"></FormHelperText>
								</FormControl>
							</Box>
						</div>
					</div>
				</div> */}

				<div className={classes.grid}>
					<Box marginRight={2}>
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
								aria-describedby="filled-weight-helper-text"
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

					<Box marginRight={2}>
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
					<Box marginRight={2}>
						<p className={classes.label}>List Agent Email</p>
						<FormControl
							// className={clsx(classes.margin, classes.textField)}
							variant="filled"
						>
							<FilledInput
								value={data.list_agent_email}
								onChange={handleChange}
								name="list_agent_email"
								placeholder=""
								aria-describedby="filled-weight-helper-text"
								inputProps={{
									"aria-label": "weight",
								}}
							/>
							<FormHelperText id="filled-weight-helper-text"></FormHelperText>
						</FormControl>
					</Box>
					<Box marginRight={2}>
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
					<Box marginRight={2}>
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
				<div className={classes.div} style={{ marginTop: "20px" }}>
					<Box marginRight={2}>
						<p className={classes.label}>Accessed</p>
						<FormControl variant="filled">
							<Select
								native
								value={data.property_access}
								onChange={handleChange}
								name="property_access"
								placeholder=""
								className={classes.input}
							>
								<option aria-label="None" value="" />
								<option value={10}>Yes</option>
								<option value={20}>No</option>
							</Select>
							<FormHelperText id="filled-weight-helper-text"></FormHelperText>
						</FormControl>
					</Box>
					<Box marginRight={2}>
						<p className={classes.label}>Title Received?</p>
						<FormControl
							// className={clsx(classes.margin, classes.textField)}
							variant="filled"
						>
							<Select
								native
								value={data.title_received}
								onChange={handleChange}
								name="title_received"
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
					<Box marginRight={2}>
						<p className={classes.label}>Deed Received?</p>
						<FormControl
							// className={clsx(classes.margin, classes.textField)}
							variant="filled"
						>
							<Select
								native
								value={data.deed_received}
								onChange={handleChange}
								name="deed_received"
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
					<Box marginRight={2}>
						<p className={classes.label}>Final Work Through</p>
						<FormControl
							// className={clsx(classes.margin, classes.textField)}
							variant="filled"
						>
							<Select
								native
								value={data.final_work_through}
								onChange={handleChange}
								name="final_work_through"
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
					<Box marginRight={2}>
						<p className={classes.label}>Ready To Close</p>
						<FormControl
							// className={clsx(classes.margin, classes.textField)}
							variant="filled"
						>
							<Select
								native
								value={data.ready_to_close}
								onChange={handleChange}
								name="ready_to_close"
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
					<Box>
						<p className={classes.label}>Bought Date</p>
						<FormControl
							// className={clsx(classes.margin, classes.textField)}
							variant="filled"
						>
							<KeyboardDatePicker
								disableToolbar
								variant="inline"
								format="MM/dd/yyyy"
								margin="normal"
								id="date-picker-inline"
								// label="Date picker inline"
								name="bought"
								value={boughtDate}
								onChange={handleBoughtDateChange}
								KeyboardButtonProps={{
									"aria-label": "change date",
								}}
								InputProps={{
									classes: {
										root: classes.datePicker,
									},
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
					<History property_id={rowData?._id} />
					<Document />
				</Box>
			</MuiPickersUtilsProvider>
		</>
	);
};
export default Index;
