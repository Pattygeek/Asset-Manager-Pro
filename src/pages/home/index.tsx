import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import { HotTable } from "@handsontable/react";
import React, { useState, useRef } from "react";
import { useQuery } from "@apollo/client";
import { LIST_ALL_PROPERTY } from "../../helpers/graphql/queries";
import { useToggle } from "../../helpers/contexts/toggleContext";
import useVisibleHook from "../../utils/useVisibleHook";

//components
import { Tab } from "../../components";
import { PropertyRecord } from "../../components/Types";

const Home = () => {
	const { toggle } = useToggle();

	//tab handler
	const [open, setOpen] = useState<boolean>(false);

	const handleTabOpen = () => {
		setOpen(true);
	};

	const handleTabClose = () => {
		setOpen(false);
	};

	const useStyles = makeStyles((theme) => ({
		mainBox: {
			backgroundColor: "white",
			minHeight: "95%", //make it 97% on toggle
			width: toggle ? "97%" : "95%",
			// width: "95%",
			margin: "24px auto",
			overflowX: "hidden",
			overflowY: "hidden",
			position: "relative",
			display: "flex",
			flexDirection: "column",
			borderRadius: "4px",
			boxShadow: "0px 2px 2px 2px rgba(0, 0, 0, 0.07)",
			// flex: "1 1 0",
			justifyContent: "center",
		},
	}));
	const classes = useStyles();

	const { loading, error, data, fetchMore } = useQuery(LIST_ALL_PROPERTY, {
		variables: {
			limit: 50,
		},
	});

	// if (loading) return <p>Loading...</p>;
	// if (error) return <p>Error :(</p>;

	const [state, setState] = useState({
		rowHeights: 28,
		columnHeaderHeight: 35,
		viewportRowRenderingOffset: 20,
		viewportColumnRenderingOffset: 15,
		colWidths: 150,
		persistentState: true,
		persistentStateLoad: function () {
			//console.log(arguments[0], arguments[1])
			console.log("load am");
		},
		persistentStateReset: function () {
			//console.log(arguments[0], arguments[1])
			console.log("reset am");
		},
		persistentStateSave: function () {
			//console.log(arguments[0], arguments[1]);
			console.log("save am");
		},
		afterRowMove: function (
			movedRows: number[],
			finalIndex: number,
			dropIndex: number | undefined,
			movePossible: boolean,
			orderChanged: boolean
		) {
			
			if (movePossible === true && orderChanged === true) {
			
				// resetValue("manualRowMove");
			}
		},

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
			{ data: "contact_first_name" + "contact_last_name" },
			{ data: "contact_cell_phone" },
			{ data: "contact_email" },
			{ data: "user" },
			{ data: "property_status" },
			{ data: "reason" },
			{ data: "note" },
			{ data: "access" },
			{ data: "occupancy" },
			{ data: "product", readOnly: true },
			{ data: "prop_type" },
			{ data: "square_feet" },
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
		className: "htMiddle htCenter",
		// hiddenColumns: true,
		exportFile: true,
		manualRowMove: true,
		manualColumnMove: true,
		filters: true,
		height: "100%",
		// dropdownMenu: true,
		manualRowResize: true,
		columnSorting: true,
		manualColumnResize: true,
		allowInsertColumn: false,
		allowRemoveColumn: false,
		hiddenColumns: {
			indicators: true,
		},
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

	const hotTableComponentRef = useRef<HotTable>(null);

	//state to handle propertyStatus
	const [status, setStatus] = useState("");

	//state to handle row data
	const [rowData, setRowData] = useState<PropertyRecord>({});

	const { handleClickInside } = useVisibleHook(true);

	const handleDoubleClick = () => {
		handleTabOpen();
		// handleClickInside();
		if (hotTableComponentRef.current) {
			var currentHandsonTable = hotTableComponentRef.current.hotInstance;
			var currentCell = currentHandsonTable.getSelected();
			if (typeof currentCell != "undefined") {
				var currentCellNumber = currentCell[0];
				var currentRowNumber = currentCellNumber[0];
				var currentRowData: any = {};
				currentRowData = currentHandsonTable.getSourceDataAtRow(
					currentRowNumber
				);
				var currentRowPropertyStatus = currentRowData["property_status"];
				setStatus(currentRowPropertyStatus);
			}
			setRowData(currentRowData);
		}
	};

	return (
		<>
			{/* <Layout> */}
			<Box className={classes.mainBox} onDoubleClick={handleDoubleClick}>
				{data?.list_all_property_reports?.edges && (
					<HotTable
						ref={hotTableComponentRef}
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
						contextMenu={[
							"alignment",
							"cut",
							"copy",
							"hidden_columns_hide",
							"hidden_columns_show",
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
				{/* <Box width="inherit" display="flex" height="fit-content">
					<ArrowBackIosOutlinedIcon />
					<ArrowForwardIosOutlinedIcon />
				</Box> */}
				{open ? (
					<Tab handleClose={handleTabClose} status={status} rowData={rowData} />
				) : (
					""
				)}
			</Box>

			{/* </Layout> */}
		</>
	);
};
export default Home;
