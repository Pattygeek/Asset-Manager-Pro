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
import Skeleton from "@material-ui/lab/Skeleton";

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
		colHeaders: ["Date", "Time", "User", "Field Name", "Change"],
		licenseKey: "non-commercial-and-evaluation",
		rowHeights: 28,
		columnHeaderHeight: 35,
		className: "htMiddle htLeft",
		stretchH: "all",
		width: "100%",
		height: "auto",
		columns: [
			{
				data: "updated_at",
				readOnly: true,
			},
			{ data: "updated_at", readOnly: true },
			{ data: "updated_by", readOnly: true },
			{ data: "field_name", readOnly: true },
			{ data: "new_value", readOnly: true },
			//{ data: "notes", readOnly: true, width: 150 },
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
			td.innerHTML = `<div class="truncated">${value}</div>`;
		},
		minRows: 1,
		filters: true,
		columnSorting: true,
		allowInsertColumn: false,
		allowRemoveColumn: false,
	});

	const { loading, error, data } = useQuery(TAB_HISTORY, {
		variables: {
			property_id: property_id, //this is more like dummy property id, just to show the data, it will be updated to pick the actual property id
		},
		// onCompleted() {
		// 	setHistoryData(data?.buy_stream_price_history?.history);
		// },
	});

	return (
		<>
			<Box
				width="100%"
				borderRadius={4}
				boxShadow="2px 2px 4px rgba(0, 0, 0, 0.25)"
				borderColor="#ececec"
				height="fit-content"
				marginBottom={6}
			>
				<Box className={classes.box}>History</Box>
				{loading && (
					<Box>
						<Skeleton height={40} />
						<Skeleton height={40} />
					</Box>
				)}
				{data?.buy_stream_price_history?.history.length < 1 && (
					<Box textAlign="center" py={3}>
						There is no history yet for this property
					</Box>
				)}
				{data?.buy_stream_price_history?.history &&
					data?.buy_stream_price_history?.history.length >= 1 && (
						<HotTable
							settings={state}
							data={data?.buy_stream_price_history?.history}
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
						</HotTable>
					)}
			</Box>
		</>
	);
};
export default History;
