import Dialog from "@material-ui/core/Dialog";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Box from "@material-ui/core/Box";
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
	},
}));

const BidHistory = ({ open, handleClose }: ModalProps) => {
	const classes = useStyles();

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
		data: [
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
				date: 749,
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
				date: 749,
			},
		],
		// columns: [
		// 	{ data: "address_zip" },
		// 	{ data: "address_state" },
		// 	{ data: "address_county" },
		// 	{ data: "address_city" },
		// 	{ data: "address_street" },
		// ],
	});
	return (
		<>
			<Dialog
				open={open}
				onClose={handleClose}
				aria-labelledby="max-width-dialog-title"
				maxWidth="md"
			>
				<Box className={classes.box}>Bid History</Box>
				<HotTable settings={state}>
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
