import Box from "@material-ui/core/Box";
import makeStyles from "@material-ui/core/styles/makeStyles";
import { HotTable, HotColumn } from "@handsontable/react";
import Handsontable from "handsontable";
import {
	DateRenderer,
	TimeRenderer,
	UserNameRenderer,
	FieldNameRenderer,
} from "../../utils/customRenderers";
import { useState, ReactText } from "react";
import { useQuery } from "@apollo/client";
import { TAB_HISTORY } from "../../helpers/graphql/queries";

const useStyles = makeStyles((theme) => ({
	box: {
		color: "white",
		backgroundColor: "#109CF1",
		width: "100%",
		borderRadius: "4px 4px 0px 0px",
		padding: "8px 12px",
	},
}));

const History = (props: { property_id: string | undefined }) => {
	const classes = useStyles();

	const { property_id } = props;

	const [historyData, setHistoryData] = useState([]);

	const [state, setState] = useState<any>({
		colHeaders: ["Date", "Time", "User", "Field Name", "Change", "Notes"],
		licenseKey: "non-commercial-and-evaluation",
		rowHeights: 28,
		columnHeaderHeight: 35,
		className: "htMiddle htCenter",
		stretchH: "last",
		width: "100%",
		height: "auto",
		columns: [
			{
				data: "updated_at",
				readOnly: true,
				width: 90,
			},
			{ data: "updated_at", readOnly: true, width: 90 },
			{ data: "updated_by", readOnly: true, width: 120 },
			{ data: "field_name", readOnly: true, width: 120 },
			{ data: "new_value", readOnly: true, width: 100 },
			{ data: "notes", readOnly: true, width: 150 },
		],
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
		minRows: 3,
		filters: true,
		columnSorting: true,
		allowInsertColumn: false,
		allowRemoveColumn: false,
		dataSchema: "history",
	});

	const { loading, error, data } = useQuery(TAB_HISTORY, {
		variables: {
			property_id: property_id, //this is more like dummy property id, just to show the data, it will be updated to pick the actual property id
		},
		onCompleted() {
			setHistoryData(data.buy_stream_price_history.history);
		},
	});

	return (
		<>
			<Box
				width="65%"
				borderRadius={4}
				boxShadow="2px 2px 4px rgba(0, 0, 0, 0.25)"
				borderColor="#ececec"
				height="fit-content"
				marginBottom={6}
			>
				<Box className={classes.box}>History</Box>
				{historyData.length < 1 ? (
					<Box textAlign="center" py={3}>There is no history yet for this property</Box>
				) : (
					<HotTable
						settings={state}
						data={historyData}
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
						<HotColumn data={state.columns[1].data}>
							<TimeRenderer hot-renderer />
						</HotColumn>
						<HotColumn data={state.columns[2].data}>
							<UserNameRenderer hot-renderer />
						</HotColumn>

						<HotColumn data={state.columns[3].data}>
							<FieldNameRenderer hot-renderer />
						</HotColumn>
						<HotColumn data={state.columns[4].data} />
						<HotColumn data={state.columns[5].data} />
					</HotTable>
				)}
			</Box>
		</>
	);
};
export default History;
