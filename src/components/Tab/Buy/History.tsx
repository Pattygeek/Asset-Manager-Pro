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
		rowHeights: 30,
		columnHeaderHeight: 35,
		width: 800,
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
		],
		columns: [
			{ data: "address_zip", readOnly: true, width: 100 },
			{ data: "address_state", readOnly: true, width: 150 },
			{ data: "address_county", readOnly: true, width: 150 },
			{ data: "address_city", readOnly: true, width: 150 },
			{ data: "address_street", readOnly: true, width: 115 },
		],
		minRows: 3,
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
