import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Handsontable from "handsontable";
import { HotTable, HotColumn } from "@handsontable/react";
import React, { useState, useEffect } from "react";
import { useQuery } from "@apollo/client";
import { LIST_ALL_PROPERTY } from "../../helpers/graphql/queries";

//components
import { Layout, Tab } from "../../components";

const Home = () => {
	const [toggle, setToggle] = useState<boolean>(false);

	const toggler = () => {
		setToggle(!toggle);
	};

	//tab handler
	const [open, setOpen] = useState<boolean>(false);

	const handleOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	useEffect((): void => {
		document.body.addEventListener("dblclick", function (e) {
			handleOpen();
			// alert(hotter.getSelected());
		});
	}, []);

	// const hotTableComponent = React.createRef();

	const useStyles = makeStyles((theme) => ({
		container: {
			height: "100vh",
			display: "flex",
			// overflowX: "hidden",
		},
		box: {
			width: "100%",
			// overflowX: "hidden",
		},
		main: {
			width: "100%",
			height: "calc(100% - 50px)",
			display: "flex",
			//zIndex: -10,
			// overflowX: "hidden",
		},
		mainBox: {
			backgroundColor: "white",
			height: "95%", //make it 97% on toggle
			width: toggle ? "97%" : "95%",
			// width: "95%",
			margin: "auto auto",
			overflowX: "scroll",
			position: "relative",
			display: "flex",
			// flex: "1 1 0",
			justifyContent: "center",
		},
	}));
	const classes = useStyles();

	const { loading, error, data } = useQuery(LIST_ALL_PROPERTY);

	// if (loading) return <p>Loading...</p>;
	// if (error) return <p>Error :(</p>;

	console.log(data?.list_all_property_reports.edges);

	const [state, setState] = useState({
		// rowHeaders: true,
		rowHeights: 28,
		columnHeaderHeight: 35,
		columns: [
			{
				data: "checked",
				type: "checkbox",
				checkedTemplate: "yes",
				uncheckedTemplate: "no",
				className: "htCenter",
			},
			{ data: "property_id", readOnly: true },
			{ data: "r", readOnly: true },
			{ data: "auction_event_id", readOnly: true },
			{ data: "seller_code", readOnly: true },
			{ data: "auction_start_date" },
			{ data: "auction_end_date" },
			{ data: "address_street" },
			{ data: "address_city" },
			{ data: "address_state" },
			{ data: "address_zip" },
			{ data: "address_county" },
			{ data: "credit_bid", readOnly: true },
			{ data: "auction_list_price" },
			{ data: "rsrv" },
			{ data: "st_rsrv" },
			{ data: "buy_price" },
			{ data: "rehabilitation_cost" },
			{ data: "resale_price" },
			{ data: "profit", readOnly: true },
			{ data: "return_on_investment", readOnly: true },
			{ data: "auction_agent" },
			{ data: "auction_agent_number" },
			{ data: "auction_agent_email" },
			{ data: "user" },
			{ data: "property_status" },
			{ data: "reason" },
			{ data: "note" },
			{ data: "access" },
			{ data: "reason" },
			{ data: "occupancy" },
			{ data: "product", readOnly: true },
			{ data: "prop_type" },
			{ data: "sqft" },
			{ data: "bed_rooms" },
			{ data: "bath_rooms" },
			{ data: "lot_size" },
			{ data: "sb" },
			{ data: "bid_history", readOnly: true },
			{ data: "bought_date" },
			{ data: "sold_date" },
			{ data: "sold_price" },
			{ data: "auction_status" },
		],
		autoWrapRow: true,
		collapsibleColumns: true,
		minCols: 44,
		className: "htMiddle htCenter striped",
		// hiddenColumns: true,
		exportFile: true,
		manualRowMove: true,
		manualColumnMove: true,
		contextMenu: true,
		filters: true,
		// dropdownMenu: true,
		manualRowResize: true,
		columnSorting: true,
		manualColumnResize: true,
		allowInsertColumn: false,
		allowRemoveColumn: false,
		//rowHeaders: true,
		// rowHeaders: ["checkbox", ""],
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
			"Buy Price ($)",
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
			<Layout>
				<Box className={classes.mainBox}>
					{data?.list_all_property_reports?.edges && (
						<HotTable
							settings={state}
							id="hot"
							data={data?.list_all_property_reports?.edges}
							dropdownMenu={[
								"alignment",
								"---------",
								"filter_by_condition",
								"---------",
								"filter_by_value",
								"---------",
								"filter_action_bar",
							]}

							// rowHeaders={[

							// 		type: "checkbox",
							// 		checkedTemplate: "yes",
							// 		uncheckedTemplate: "no",

							// ]}
						>
							{/* <HotColumn width={100}></HotColumn>
								<HotColumn width={150}></HotColumn>
								<HotColumn width={150}></HotColumn> */}
						</HotTable>
					)}
					{open ? <Tab toggle={toggle} handleClose={handleClose} /> : ""}
				</Box>
			</Layout>
		</>
	);
};
export default Home;
