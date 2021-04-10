import Dialog from "@material-ui/core/Dialog";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Box from "@material-ui/core/Box";
import CloseIcon from "@material-ui/icons/Close";
import { HotTable, HotColumn } from "@handsontable/react";
import { useState, ReactText } from "react";
import Handsontable from "handsontable";
import { BID_HISTORY } from "../../../helpers/graphql/queries";
import { useQuery } from "@apollo/client";
import { DateRenderer } from "../../../utils/customRenderers";

interface ModalProps {
	open: boolean;
	handleClose: () => any;
	property_id?: string | undefined;
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
	dialog: {
		width: "870px",
	},
	icon: {
		cursor: "pointer",
		"&:hover": {
			color: "grey",
		},
	},
}));

const BidHistory = ({ open, handleClose, property_id }: ModalProps) => {
	const classes = useStyles();

	const [bidHistoryData, setBidHistoryData] = useState([]);

	const [header] = useState<any>({
		colHeaders: ["Total Live Bids", "Live Bidders", "Highest Bid"],
		data: [
			{
				total_live_bids: 5,
				live_bidders: 2,
				highest_bid: "$167,000",
			},
		],
		className: "htCenter htMiddle",
		width: 760,
		height: "auto",
		rowHeights: 35,
		columnHeaderHeight: 35,
		columns: [
			{ data: "total_live_bids", readOnly: true, width: 200 },
			{ data: "live_bidders", readOnly: true, width: 200 },
			{ data: "highest_bid", readOnly: true, width: 360 },
		],
		licenseKey: "non-commercial-and-evaluation",
	});

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
		height: "auto",
		className: "htCenter htMiddle",
		filters: true,
		columnSorting: true,
		allowInsertColumn: false,
		allowRemoveColumn: false,
		minRows: 1,
		stretchH:"all",
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
			td.innerHTML = `<div class="truncated">${value}</div>`;
		},
		columns: [
			{ data: "date_time", readOnly: true, width: 75 },
			{ data: "auction_event_id", readOnly: true, width: 70 },
			{ data: "bidder_type", readOnly: true, width: 120 },
			{ data: "bid_amount", readOnly: true, width: 170 },
			{ data: "bid_increment", readOnly: true, width: 130 },
			{ data: "reserve_status", readOnly: true, width: 100 },
			{ data: "sales_status", readOnly: true, width: 95 },
		],
	});

	const { loading, error, data } = useQuery(BID_HISTORY, {
		variables: {
			property_id: "606f3512bf50a9a83fddaf7f", //this is more like dummy property id, just to show the data, it will be updated to pick the actual property id
		},
		onCompleted() {
			setBidHistoryData(data?.get_bid_history?.bid_history);
		},
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
					<Box className={classes.heading}>Bid History</Box>
					<CloseIcon onClick={handleClose} className={classes.icon} />
				</Box>
				<HotTable settings={header}></HotTable>
				<HotTable
					settings={state}
					data={bidHistoryData}
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
					<HotColumn data={state.columns[0].data}>
						<DateRenderer hot-renderer />
					</HotColumn>
					<HotColumn data={state.columns[1].data} />
					<HotColumn data={state.columns[2].data} />
					<HotColumn data={state.columns[3].data} />
					<HotColumn data={state.columns[4].data} />
					<HotColumn data={state.columns[5].data} />
					<HotColumn data={state.columns[6].data} />
				</HotTable>
			</Dialog>
		</>
	);
};
export default BidHistory;
