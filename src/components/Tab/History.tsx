import Box from "@material-ui/core/Box";
import makeStyles from "@material-ui/core/styles/makeStyles";
import { HotTable, HotColumn } from "@handsontable/react";
import { useState } from "react";

const useStyles = makeStyles((theme) => ({
	price: {
		color: "#109CF1",
		cursor: "pointer",
		borderColor: "#c4c4c4",
		marginBottom: "8px",
	},
	icon: {
		width: "16px",
		height: "16px",
	},
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
		width: 800,
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
		columns: [
			{ data: "address_zip", readOnly: true, width: 90 },
			{ data: "address_state", readOnly: true, width: 90 },
			{ data: "address_county", readOnly: true, width: 125 },
			{ data: "address_city", readOnly: true, width: 100 },
			{ data: "address_street", readOnly: true, width: 100 },
			{ data: "notes", readOnly: true, width: 160 },
		],
		minRows: 3,
		filters: true,
		columnSorting: true,
	});
	return (
		<>
			<Box
				border={1}
				width="65%"
				borderRadius={4}
				boxShadow="2px 2px 4px rgba(0, 0, 0, 0.25)"
				borderColor="#ececec"
				height="fit-content"
			>
				<Box className={classes.box}>History</Box>

				<HotTable settings={state}>
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
