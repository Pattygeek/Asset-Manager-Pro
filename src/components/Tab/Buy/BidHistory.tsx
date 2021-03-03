import Dialog from "@material-ui/core/Dialog";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Box from "@material-ui/core/Box";
import CloseIcon from "@material-ui/icons/Close";
import { HotTable, HotColumn } from "@handsontable/react";
import { useState } from "react";

interface ModalProps {
	open: boolean;
	handleClose: () => any;
}

const useStyles = makeStyles(() => ({
	box: {
		color: "white",
		backgroundColor: "#109CF1",
		width: "100%",
		borderRadius: "4px 4px 0px 0px",
		padding: "8px 18px",
		display: "flex",
		justifyContent: "space-between",
	},
	heading: {
		color: "white",
		margin: "auto 0px",
	},
	dialog: {
		width:"870px"
	},
	icon: {
		cursor: "pointer",
		"&:hover": {
			color: "grey",
		},
	},
}));

const BidHistory = ({ open, handleClose }: ModalProps) => {
	const classes = useStyles();

	const [header] = useState<any>({
		colHeaders: ["Total Live Bids", "Live Bidders", "Highest Bid"],
		data: [
			{
				total_live_bids: 5,
				live_bidders: 2,
				highest_bid: "$167,000",
			},
		],
		className: "htCenter htMiddle",
		width: 760,
		rowHeights: 35,
		columnHeaderHeight: 35,
		columns: [
			{ data: "total_live_bids", readOnly: true, width: 200 },
			{ data: "live_bidders", readOnly: true, width: 200 },
			{ data: "highest_bid", readOnly: true, width: 360 },
		],
		licenseKey: "non-commercial-and-evaluation",
	});

	const [state, setState] = useState<any>({
		colHeaders: [
			"Date/Time",
			"Event",
			"Bidder Type",
			"Bid Amount",
			"Bid Increments",
			"Reserve Status",
			"Sales Status",
		],
		licenseKey: "non-commercial-and-evaluation",
		rowHeights: 30,
		columnHeaderHeight: 35,
		width: 760,
		className: "htMiddle htCenter",
		filters: true,
		columnSorting: true,
		cells: function (row: number) {
			let cp: any = {};
			if (row % 2 === 0) {
				cp.className = "greyRow";
			}
			return cp;
		},
		allowInsertColumn: false,
		allowRemoveColumn: false,
		data: [
			{
				address_street: "860 Ashland Place",
				address_city: "Alamo, Maryland, 2062",
				address_county: "SAINT CHARLES",
				address_state: "IL",
				address_zip: 749,
				status: "IL",
				date: 750,
			},
			{
				address_street: "860 Ashland Place",
				address_city: "Alamo, Maryland, 2062",
				address_county: "SAINT CHARLES",
				address_state: "IL",
				address_zip: 749,
				status: "IL",
				date: 749,
			},
			{
				address_street: "860 Ashland Place",
				address_city: "Alamo, Maryland, 2062",
				address_county: "SAINT CHARLES",
				address_state: "IL",
				address_zip: 749,
				status: "IL",
				date: 789,
			},
			{
				address_street: "860 Ashland Place",
				address_city: "Alamo, Maryland, 2062",
				address_county: "SAINT CHARLES",
				address_state: "IL",
				address_zip: 749,
				status: "IL",
				date: 749,
			},
		],
		columns: [
			{ data: "address_zip", readOnly: true, width: 75 },
			{ data: "address_state", readOnly: true, width: 70 },
			{ data: "address_county", readOnly: true, width: 120 },
			{ data: "address_city", readOnly: true, width: 170 },
			{ data: "address_street", readOnly: true, width: 130 },
			{ data: "status", readOnly: true, width: 100 },
			{ data: "date", readOnly: true, width: 95 },
		],
	});
	return (
		<>
			<Dialog
				open={open}
				onClose={handleClose}
				aria-labelledby="max-width-dialog-title"
				maxWidth="md"
			>
				<Box className={classes.box}>
					<Box className={classes.heading}>Bid History</Box>
					<CloseIcon onClick={handleClose} className={classes.icon} />
				</Box>
				<HotTable settings={header}></HotTable>
				<HotTable
					settings={state}
					dropdownMenu={[
						"alignment",
						"---------",
						"filter_by_condition",
						"---------",
						"filter_by_value",
						"---------",
						"filter_action_bar",
					]}
				>
					{/* <HotColumn width={160} />
					<HotColumn width={150} />
					<HotColumn width={150} />
					<HotColumn width={150} />
					<HotColumn width={150} /> */}
				</HotTable>
			</Dialog>
		</>
	);
};
export default BidHistory;
