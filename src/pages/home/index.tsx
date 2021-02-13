import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Handsontable from "handsontable";
import { HotTable, HotColumn } from "@handsontable/react";
import { useState } from "react";

//components
import { Sidebar, Navbar } from "../../components";

const useStyles = makeStyles((theme) => ({
	container: {
		height: "100vh",
		display: "flex",
	},
	box: {
		width: "100%",
		overflowX: "hidden",
	},
	main: {
		width: "100%",
		height: "calc(100% - 50px)",
		display: "flex",
		// overflowX: "hidden",
	},
	mainBox: {
		backgroundColor: "white",
		width: "95%",
		height: "95%",
		margin: "auto auto",
		overflowX: "scroll",
	},
}));

const Home = () => {
	const classes = useStyles();

	const [state, setState] = useState({
		// data: [
		// 	{
		// 		checked: "yes",
		// 		ActiveStarColor: "#ff6900",
		// 		InactiveStarColor: "#fcb900",
		// 	},

		// 	{
		// 		checked: "yes",
		// 		ActiveStarColor: "#ff6900",
		// 		InactiveStarColor: "#fcb900",
		// 	},

		// 	{
		// 		checked: "yes",
		// 		ActiveStarColor: "#ff6900",
		// 		InactiveStarColor: "#fcb900",
		// 	},

		// 	{
		// 		checked: "yes",
		// 		ActiveStarColor: "#ff6900",
		// 		InactiveStarColor: "#fcb900",
		// 	},

		// 	{
		// 		checked: "yes",
		// 		ActiveStarColor: "#ff6900",
		// 		InactiveStarColor: "#fcb900",
		// 	},
		// ],
		// rowHeaders: true,
		rowHeights: 30,
		columnHeaderHeight: 35,
		// columns: [
		// 	{
		// 		data: "checked",
		// 		type: "checkbox",
		// 		checkedTemplate: "yes",
		// 		uncheckedTemplate: "no",
		// 	},
		// 	// { data: "ActiveStarColor" },
		// 	// { data: "InactiveStarColor" },
		// ],
		autoWrapRow: true,
		collapsibleColumns: true,
		minCols: 44,
		// hiddenColumns: true,
		exportFile: true,
		manualRowMove: true,
		manualColumnMove: true,
		contextMenu: true,
		filters: true,
		dropdownMenu: true,
		manualRowResize: true,
		manualColumnResize: true,
		colHeaders: [
			"",
			"Property ID",
			"R",
			"Event Id",
			"Seller",
			"Auction Start Date",
			"Auction End Date",
			"Address",
			"City",
			"ST",
			"Zip",
			"Country",
			"Credit Bid",
			"Auction List Price ($)",
			"RSRV",
			"ST RSV ($)",
			"Buy Price",
			"Rehab ($)",
			"Resale ($)",
			"Profit ($)",
			"ROI",
			"Auction Agent",
			"Auction Agent Number",
			"Auction Agent Email",
			"User",
			"Status",
			"Reason",
			"Event Id",
			"Note",
			"Access",
			"Occupancy",
			"Product",
			"Prop Type",
			"SQFT",
			"BR",
			"BA",
			"Lot",
			"Year",
			"SB",
			"Bid History",
			"Bought Date",
			"Sold Date",
			"Sold Price",
			"Auction Status",
		],
		licenseKey: "non-commercial-and-evaluation",
	});
	return (
		<>
			<Box className={classes.container}>
				<Sidebar />
				<Box className={classes.box}>
					<Navbar />
					<Box bgcolor="secondary.main" className={classes.main}>
						<Box className={classes.mainBox}>
							<HotTable settings={state}>
								{/* <HotColumn width={100}></HotColumn>
								<HotColumn width={150}></HotColumn>
								<HotColumn width={150}></HotColumn> */}
							</HotTable>
						</Box>
					</Box>
				</Box>
			</Box>
		</>
	);
};
export default Home;
