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

const History = () => {
	const classes = useStyles();

	const [state, setState] = useState<any>({
		colHeaders: ["Date", "Time", "User", "Field Name", "Change", "Notes"],
		licenseKey: "non-commercial-and-evaluation",
		rowHeights: 28,
		columnHeaderHeight: 35,
		cells: function (row: number) {
			let cp: any = {};
			if (row % 2 === 0) {
				cp.className = "greyRow";
			}
			return cp;
		},
		className: "htCenter htMiddle",
		data: [
			{
				address_zip: "11/12/20",
				address_state: "11:29AM",
				address_county: "John Masaro",
				address_city: "Hold Time",
				address_street: "Follow up",
				notes: "A short note",
			},
			{
				address_zip: "11/12/20",
				address_state: "11:29AM",
				address_county: "John Masaro",
				address_city: "Hold Time",
				address_street: "Follow up",
				notes: "A short note",
			},
			{
				address_zip: "11/12/20",
				address_state: "11:29AM",
				address_county: "John Masaro",
				address_city: "Hold Time",
				address_street: "Follow up",
				notes: "A short note",
			},
			{
				address_zip: "11/12/20",
				address_state: "11:29AM",
				address_county: "John Masaro",
				address_city: "Hold Time",
				address_street: "Follow up",
				notes: "A short note",
			},
			{
				address_zip: "11/12/20",
				address_state: "11:29AM",
				address_county: "John Masaro",
				address_city: "Hold Time",
				address_street: "Follow up",
				notes: "A short note",
			},
			{
				address_zip: "11/12/20",
				address_state: "11:29AM",
				address_county: "John Masaro",
				address_city: "Hold Time",
				address_street: "Follow up",
				notes: "A short note",
			},
			{
				address_zip: "11/12/20",
				address_state: "11:29AM",
				address_county: "John Masaro",
				address_city: "Hold Time",
				address_street: "Follow up",
				notes: "A short note",
			},
			{
				address_zip: "11/12/20",
				address_state: "11:29AM",
				address_county: "John Masaro",
				address_city: "Hold Time",
				address_street: "Follow up",
				notes: "A short note",
			},
		],
		width: "100%",
		columns: [
			{ data: "address_zip", readOnly: true, width: 90 },
			{ data: "address_state", readOnly: true, width: 90 },
			{ data: "address_county", readOnly: true, width: 120 },
			{ data: "address_city", readOnly: true, width: 120 },
			{ data: "address_street", readOnly: true, width: 100 },
			{ data: "notes", readOnly: true, width: 150 },
		],
		minRows: 3,
		filters: true,

		columnSorting: true,
		allowInsertColumn: false,
		allowRemoveColumn: false,
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
				<Box className={classes.box}>History</Box>

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
export default History;
