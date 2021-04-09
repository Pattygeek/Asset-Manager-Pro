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
import { PropertyRecord } from "../../Types";
import AutoComplete from "../../ContactsAutocomplete";
import {
	NumberCurrencyFormatCustom,
	RegularNumberWithDecimalFormat,
	PercentageWithoutDecimalFormat,
	PhoneNumberFormat,
} from "../../../utils/formats";
import DateFnsUtils from "@date-io/date-fns";
import { red } from "@material-ui/core/colors";
import {
	MuiPickersUtilsProvider,
	KeyboardDatePicker,
} from "@material-ui/pickers";
import OwnedProvider from "./OwnedProvider";
import theme from "../../../helpers/theme";

const useStyles = makeStyles((theme) => ({
	label: {
		marginBottom: "2px",
		fontWeight: 500,
		fontSize: "12px",
	},
	update: {
		color: "red",
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
	input: {
		fontSize: "12px",
	},
	sectionDiv: {
		display: "grid",
		gridTemplateColumns: "repeat(7, 1fr)",
		gap: "12px",
	},
	grid: {
		display: "grid",
		gridTemplateColumns: "repeat(8, 1fr)",
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
	marginRight: {
		marginRight: "8px",
		[theme.breakpoints.up("xl")]: {
			marginRight: "20px",
		},
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
	// options: any[];
	rowData: PropertyRecord;
}

const Index = ({ rowData }: BuyProps) => {
	const classes = useStyles();

	const images = [pix1, pix2, pix3, pix4, pix5, pix6];

	return (
		<>
			<OwnedProvider>
				{({
					data,
					handleChange,
					soldDate,
					evictionDate,
					handleEvictionDateChange,
					handleSoldDateChange,
					openDiv,
					openListDiv,
					openGcDiv,
					handleListAgentChange,
					handleAttorneyChange,
					handleGcChange,
					optionData,
					optionList,
					options,
					errorText,
					soldDateUpdate,
					soldDateError,
					soldDateData,
					cfkAmountUpdate,
					cfkAmountError,
					cfkAmountData,
					onCfkAmountBlur,
				}) => (
					<MuiPickersUtilsProvider utils={DateFnsUtils}>
						<div className={classes.div}>
							<div
								style={{ width: "69%", marginTop: "10px", marginRight: "20px" }}
							>
								<div className={classes.div}>
									<Box className={classes.marginRight} width="200px">
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
												placeholder=""
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
									<Box width="180px" className={classes.marginRight}>
										<p className={classes.label}>Rehab</p>
										<FormControl
											// className={clsx(classes.margin, classes.textField)}
											variant="filled"
										>
											<FilledInput
												value={data.rehab}
												onChange={handleChange}
												name="rehab"
												className={classes.input}
												inputComponent={NumberCurrencyFormatCustom as any}
												placeholder=""
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
											style={{ fontSize: "7px", whiteSpace: "nowrap" }}
											label="Bid Confirm"
										/>
									</Box>
									<Box className={classes.marginRight}>
										<p className={classes.label}>TPP</p>
										<FormControl
											// className={clsx(classes.margin, classes.textField)}
											variant="filled"
										>
											<FilledInput
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
									<Box className={classes.marginRight}>
										<p
											className={classes.label}
											style={{ whiteSpace: "nowrap" }}
										>
											List Price
										</p>
										<FormControl
											// className={clsx(classes.margin, classes.textField)}
											variant="filled"
										>
											<FilledInput
												className={classes.input}
												name="list_price"
												value={data.list_price}
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
										<p className={classes.label}>Profit</p>
										<FormControl
											// className={clsx(classes.margin, classes.textField)}
											variant="filled"
										>
											<FilledInput
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
									<Box className={classes.marginRight}>
										<p className={classes.label}>ROI</p>
										<FormControl
											// className={clsx(classes.margin, classes.textField)}
											variant="filled"
										>
											<FilledInput
												name="roi"
												value={data.roi}
												className={classes.input}
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
										<p
											className={classes.label}
											style={{ whiteSpace: "nowrap" }}
										>
											Hold Time
										</p>
										<FormControl
											// className={clsx(classes.margin, classes.textField)}
											variant="filled"
										>
											<FilledInput
												name="hold_time"
												className={classes.input}
												value={data.hold_time}
												onChange={handleChange}
												inputProps={{
													maxLength: 5,
												}}
												inputComponent={RegularNumberWithDecimalFormat as any}
											/>
											<FormHelperText id="filled-weight-helper-text"></FormHelperText>
										</FormControl>
									</Box>
									<Box className={classes.marginRight} width="160px">
										<p className={classes.label}>Eviction</p>
										<FormControl
											// className={clsx(classes.margin, classes.textField)}
											variant="filled"
										>
											<Select
												native
												value={data.eviction}
												onChange={handleChange}
												inputProps={{
													name: "age",
													id: "filled-age-native-simple",
												}}
												placeholder=""
												className={classes.input}
											>
												<option aria-label="None" value="" />
												<option value="vacant">Vacant</option>
												<option value="occupied">Occupied</option>
												<option value="in_eviction">In Eviction</option>
												<option value="CFK">CFK</option>
											</Select>
											<FormHelperText id="filled-weight-helper-text"></FormHelperText>
										</FormControl>
									</Box>
									<Box className={classes.marginRight}>
										<p
											className={classes.label}
											style={{ whiteSpace: "nowrap" }}
										>
											Eviction Cost
										</p>
										<FormControl
											// className={clsx(classes.margin, classes.textField)}
											variant="filled"
										>
											<FilledInput
												value={data.eviction_cost}
												onChange={handleChange}
												inputComponent={NumberCurrencyFormatCustom as any}
												placeholder=""
												aria-describedby="filled-weight-helper-text"
												inputProps={{
													"aria-label": "weight",
												}}
												className={classes.input}
											/>
											<FormHelperText id="filled-weight-helper-text"></FormHelperText>
										</FormControl>
									</Box>
									<Box className={classes.marginRight}>
										<p
											className={classes.label}
											style={{ whiteSpace: "nowrap" }}
										>
											CFK Amount
										</p>
										<FormControl
											// className={clsx(classes.margin, classes.textField)}
											variant="filled"
										>
											<FilledInput
												name="cfk_amount"
												value={data.cfk_amount}
												onChange={handleChange}
												onBlur={onCfkAmountBlur}
												className={classes.input}
												inputProps={{
													maxLength: 5,
												}}
												inputComponent={NumberCurrencyFormatCustom as any}
											/>
											<FormHelperText
												id="filled-weight-helper-text"
												className={cfkAmountError ? classes.update : ""}
											>
												{cfkAmountError ? `${errorText}` : `${cfkAmountUpdate}`}
											</FormHelperText>
										</FormControl>
									</Box>
									<Box className={classes.marginRight}>
										<p
											className={classes.label}
											style={{ whiteSpace: "nowrap" }}
										>
											Eviction Date
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
												value={evictionDate}
												onChange={handleEvictionDateChange}
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
											Sold Price
										</p>
										<FormControl
											// className={clsx(classes.margin, classes.textField)}
											variant="filled"
										>
											<FilledInput
												value={data.sold_price}
												onChange={handleChange}
												className={classes.input}
												name="sold_price"
												inputComponent={NumberCurrencyFormatCustom as any}
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
										<p className={classes.label}>Sold Date</p>
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
												value={soldDate}
												onChange={handleSoldDateChange}
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
												className={soldDateError ? classes.update : ""}
											>
												{soldDateError ? `${errorText}` : `${soldDateUpdate}`}
											</FormHelperText>
										</FormControl>
									</Box>
								</div>

								<div className={classes.contact}>
									<Box className={classes.marginRight}>
										<p className={classes.label}>G.C.</p>
										<FormControl
											// className={clsx(classes.margin, classes.textField)}
											variant="filled"
										>
											<FilledInput
												value={data.gc}
												onChange={handleGcChange}
												name="gc"
												placeholder=""
												className={classes.input}
											/>
											<FormHelperText id="filled-weight-helper-text"></FormHelperText>
										</FormControl>
										{openGcDiv ? (
											<AutoComplete
												options={options}
												input={data.gc}
												optionData={optionData}
												optionList={optionList}
											/>
										) : (
											""
										)}
									</Box>
									<Box className={classes.marginRight}>
										<p className={classes.label}>G.C. Number</p>
										<FormControl
											// className={clsx(classes.margin, classes.textField)}
											variant="filled"
										>
											<FilledInput
												value={data.gc_number}
												onChange={handleChange}
												name="gc_number"
												inputComponent={PhoneNumberFormat as any}
												placeholder=""
												className={classes.input}
											/>
											<FormHelperText id="filled-weight-helper-text"></FormHelperText>
										</FormControl>
									</Box>
									<Box className={classes.marginRight}>
										<p className={classes.label}>G.C. Email</p>
										<FormControl
											// className={clsx(classes.margin, classes.textField)}
											variant="filled"
										>
											<FilledInput
												value={data.gc_email}
												onChange={handleChange}
												name="gc_email"
												type="email"
												placeholder=""
												className={classes.input}
											/>
											<FormHelperText id="filled-weight-helper-text"></FormHelperText>
										</FormControl>
									</Box>
									<Box className={classes.marginRight}>
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
												inputProps={{
													"aria-label": "weight",
												}}
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
									<Box className={classes.marginRight}>
										<p className={classes.label}>List Agent Number</p>
										<FormControl
											// className={clsx(classes.margin, classes.textField)}
											variant="filled"
										>
											<FilledInput
												value={data.list_agent_number}
												onChange={handleChange}
												name="list_agent_number"
												inputComponent={PhoneNumberFormat as any}
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
								<div className={classes.contact}>
									<Box className={classes.marginRight}>
										<p className={classes.label}>Attorney Name</p>
										<FormControl
											// className={clsx(classes.margin, classes.textField)}
											variant="filled"
										>
											<FilledInput
												value={data.attorney_name}
												onChange={handleAttorneyChange}
												name="attorney_name"
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
												input={data.attorney_name}
												optionData={optionData}
												optionList={optionList}
											/>
										) : (
											""
										)}
									</Box>
									<Box className={classes.marginRight}>
										<p className={classes.label}>Attorney Number</p>
										<FormControl
											// className={clsx(classes.margin, classes.textField)}
											variant="filled"
										>
											<FilledInput
												value={data.attorney_number}
												onChange={handleChange}
												name="attorney_number"
												inputComponent={PhoneNumberFormat as any}
												placeholder=""
												aria-describedby="filled-weight-helper-text"
												inputProps={{
													"aria-label": "weight",
												}}
											/>
											<FormHelperText id="filled-weight-helper-text"></FormHelperText>
										</FormControl>
									</Box>
									<Box className={classes.marginRight}>
										<p className={classes.label}>Attorney Email</p>
										<FormControl
											// className={clsx(classes.margin, classes.textField)}
											variant="filled"
										>
											<FilledInput
												value={data.attorney_email}
												onChange={handleChange}
												name="attorney_email"
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
									<Box className={classes.marginRight}>
										<p className={classes.label}>Occupant</p>
										<FormControl
											// className={clsx(classes.margin, classes.textField)}
											variant="filled"
										>
											<FilledInput
												value={data.occupant}
												onChange={handleChange}
												name="occupant"
												placeholder=""
												aria-describedby="filled-weight-helper-text"
												inputProps={{
													"aria-label": "weight",
												}}
											/>
											<FormHelperText id="filled-weight-helper-text"></FormHelperText>
										</FormControl>
									</Box>
									<Box className={classes.marginRight}>
										<p className={classes.label}>Occupant Number</p>
										<FormControl
											// className={clsx(classes.margin, classes.textField)}
											variant="filled"
										>
											<FilledInput
												value={data.occupant_number}
												onChange={handleChange}
												name="occupant_number"
												inputComponent={PhoneNumberFormat as any}
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
										<p className={classes.label}>Occupant Email</p>
										<FormControl
											// className={clsx(classes.margin, classes.textField)}
											variant="filled"
										>
											<FilledInput
												value={data.occupant_email}
												onChange={handleChange}
												name="occupant_email"
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

								<div className={classes.div}>
									<Box className={classes.marginRight}>
										<p className={classes.label}>Water Co</p>
										<FormControl
											// className={clsx(classes.margin, classes.textField)}
											variant="filled"
										>
											<FilledInput
												value={data.water_co}
												onChange={handleChange}
												name="water_co"
												placeholder=""
												aria-describedby="filled-weight-helper-text"
												inputProps={{
													"aria-label": "weight",
												}}
											/>
											<FormHelperText id="filled-weight-helper-text"></FormHelperText>
										</FormControl>
									</Box>
									<Box className={classes.marginRight}>
										<p className={classes.label}>Water Co Number</p>
										<FormControl
											// className={clsx(classes.margin, classes.textField)}
											variant="filled"
										>
											<FilledInput
												value={data.water_co_number}
												onChange={handleChange}
												name="water_co_number"
												inputComponent={PhoneNumberFormat as any}
												placeholder=""
												aria-describedby="filled-weight-helper-text"
												inputProps={{
													"aria-label": "weight",
												}}
											/>
											<FormHelperText id="filled-weight-helper-text"></FormHelperText>
										</FormControl>
									</Box>
									<Box className={classes.marginRight}>
										<p className={classes.label}>Electric Co</p>
										<FormControl
											// className={clsx(classes.margin, classes.textField)}
											variant="filled"
										>
											<FilledInput
												value={data.electric_co}
												onChange={handleChange}
												name="electric_co"
												placeholder=""
												aria-describedby="filled-weight-helper-text"
												inputProps={{
													"aria-label": "weight",
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
											Electric Co Number
										</p>
										<FormControl
											// className={clsx(classes.margin, classes.textField)}
											variant="filled"
										>
											<FilledInput
												value={data.electric_co_number}
												onChange={handleChange}
												name="electric_co_number"
												inputComponent={PhoneNumberFormat as any}
												placeholder=""
												aria-describedby="filled-weight-helper-text"
												inputProps={{
													"aria-label": "weight",
												}}
											/>
											<FormHelperText id="filled-weight-helper-text"></FormHelperText>
										</FormControl>
									</Box>
									<Box className={classes.marginRight}>
										<p className={classes.label}>Gas Co</p>
										<FormControl
											// className={clsx(classes.margin, classes.textField)}
											variant="filled"
										>
											<FilledInput
												value={data.gas_co}
												onChange={handleChange}
												name="gas_co"
												placeholder=""
												aria-describedby="filled-weight-helper-text"
												inputProps={{
													"aria-label": "weight",
												}}
											/>
											<FormHelperText id="filled-weight-helper-text"></FormHelperText>
										</FormControl>
									</Box>
									<Box className={classes.marginRight}>
										<p className={classes.label}>Gas Co Number</p>
										<FormControl
											// className={clsx(classes.margin, classes.textField)}
											variant="filled"
										>
											<FilledInput
												value={data.gas_co_number}
												onChange={handleChange}
												inputComponent={PhoneNumberFormat as any}
												name="gas_co_number"
												placeholder=""
												aria-describedby="filled-weight-helper-text"
												inputProps={{
													"aria-label": "weight",
												}}
											/>
											<FormHelperText id="filled-weight-helper-text"></FormHelperText>
										</FormControl>
									</Box>
									<Box className={classes.marginRight}>
										<p className={classes.label}>Taxes</p>
										<FormControl
											// className={clsx(classes.margin, classes.textField)}
											variant="filled"
										>
											<FilledInput
												value={data.taxes}
												onChange={handleChange}
												name="taxes"
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
										<p className={classes.label}>Taxes Number</p>
										<FormControl
											// className={clsx(classes.margin, classes.textField)}
											variant="filled"
										>
											<FilledInput
												value={data.taxes_number}
												onChange={handleChange}
												name="taxes_number"
												inputComponent={PhoneNumberFormat as any}
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
								<div>
									<Box width="50%" mb={5}>
										<p className={classes.label}>Note</p>
										<FormControl
											// className={clsx(classes.margin, classes.textField)}
											variant="filled"
										>
											<TextField
												id="filled-multiline-static"
												multiline
												rows={3}
												name="note"
												value={data.note}
												onChange={handleChange}
												// defaultValue="Default Value"
												variant="filled"
											/>
											<FormHelperText id="filled-weight-helper-text"></FormHelperText>
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
							</div>
							<Box width="29%" mt={3} mb={2}>
								<EscrowPhoto images={images} />
							</Box>
						</div>

						{/* <div className={classes.section}>
							<div style={{ width: "100%", marginTop: "10px" }}>
								<div className={classes.sectionDiv}>
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
											<FormHelperText id="filled-weight-helper-text"></FormHelperText>
										</FormControl>
									</Box>
								</div>
								<div className={classes.grid}>
									<Box>
										<p className={classes.label}>Contractor Bid Received</p>
										<FormControl
											// className={clsx(classes.margin, classes.textField)}
											variant="filled"
										>
											<Select
												native
												value={data.contractor_bid_received}
												onChange={handleChange}
												name="contractor_bid_received"
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
							marginTop={2}
						>
							<Box width="69%">
								<Utilities />
							</Box>
						</Box>
						<Box
							width="100%"
							display="flex"
							justifyContent="space-between"
							marginTop={6}
						>
							<Box width="69%">
								<History property_id={rowData?._id} />
							</Box>
							<Box width="30%" style={{ marginLeft: "20px" }}>
								<Document />
							</Box>
						</Box>
					</MuiPickersUtilsProvider>
				)}
			</OwnedProvider>
		</>
	);
};
export default Index;
