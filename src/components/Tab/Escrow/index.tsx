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
	datePicker: {
		position: "relative",
		backgroundColor: "rgba(0, 0, 0, 0.09)",
		padding: "4px 0px 0px 12px",
		borderTopLeftRadius: "4px",
		borderTopRightRadius: "4px",
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

const Index = () => {
	const classes = useStyles();

	const images = [pix1, pix2, pix3, pix4, pix5, pix6];

	const [data, setData] = useState({
		status: "",
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
	const [selectedDate, setSelectedDate] = useState<Date | null>(new Date());

	const handleDateChange = (date: Date | null) => {
		setSelectedDate(date);
	};
	//===============end of date handler===================

	return (
		<>
			<MuiPickersUtilsProvider utils={DateFnsUtils}>
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
								<option value="new_asset">NEW ASSET</option>
								<option value="not reviewed">NOT REVIEWED</option>
								<option value="new_lead">NEW LEAD</option>
								<option value="re_review">RE-REVIEW</option>
								<option value="not_interested">NOT INTERESTED</option>
								<option value="call_agent">CALL AGENT</option>
								<option value="pending_intel">PENDING INTEL</option>
								<option value="follow_up">FOLLOW UP</option>
								<option value="bid_pending">BID PENDING</option>
								<option value="proxy">PROXY</option>
								<option value="bid">BID</option>
								<option value="rejected">REJECTED</option>
								<option value="sale_cancelled">SALE CANCELLED</option>
								<option value="lost">LOST</option>
								<option value="won">WON</option>
								<option value="in_closing_b">IN CLOSING (B)</option>
								<option value="closed">CLOSED</option>
								<option value="occupied">OCCUPIED</option>
								<option value="pending_vacancy">PENDING VACANCY</option>
								<option value="in_eviction">IN EVICTION</option>
								<option value="pending_bid">PENDING BID</option>
								<option value="being_rehabbed">BEING REHABBED</option>
								<option value="listed">LISTED</option>
								<option value="in_closing_s">IN CLOSING (S)</option>
								<option value="sold">SOLD</option>
							</Select>
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
						<p className={classes.label}>Potential Rehab ($)</p>
						<FormControl
							// className={clsx(classes.margin, classes.textField)}
							variant="filled"
						>
							<FilledInput
								name="potential_rehab"
								value={data.potential_rehab}
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
						<p className={classes.label}>Potential LP ($)</p>
						<FormControl
							// className={clsx(classes.margin, classes.textField)}
							variant="filled"
						>
							<FilledInput
								name="potential_lp"
								value={data.potential_lp}
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
						<p className={classes.label}>Potential Profit ($)</p>
						<FormControl
							// className={clsx(classes.margin, classes.textField)}
							variant="filled"
						>
							<FilledInput
								name="potential_profit"
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
					<Box>
						<p className={classes.label}>Potential ROI (%)</p>
						<FormControl
							// className={clsx(classes.margin, classes.textField)}
							variant="filled"
						>
							<FilledInput
								name="potential_roi"
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
				</div>
				<div className={classes.section}>
					<div style={{ width: "69%", marginTop: "10px" }}>
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
						<div className={classes.sectionDiv}>
							<Box>
								<p className={classes.label}>EST COE</p>
								<FormControl
									// className={clsx(classes.margin, classes.textField)}
									variant="filled"
								>
									{/* <FilledInput
	
										value={data.est_coe}
										onChange={handleChange}
										name="est_coe"
										type="date"
										placeholder=""
										aria-describedby="filled-weight-helper-text"
										inputProps={{
											"aria-label": "weight",
										}}
									/> */}
									<KeyboardDatePicker
										disableToolbar
										variant="inline"
										format="MM/dd/yyyy"
										margin="normal"
										id="date-picker-inline"
										// label="Date picker inline"
										value={selectedDate}
										onChange={handleDateChange}
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
								<p className={classes.label}>Property Access?</p>
								<FormControl
									// className={clsx(classes.margin, classes.textField)}
									variant="filled"
								>
									<Select
										native
										value={data.property_access}
										onChange={handleChange}
										name="property_access"
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
								<p className={classes.label}>C.O. Needed</p>
								<FormControl
									// className={clsx(classes.margin, classes.textField)}
									variant="filled"
								>
									<Select
										native
										value={data.co_needed}
										onChange={handleChange}
										name="co_needed"
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
								<p className={classes.label}>Oil Swept?</p>
								<FormControl
									// className={clsx(classes.margin, classes.textField)}
									variant="filled"
								>
									<Select
										native
										value={data.oil_swept}
										onChange={handleChange}
										name="oil_swept"
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
							<Box>
								<p className={classes.label}>Sewer/Septic Checked?</p>
								<FormControl
									// className={clsx(classes.margin, classes.textField)}
									variant="filled"
								>
									<Select
										native
										value={data.sewer_checked}
										onChange={handleChange}
										name="sewer_checked"
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
						</div>
					</div>

					<Box width="29%" mt={3} mb={2}>
						<EscrowPhoto images={images} />
					</Box>
				</div>
				<div className={classes.div} style={{ marginTop: "30px" }}>
					<Box>
						<p className={classes.label}>List Agent</p>
						<FormControl
							// className={clsx(classes.margin, classes.textField)}
							variant="filled"
						>
							<FilledInput
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
						<p className={classes.label}>Auction Agent</p>
						<FormControl
							// className={clsx(classes.margin, classes.textField)}
							variant="filled"
						>
							<FilledInput
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
					<Box>
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
								// inputProps={{
								// 	name: "age",
								// 	id: "filled-age-native-simple",
								// }}
								placeholder=""
							>
								<option aria-label="None" value="" />
								<option value={10}>Loan</option>
								<option value={20}>Cash</option>
							</Select>
							<FormHelperText id="filled-weight-helper-text"></FormHelperText>
						</FormControl>
					</Box>
					<Box>
						<p className={classes.label}>Loan Amount($)</p>
						<FormControl
							// className={clsx(classes.margin, classes.textField)}
							variant="filled"
						>
							<FilledInput
								value={data.loan_amount}
								onChange={handleChange}
								name="loan_amount"
								placeholder=""
								aria-describedby="filled-weight-helper-text"
								inputProps={{
									"aria-label": "weight",
								}}
								inputComponent={NumberCurrencyFormatCustom as any}
							/>
							<FormHelperText id="filled-weight-helper-text"></FormHelperText>
						</FormControl>
					</Box>
					<Box>
						<p className={classes.label}>Down Payment($)</p>
						<FormControl
							// className={clsx(classes.margin, classes.textField)}
							variant="filled"
						>
							<FilledInput
								value={data.down_payment}
								onChange={handleChange}
								name="down_payment"
								placeholder=""
								aria-describedby="filled-weight-helper-text"
								inputProps={{
									"aria-label": "weight",
								}}
								inputComponent={NumberCurrencyFormatCustom as any}
							/>
							<FormHelperText id="filled-weight-helper-text"></FormHelperText>
						</FormControl>
					</Box>
					<Box>
						<p className={classes.label}>Loan Interest %</p>
						<FormControl
							// className={clsx(classes.margin, classes.textField)}
							variant="filled"
						>
							<FilledInput
								value={data.loan_interest}
								onChange={handleChange}
								name="loan_interest"
								placeholder=""
								aria-describedby="filled-weight-helper-text"
								inputProps={{
									maxLength: 6,
								}}
								inputComponent={PercentageFormat as any}
							/>
							<FormHelperText id="filled-weight-helper-text"></FormHelperText>
						</FormControl>
					</Box>
					<Box>
						<p className={classes.label}>Appraisal Ordered</p>
						<FormControl
							// className={clsx(classes.margin, classes.textField)}
							variant="filled"
						>
							<Select
								native
								value={data.appraisal_ordered}
								onChange={handleChange}
								name="appraisal_ordered"
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
								value={selectedDate}
								onChange={handleDateChange}
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
					<Box>
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
								value={selectedDate}
								onChange={handleDateChange}
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
					<History />
					<Document />
				</Box>
			</MuiPickersUtilsProvider>
		</>
	);
};
export default Index;
