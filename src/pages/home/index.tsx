import makeStyles from "@material-ui/core/styles/makeStyles";
import Box from "@material-ui/core/Box";
import { HotTable } from "@handsontable/react";
import React, {
	useState,
	useRef,
	ReactText,
	useMemo,
	useCallback,
	useEffect,
} from "react";
import { useQuery, useApolloClient } from "@apollo/client";
import { LIST_ALL_PROPERTY } from "../../helpers/graphql/queries";
import { LIST_ALL_PROPERTY_CACHE } from "../../helpers/graphql/ApolloClient/cacheQuery";
import { useToggle } from "../../helpers/contexts/toggleContext";
import useVisibleHook from "../../utils/useVisibleHook";
import Handsontable from "handsontable";
import { useRowData } from "../../helpers/contexts/rowDataContext";

//components
import { Tab } from "../../components";
import { PropertyRecord } from "../../components/Types";
import Skeleton from "@material-ui/lab/Skeleton";

const Home = () => {
	const { toggle } = useToggle();

	const { rowData, handleRowData } = useRowData();

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

	const limit = 20;

	const [property, setProperty] = useState<any[]>([]);

	const { loading, error, data, fetchMore } = useQuery(LIST_ALL_PROPERTY, {
		notifyOnNetworkStatusChange: true,
		variables: {
			limit,
		},
	});

	// (() => {
	// 	fetchMore({
	// 		variables: {
	// 			limit: 0,
	// 		},
	// 	});
	// })();

	// console.log(data);

	// useEffect(() => {
	// 	setTimeout(() => {
	// 		fetchMore({
	// 			variables: {
	// 				cursor: data?.list_all_property_reports[0].page_info.end_cursor,
	// 				limit: 40,
	// 			},
	// 		});
	// 	}, 5000);
	// }, []);

	// const { data: MoreData } = useQuery(LIST_ALL_PROPERTY, {
	// 	variables: {
	// 		cursor: "2021-04-09T10:44:54.417Z",
	// 	},
	// });

	// const AllData = data?.concat(MoreData);

	// console.log(AllData);

	const [hasMore, setHasMore] = useState(false);

	const scrollRef = React.createRef<HTMLDivElement>();
	const hotTableComponentRef = React.createRef<HotTable>();



	const [state, setState] = useState({
		rowHeights: 28,
		columnHeaderHeight: 35,
		viewportRowRenderingOffset: 20,
		viewportColumnRenderingOffset: 15,
		colWidths: [
			50,
			150,
			70,
			150,
			150,
			150,
			150,
			200,
			150,
			70,
			80,
			150,
			150,
			165,
			70,
			150,
			150,
			150,
			150,
			150,
			100,
			150,
			175,
			175,
			150,
			150,
			150,
			200,
			150,
			150,
			150,
			150,
			100,
			70,
			70,
			100,
			100,
			150,
			150,
			150,
			150,
			150,
		],
		// afterChange: function (change: any[], source: string) {
		// 	console.log(change);
		// 	console.log(source);
		// },
		renderer: function (
			instance: Handsontable,
			td: HTMLTableCellElement,
			row: number,
			col: number,
			prop: ReactText,
			value: Handsontable.CellValue,
			cellProperties: Handsontable.CellProperties
		) {
			Handsontable.renderers.TextRenderer.apply(
				this,
				(arguments as unknown) as [
					Handsontable,
					HTMLTableCellElement,
					number,
					number,
					string | number,
					Handsontable.CellValue,
					Handsontable.CellProperties
				]
			);
			td.innerHTML =
				value === null ? "" : `<div class="truncated">${value}</div>`;
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
			{
				data: "auction_start_date",
				type: "date",
				dateFormat: "DD/MM/YYYY",
				correctFormat: true,
			},
			{
				data: "auction_end_date",
				type: "date",
				dateFormat: "DD/MM/YYYY",
				correctFormat: true,
			},
			{ data: "address_street" },
			{ data: "address_city" },
			{ data: "address_state" },
			{ data: "address_zip" },
			{ data: "address_county" },
			{ data: "credit_bid", readOnly: true },
			{
				data: "auction_list_price",
				type: "numeric",
				numericFormat: {
					pattern: "$0,0",
					culture: "en-US", // this is the default culture, set up for USD
				},
			},
			{ data: "rsrv" },
			{
				data: "st_rsv",
				type: "numeric",
				numericFormat: {
					pattern: "$0,0",
					culture: "en-US", // this is the default culture, set up for USD
				},
			},
			{
				data: "buy_price",
				type: "numeric",
				numericFormat: {
					pattern: "$0,0",
					culture: "en-US", // this is the default culture, set up for USD
				},
			},
			{
				data: "rehabilitation_cost",
				type: "numeric",
				numericFormat: {
					pattern: "$0,0",
					culture: "en-US", // this is the default culture, set up for USD
				},
			},
			{
				data: "resale_price",
				type: "numeric",
				numericFormat: {
					pattern: "$0,0",
					culture: "en-US", // this is the default culture, set up for USD
				},
			},
			{
				data: "profit",
				readOnly: true,
				type: "numeric",
				numericFormat: {
					pattern: "$0,0",
					culture: "en-US", // this is the default culture, set up for USD
				},
			},
			{
				data: "return_on_investment",
				readOnly: true,
				type: "numeric",
				numericFormat: {
					pattern: "0,0%",
					culture: "en-US",
				},
			},
			{
				data: "contact_first_name" + " " + "contact_last_name",
			},
			{ data: "contact_cell_phone" },
			{ data: "contact_email" },
			{ data: "user" },
			{ data: "property_status" },
			{ data: "none_interest_reason" },
			{ data: "note" },
			{ data: "interior_access" },
			{ data: "occupancy_status" },
			{ data: "product", readOnly: true },
			{ data: "property_type" },
			{
				data: "square_feet",
				type: "numeric",
				numericFormat: {
					pattern: "0,0",
					culture: "en-US",
				},
			},
			{ data: "bed_rooms" },
			{ data: "bath_rooms" },
			{
				data: "lot_size",
				type: "numeric",
				numericFormat: {
					pattern: "0,0.00",
					culture: "en-US",
				},
			},
			{ data: "sb" },
			{ data: "bid_history", readOnly: true },
			{
				data: "bought_date",
				type: "date",
				dateFormat: "DD/MM/YYYY",
				correctFormat: true,
			},
			{
				data: "sold_date",
				type: "date",
				dateFormat: "DD/MM/YYYY",
				correctFormat: true,
			},
			{
				data: "sold_price",
				numericFormat: {
					pattern: "$0,0",
					culture: "en-US",
				},
			},
			{ data: "auction_status" },
		],
		autoWrapRow: true,
		collapsibleColumns: true,
		minCols: 44,
		minRows: 1,
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
		sortIndicator: true,
		manualColumnResize: true,
		allowInsertColumn: false,
		allowRemoveColumn: false,
		hiddenColumns: {
			indicators: true,
		},
		currentRowClassName: "currentRow",
		currentColClassName: "currentCol",
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

	//state to handle propertyStatus
	const [status, setStatus] = useState("");

	//state to handle row data
	// const [rowData, setRowData] = useState<PropertyRecord>({});

	const { handleClickInside } = useVisibleHook(true);

	const handleClick = () => {
		// handleClickInside();
		if (hotTableComponentRef.current) {
			var currentHandsonTable = hotTableComponentRef.current.hotInstance;
			var currentCell = currentHandsonTable.getSelected();
			var colHeader = currentHandsonTable.hasColHeaders();
			// if (!colHeader) {
			if (typeof currentCell != "undefined") {
				var currentCellNumber = currentCell[0];
				var currentRowNumber = currentCellNumber[0];
				var currentRowData: any = {};
				if (currentRowNumber > -1) {
					currentRowData = currentHandsonTable.getSourceDataAtRow(
						currentRowNumber
					);
					var currentRowPropertyStatus = currentRowData["property_status"];
					setStatus(currentRowPropertyStatus);
					handleRowData!(currentRowData);
					if (!open) {
						handleTabOpen();
					}
				}
			}
			// }
		}
	};

	return (
		<>
			{/* <Layout> */}
			<div
				className={classes.mainBox}
				// onDoubleClick={handleDoubleClick}
				ref={scrollRef}
			>
				{loading && (
					<>
						<Box width="100%" p={2}>
							<Skeleton height={40} />
							<Skeleton height={40} />
							<Skeleton height={40} />
							<Skeleton height={40} />
							<Skeleton height={40} />
							<Skeleton height={40} />
							<Skeleton height={40} />
							<Skeleton height={40} />
							<Skeleton height={40} />
							<Skeleton height={40} />
							<Skeleton height={40} />
							<Skeleton height={40} />
							<Skeleton height={40} />
							<Skeleton height={40} />
							<Skeleton height={40} />
							<Skeleton height={40} />
							<Skeleton height={40} />
							<Skeleton height={40} />
							<Skeleton height={40} />
							<Skeleton height={40} />
							<Skeleton height={40} />
							<Skeleton height={40} />
							<Skeleton height={40} />
							<Skeleton height={40} />
							<Skeleton height={40} />
							<Skeleton height={40} />
							<Skeleton height={40} />
							<Skeleton height={40} />
							<Skeleton height={40} />
							<Skeleton height={40} />
						</Box>
					</>
				)}
				{data?.list_all_property_reports?.edges && (
					<HotTable
						ref={hotTableComponentRef}
						settings={state}
						id="hot"
						afterSelection={handleClick}
						//afterScrollVertically={handleScroll}
						data={data.list_all_property_reports.edges}
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
						
					>
						
					</HotTable>
				)}
				
				{open ? (
					<Tab handleClose={handleTabClose} status={status} rowData={rowData} />
				) : (
					""
				)}
			</div>
			
		</>
	);
};
export default Home;
