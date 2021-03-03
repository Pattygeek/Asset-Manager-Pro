import Dialog from "@material-ui/core/Dialog";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Box from "@material-ui/core/Box";
import { HotTable, HotColumn } from "@handsontable/react";
import CloseIcon from "@material-ui/icons/Close";
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
	icon: {
		cursor: "pointer",
		"&:hover": {
			color: "grey",
		},
	},
}));

const PriceHistory = ({ open, handleClose }: ModalProps) => {
	const classes = useStyles();

	const [state, setState] = useState<any>({
		colHeaders: ["Date", "Status", "Sale Type", "Amount", "Source"],
		licenseKey: "non-commercial-and-evaluation",
		rowHeights: 26,
		columnHeaderHeight: 35,
		width: 760,
		filters: true,
		cells: function (row: number) {
			let cp: any = {};
			if (row % 2 === 0) {
				cp.className = "greyRow";
			}
			return cp;
		},
		columnSorting: true,
		allowInsertColumn: false,
		allowRemoveColumn: false,
		data: [
			{
				address_street: "860 Ashland Place",
				address_city: "Alamo, Maryland, 2062",
				address_county: "SAINT CHARLES",
				address_state: "IL",
				address_zip: 749,
			},
			{
				address_street: "860 Ashland Place",
				address_city: "Alamo, Maryland, 2062",
				address_county: "SAINT CHARLES",
				address_state: "IL",
				address_zip: 749,
			},
			{
				address_street: "860 Ashland Place",
				address_city: "Alamo, Maryland, 2062",
				address_county: "SAINT CHARLES",
				address_state: "IL",
				address_zip: 749,
			},
			{
				address_street: "860 Ashland Place",
				address_city: "Alamo, Maryland, 2062",
				address_county: "SAINT CHARLES",
				address_state: "IL",
				address_zip: 749,
			},
			{
				address_street: "860 Ashland Place",
				address_city: "Alamo, Maryland, 2062",
				address_county: "SAINT CHARLES",
				address_state: "IL",
				address_zip: 749,
			},
			{
				address_street: "860 Ashland Place",
				address_city: "Alamo, Maryland, 2062",
				address_county: "SAINT CHARLES",
				address_state: "IL",
				address_zip: 749,
			},
			{
				address_street: "860 Ashland Place",
				address_city: "Alamo, Maryland, 2062",
				address_county: "SAINT CHARLES",
				address_state: "IL",
				address_zip: 749,
			},
			{
				address_street: "860 Ashland Place",
				address_city: "Alamo, Maryland, 2062",
				address_county: "SAINT CHARLES",
				address_state: "IL",
				address_zip: 749,
			},
		],
		className: "htCenter htMiddle",
		columns: [
			{ data: "address_zip", readOnly: true, width: 100 },
			{ data: "address_state", readOnly: true, width: 150 },
			{ data: "address_county", readOnly: true, width: 150 },
			{ data: "address_city", readOnly: true, width: 200 },
			{ data: "address_street", readOnly: true, width: 160 },
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
					<Box className={classes.heading}>Price History</Box>
					<CloseIcon onClick={handleClose} className={classes.icon} />
				</Box>
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
export default PriceHistory;
