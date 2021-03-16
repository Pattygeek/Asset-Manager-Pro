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
import DateFnsUtils from "@date-io/date-fns";
import { red } from "@material-ui/core/colors";
import {
	MuiPickersUtilsProvider,
	KeyboardTimePicker,
	KeyboardDatePicker,
} from "@material-ui/pickers";

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
		list_price: "",
		profit: "",
		roi: "",
		hold_time: "",
		note: "",
		occupancy: "",
		eviction: "",
		cfk: "",
		cfk_amount: "",
		occupant: "",
		occupant_number: "",
		occupant_email: "",
		eviction_date: "",
		attorney_name: "",
		attorney_number: "",
		attorney_email: "",
		eviction_cost: "",
		water_co: "",
		water_co_nuumber: "",
		electric_co: "",
		electric_co_number: "",
		gas_co: "",
		gas_co_number: "",
		taxes: "",
		taxes_number: "",
		contractor_bid_received: "",
		rehab: "",
		gc: "",
		gc_number: "",
		gc_email: "",
		list_agent: "",
		list_agent_email: "",
		list_agent_number: "",
		sold_date: "",
		sold_price: "",
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
						<p className={classes.label}>List Price ($)</p>
						<FormControl
							// className={clsx(classes.margin, classes.textField)}
							variant="filled"
						>
							<FilledInput
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
					<Box>
						<p className={classes.label}>Profit ($)</p>
						<FormControl
							// className={clsx(classes.margin, classes.textField)}
							variant="filled"
						>
							<FilledInput
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
						<p className={classes.label}>ROI (%)</p>
						<FormControl
							// className={clsx(classes.margin, classes.textField)}
							variant="filled"
						>
							<FilledInput
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
						<FormControl
							// className={clsx(classes.margin, classes.textField)}
							variant="filled"
						>
							<FilledInput
								name="hold_time"
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
							<Box>
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
									>
										<option aria-label="None" value="" />
										<option value={10}>Yes</option>
										<option value={20}>No</option>
									</Select>
									<FormHelperText id="filled-weight-helper-text"></FormHelperText>
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
										value={data.cfk}
										onChange={handleChange}
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
									<FormHelperText id="filled-weight-helper-text"></FormHelperText>
								</FormControl>
							</Box>
							<Box>
								<p className={classes.label}>CFK Amount ($)</p>
								<FormControl
									// className={clsx(classes.margin, classes.textField)}
									variant="filled"
								>
									<FilledInput
	
										name="cfk_amount"
										value={data.hold_time}
										onChange={handleChange}
										inputProps={{
											maxLength: 5,
										}}
										inputComponent={NumberCurrencyFormatCustom as any}
									/>
									<FormHelperText id="filled-weight-helper-text"></FormHelperText>
								</FormControl>
							</Box>
							<Box>
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
							<Box>
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
							<Box>
								<p className={classes.label}>Eviction Date</p>
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
								<p className={classes.label}>Attorney Name</p>
								<FormControl
									// className={clsx(classes.margin, classes.textField)}
									variant="filled"
								>
									<FilledInput
	
										value={data.attorney_name}
										onChange={handleChange}
										name="attorney_name"
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
							<Box>
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
							<Box>
								<p className={classes.label}>Eviction Cost ($)</p>
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
									/>
									<FormHelperText id="filled-weight-helper-text"></FormHelperText>
								</FormControl>
							</Box>
							<Box>
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
							<Box>
								<p className={classes.label}>Water Co Number</p>
								<FormControl
									// className={clsx(classes.margin, classes.textField)}
									variant="filled"
								>
									<FilledInput
	
										value={data.water_co_nuumber}
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
							<Box>
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
							<Box>
								<p className={classes.label}>Electric Co Number</p>
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
							<Box>
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
							<Box>
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
							<Box>
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
					<Box>
						<p className={classes.label}>Rehab ($)</p>
						<FormControl
							// className={clsx(classes.margin, classes.textField)}
							variant="filled"
						>
							<FilledInput
								value={data.rehab}
								onChange={handleChange}
								name="rehab"
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
						<p className={classes.label}>G.C.</p>
						<FormControl
							// className={clsx(classes.margin, classes.textField)}
							variant="filled"
						>
							<FilledInput
								value={data.gc}
								onChange={handleChange}
								name="gc"
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
								aria-describedby="filled-weight-helper-text"
								inputProps={{
									"aria-label": "weight",
								}}
							/>
							<FormHelperText id="filled-weight-helper-text"></FormHelperText>
						</FormControl>
					</Box>
					<Box>
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
					<Box>
						<p className={classes.label}>Sold Price ($)</p>
						<FormControl
							// className={clsx(classes.margin, classes.textField)}
							variant="filled"
						>
							<FilledInput
								value={data.sold_price}
								onChange={handleChange}
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
			</MuiPickersUtilsProvider>
		</>
	);
};
export default Index;
