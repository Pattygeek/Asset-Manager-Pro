import Dialog from "@material-ui/core/Dialog";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Box from "@material-ui/core/Box";
import { HotTable, HotColumn } from "@handsontable/react";
import CloseIcon from "@material-ui/icons/Close";
import { useState, ReactText } from "react";
import Handsontable from "handsontable";
import { PRICE_HISTORY } from "../../../helpers/graphql/queries";
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
	icon: {
		cursor: "pointer",
		"&:hover": {
			color: "grey",
		},
	},
}));

const PriceHistory = ({ open, handleClose, property_id }: ModalProps) => {
	const classes = useStyles();

	const [priceHistoryData, setPriceHistoryData] = useState([]);

	const [state, setState] = useState<any>({
		colHeaders: ["Date", "Status", "Sale Type", "Amount", "Source"],
		licenseKey: "non-commercial-and-evaluation",
		rowHeights: 26,
		columnHeaderHeight: 35,
		width: 760,
		height: "auto",
		filters: true,
		stretchH: "all",
		columnSorting: true,
		allowInsertColumn: false,
		allowRemoveColumn: false,
		className: "htCenter htMiddle",
		minRows: 1,
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
			{ data: "transaction_date", readOnly: true, width: 100 },
			{ data: "status", readOnly: true, width: 150 },
			{ data: "sales_type", readOnly: true, width: 150 },
			{ data: "transaction_amount", readOnly: true, width: 200 },
			{ data: "source", readOnly: true, width: 160 },
		],
	});

	const { loading, error, data } = useQuery(PRICE_HISTORY, {
		variables: {
			property_id: "606f3512bf50a9a83fddaf7f", //this is more like dummy property id, just to show the data, it will be updated to pick the actual property id
		},
		onCompleted() {
			setPriceHistoryData(data?.get_price_history?.price_history);
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
					<Box className={classes.heading}>Price History</Box>
					<CloseIcon onClick={handleClose} className={classes.icon} />
				</Box>
				<HotTable
					settings={state}
					data={priceHistoryData}
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
				</HotTable>
			</Dialog>
		</>
	);
};
export default PriceHistory;
