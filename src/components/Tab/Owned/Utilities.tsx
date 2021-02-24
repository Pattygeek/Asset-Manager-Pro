import Box from "@material-ui/core/Box";
import makeStyles from "@material-ui/core/styles/makeStyles";
import { HotTable, HotColumn } from "@handsontable/react";
import { useState } from "react";

const useStyles = makeStyles((theme) => ({
	box: {
		color: "white",
		backgroundColor: "#109CF1",
		width: "100%",
		borderRadius: "4px 4px 0px 0px",
		padding: "8px 12px",
	},
}));

const Utilities = () => {
	const classes = useStyles();

	const [state, setState] = useState<any>({
		colHeaders: [
			"Date",
			"Time",
			"User",
			"Field Name",
			"Change",
			"Bill",
			"Amount Due",
			"Amount Paid",
		],
		licenseKey: "non-commercial-and-evaluation",
		rowHeights: 28,
		columnHeaderHeight: 35,
		width: 800,
		className: "htCenter htMiddle",
		data: [
			{
				address_zip: "11/12/20",
				address_state: "11:29AM",
				address_county: "John Masaro",
				address_city: "Electric",
				address_street: "Doc Upload",
				bill: "Hold Time",
				due: 12,
				paid: 12,
			},
			{
				address_zip: "11/12/20",
				address_state: "11:29AM",
				address_county: "John Masaro",
				address_city: "Electric",
				address_street: "Doc Upload",
				bill: "Hold Time",
				due: 12,
				paid: 12,
			},
			{
				address_zip: "11/12/20",
				address_state: "11:29AM",
				address_county: "John Masaro",
				address_city: "Electric",
				address_street: "Doc Upload",
				bill: "Hold Time",
				due: 12,
				paid: 12,
			},
			{
				address_zip: "11/12/20",
				address_state: "11:29AM",
				address_county: "John Masaro",
				address_city: "Electric",
				address_street: "Doc Upload",
				bill: "Hold Time",
				due: 12,
				paid: 12,
			},
			{
				address_zip: "11/12/20",
				address_state: "11:29AM",
				address_county: "John Masaro",
				address_city: "Electric",
				address_street: "Doc Upload",
				bill: "Hold Time",
				due: 12,
				paid: 12,
			},
			{
				address_zip: "11/12/20",
				address_state: "11:29AM",
				address_county: "John Masaro",
				address_city: "Electric",
				address_street: "Doc Upload",
				bill: "Hold Time",
				due: 12,
				paid: 12,
			},
			{
				address_zip: "11/12/20",
				address_state: "11:29AM",
				address_county: "John Masaro",
				address_city: "Electric",
				address_street: "Doc Upload",
				bill: "Hold Time",
				due: 12,
				paid: 12,
			},
			{
				address_zip: "11/12/20",
				address_state: "11:29AM",
				address_county: "John Masaro",
				address_city: "Electric",
				address_street: "Doc Upload",
				bill: "Hold Time",
				due: 12,
				paid: 12,
			},
		],
		columns: [
			{ data: "address_zip", readOnly: true, width: 70 },
			{ data: "address_state", readOnly: true, width: 70 },
			{ data: "address_county", readOnly: true, width: 120 },
			{ data: "address_city", readOnly: true, width: 70 },
			{ data: "address_street", readOnly: true, width: 90 },
			{ data: "bill", readOnly: true, width: 80 },
			{ data: "due", readOnly: true, width: 84 },
			{ data: "paid", readOnly: true, width: 84 },
		],
		minRows: 3,
		filters: true,
		columnSorting: true,
		
	});
	return (
		<>
			<Box
				width="65%"
				borderRadius={4}
				boxShadow="2px 2px 4px rgba(0, 0, 0, 0.25)"
				borderColor="#ececec"
				height="fit-content"
			>
				<Box className={classes.box}>Utilities {"&"} Invoices</Box>

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
					{/* <HotColumn width={100} />
					<HotColumn width={150} />
					<HotColumn width={150} />
					<HotColumn width={150} />
					<HotColumn width={115} /> */}
				</HotTable>
			</Box>
		</>
	);
};
export default Utilities;
