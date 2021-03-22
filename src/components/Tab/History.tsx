import Box from "@material-ui/core/Box";
import makeStyles from "@material-ui/core/styles/makeStyles";
import { HotTable, HotColumn } from "@handsontable/react";
import { useState } from "react";
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

	const [state, setState] = useState<any>({
		colHeaders: ["Date", "Time", "User", "Field Name", "Change", "Notes"],
		licenseKey: "non-commercial-and-evaluation",
		rowHeights: 28,
		columnHeaderHeight: 35,
		className: "htMiddle htCenter",
		stretchH: "last",
		// data: [
		// 	{
		// 		updated_at: "11/12/20",
		// 		updated_att: "11:29AM",
		// 		updated_by: "John Masaro",
		// 		field_name: "Hold Time",
		// 		new_value: "Follow up",
		// 		notes: "A short note",
		// 	},
		// 	{
		// 		updated_at: "11/12/20",
		// 		updated_att: "11:29AM",
		// 		updated_by: "John Masaro",
		// 		field_name: "Hold Time",
		// 		new_value: "Follow up",
		// 		notes: "A short note",
		// 	},
		// 	{
		// 		updated_at: "11/12/20",
		// 		updated_att: "11:29AM",
		// 		updated_by: "John Masaro",
		// 		field_name: "Hold Time",
		// 		new_value: "Follow up",
		// 		notes: "A short note",
		// 	},
		// 	{
		// 		updated_at: "11/12/20",
		// 		updated_att: "11:29AM",
		// 		updated_by: "John Masaro",
		// 		field_name: "Hold Time",
		// 		new_value: "Follow up",
		// 		notes: "A short note",
		// 	},
		// 	{
		// 		updated_at: "11/12/20",
		// 		updated_att: "11:29AM",
		// 		updated_by: "John Masaro",
		// 		field_name: "Hold Time",
		// 		new_value: "Follow up",
		// 		notes: "A short note",
		// 	},
		// 	{
		// 		updated_at: "11/12/20",
		// 		updated_att: "11:29AM",
		// 		updated_by: "John Masaro",
		// 		field_name: "Hold Time",
		// 		new_value: "Follow up",
		// 		notes: "A short note",
		// 	},
		// 	{
		// 		updated_at: "11/12/20",
		// 		updated_att: "11:29AM",
		// 		updated_by: "John Masaro",
		// 		field_name: "Hold Time",
		// 		new_value: "Follow up",
		// 		notes: "A short note",
		// 	},
		// 	{
		// 		updated_at: "11/12/20",
		// 		updated_att: "11:29AM",
		// 		updated_by: "John Masaro",
		// 		field_name: "Hold Time",
		// 		new_value: "Follow up",
		// 		notes: "A short note",
		// 	},
		// ],
		width: "100%",
		height: "auto",
		columns: [
			{
				data: "updated_at",
				readOnly: true,
				width: 90,
				type: "date",
				dateFormat: "DD/MM/YYYY",
				datePickerConfig: {
					// First day of the week (0: Sunday, 1: Monday, etc)
					firstDay: 0,
					showWeekNumber: true,
					numberOfMonths: 3,
					disableDayFn: function (date: any) {
						// Disable Sunday and Saturday
						return date.getDay() === 0 || date.getDay() === 6;
					},
				},
			},
			{ data: "updated_at", readOnly: true, width: 90, renderer: "time" },
			{ data: "updated_by", readOnly: true, width: 120 },
			{ data: "field_name", readOnly: true, width: 120 },
			{ data: "new_value", readOnly: true, width: 100 },
			{ data: "notes", readOnly: true, width: 150 },
		],
		minRows: 3,
		filters: true,
		columnSorting: true,
		allowInsertColumn: false,
		allowRemoveColumn: false,
	});

	

	const [historyData, setHistoryData] = useState([]);

	console.log(historyData);

	const { loading, error, data } = useQuery(TAB_HISTORY, {
		variables: {
			property_id: "603da03580cbd833053229f2", //this is more like dummy property id, just to show the data, it will be updated to pick the actual property id
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
