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
import EscrowProvider from "./EscrowProvider";
import {
	NumberCurrencyFormatCustom,
	PercentageFormat,
	PercentageWithoutDecimalFormat,
	PhoneNumberFormat,
} from "../../../utils/formats";
import { PropertyRecord } from "../../../components/Types";
import AutoComplete from "../../ContactsAutocomplete";
import { red } from "@material-ui/core/colors";
import DateFnsUtils from "@date-io/date-fns";
import {
	MuiPickersUtilsProvider,
	KeyboardDatePicker,
} from "@material-ui/pickers";
import theme from "../../../helpers/theme";

const useStyles = makeStyles(() => ({
	label: {
		marginBottom: "2px",
		fontWeight: 500,
		fontSize: "12px",
	},
	marginRight: {
		marginRight: "8px",
		[theme.breakpoints.up("xl")]: {
			marginRight: "20px",
		},
	},
	input: {
		fontSize: "12px",
	},
	div: {
		display: "flex",
	},
	contact: {
		display: "flex",
		[theme.breakpoints.up("xl")]: {
			width: "80%",
		},
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
	update: {
		color: "red",
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
	mRight: {
		marginRight: "8px",
		[theme.breakpoints.up("xl")]: {
			marginRight: "32px",
		},
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
	// options: any[];
	rowData: PropertyRecord;
}

const Index = ({ rowData }: BuyProps) => {
	const classes = useStyles();

	const images = [pix1, pix2, pix3, pix4, pix5, pix6];

	return (
		<>
			<EscrowProvider>
				{({
					data,
					handleChange,
					boughtDate,
					handleAppraisalDateChange,
					handleBoughtDateChange,
					handleEstDateChange,
					appraisalDate,
					estDate,
					options,
					openListDiv,
					optionData,
					optionList,
					handleAuctionChange,
					openDiv,
					handleListAgentChange,
					boughtDateData,
					boughtDateError,
					boughtDateUpdate,
					errorText,
					noteUpdate,
					noteError,
					noteData,
					onNoteBlur,
					statusData,
					statusError,
					statusUpdate,
					onStatusChange,
				}) => (
					<MuiPickersUtilsProvider utils={DateFnsUtils}>
						<div className={classes.div}>
							<div
								style={{ width: "73%", marginTop: "10px", marginRight: "20px" }}
							>
								<div className={classes.div}>
									<Box width="180px" className={classes.marginRight}>
										<p className={classes.label}>Status</p>
										<FormControl variant="filled">
											<Select
												native
												value={data.status}
												onChange={onStatusChange}
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
												<option value="PROXY_NO_DD">PROXY NO DD</option>
												<option value="PROXY">PROXY</option>
												<option value="BID">BID</option>
												<option value="REJECTED">REJECTED</option>
												<option value="SALE_CANCELLED">SALE CANCELLED</option>
												<option value="LOST">LOST</option>
												<option value="WON">WON</option>
												<option
													value="IN_CLOSEING_BUY
"
												>
													IN CLOSING (B)
												</option>
												<option value="CLOSED">CLOSED</option>
												<option value="OCCUPIED">OCCUPIED</option>
												<option value="PENDING_VACANCY">PENDING VACANCY</option>
												<option value="IN_EVICTION">IN EVICTION</option>
												<option value="PENDING_BID">PENDING BID</option>
												<option value="BEING_REHABILITATED">BEING REHABBED</option>
												<option value="LISTED">LISTED</option>
												<option value="IN_CLOSING_SALE">IN CLOSING (S)</option>
												<option value="SOLD">SOLD</option>
												<option value="NONE">NONE</option>
											</Select>
											<FormHelperText
												id="filled-weight-helper-text"
												className={statusError ? classes.update : ""}
											>
												{statusError ? `${errorText}` : `${statusUpdate}`}
											</FormHelperText>
										</FormControl>
									</Box>
									<Box className={classes.marginRight}>
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
									<Box className={classes.marginRight} width="180px">
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
											style={{ fontSize: "10px", whiteSpace: "nowrap" }}
											label="Bid Confirm"
										/>
									</Box>
									<Box className={classes.marginRight}>
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
									<Box className={classes.marginRight}>
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
									<Box className={classes.marginRight}>
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
									<Box className={classes.marginRight}>
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
									<Box className={classes.marginRight}>
										<p
											className={classes.label}
											style={{ whiteSpace: "nowrap" }}
										>
											Final Work Through
										</p>
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
									<Box className={classes.marginRight}>
										<p
											className={classes.label}
											style={{ whiteSpace: "nowrap" }}
										>
											Ready To Close
										</p>
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
											<FormHelperText
												id="filled-weight-helper-text"
												className={boughtDateError ? classes.update : ""}
											>
												{boughtDateError
													? `${errorText}`
													: `${boughtDateUpdate}`}
											</FormHelperText>
										</FormControl>
									</Box>
								</div>

								<div className={classes.div}>
									<Box width="90px" className={classes.marginRight}>
										<p
											className={classes.label}
											style={{ whiteSpace: "nowrap" }}
										>
											CO Needed
										</p>
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
									<Box className={classes.marginRight} width="50px">
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
									<Box className={classes.marginRight} width="90px">
										<p
											className={classes.label}
											style={{ whiteSpace: "nowrap" }}
										>
											Sewer ✓
										</p>
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
									<Box className={classes.marginRight}>
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
									<Box className={classes.marginRight} width="100px">
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
									<Box className={classes.marginRight} width="100px">
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
									<Box className={classes.marginRight} width="80px">
										<p
											className={classes.label}
											style={{ whiteSpace: "nowrap" }}
										>
											Interest %
										</p>
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
									<Box className={classes.marginRight} width="70px">
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
									<Box width="150px" className={classes.marginRight}>
										<p
											className={classes.label}
											style={{ whiteSpace: "nowrap" }}
										>
											Appraisal Date Ordered
										</p>
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
									<Box className={classes.marginRight} width="80px">
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
									<Box className={classes.marginRight}>
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
									<Box className={classes.marginRight}>
										<p
											className={classes.label}
											style={{ whiteSpace: "nowrap" }}
										>
											Title Received?
										</p>
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
									<Box>
										<p
											className={classes.label}
											style={{ whiteSpace: "nowrap" }}
										>
											Deed Received?
										</p>
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
								</div>

								<div className={classes.contact}>
									<Box className={classes.mRight}>
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

									<Box className={classes.mRight}>
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
									<Box className={classes.mRight}>
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
									<Box className={classes.mRight}>
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
									<Box className={classes.mRight}>
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
								<Box width="50%" mb={3}>
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
											onBlur={onNoteBlur}
											// defaultValue="Default Value"
											variant="filled"
										/>
										<FormHelperText
											id="filled-weight-helper-text"
											className={noteError ? classes.update : ""}
										>
											{noteError ? `${errorText}` : `${noteUpdate}`}
										</FormHelperText>
									</FormControl>
								</Box>
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
							</div>
							<Box width="27%" mt={3} mb={2}>
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

						<Box
							width="100%"
							display="flex"
							justifyContent="space-between"
							marginTop={1}
						>
							<Box width="73%">
								<History property_id={rowData?._id} />
							</Box>
							<Box width="26%" style={{ marginLeft: "20px" }}>
								<Document />
							</Box>
						</Box>
					</MuiPickersUtilsProvider>
				)}
			</EscrowProvider>
		</>
	);
};
export default Index;
