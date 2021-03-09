import Box from "@material-ui/core/Box";
import Select from "@material-ui/core/Select";
import FormControl from "@material-ui/core/FormControl";
import FormHelperText from "@material-ui/core/FormHelperText";
import makeStyles from "@material-ui/core/styles/makeStyles";
import FilledInput from "@material-ui/core/FilledInput";
import Button from "@material-ui/core/Button";
import { HotTable, HotColumn } from "@handsontable/react";
import { useState } from "react";
import TextField from "@material-ui/core/TextField";
import withStyles from "@material-ui/core/styles/withStyles";
import {CssTextField} from '../../components/Inputs'

const useStyles = makeStyles(() => ({
	div: {
		display: "grid",
		gridTemplateColumns: "repeat(5, 1fr)",
		gap: "28px",
		margin: "0 auto",
	},
	label: {
		marginBottom: "2px",
		fontWeight: 500,
	},
	button: {
		color: "#fff",
		padding: "8px 36px",
	},
}));



const Contact = () => {
	const classes = useStyles();

	const [state, setState] = useState({
		cells: function (row: number) {
			let cp: any = {};
			if (row % 2 === 0) {
				cp.className = "greyRow";
			}
			return cp;
		},
		width: "100%",
		contextMenu: true,
		filters: true,
		columnSorting: true,
		colHeaders: [
			"",
			"Name",
			"Email",
			"Phone Number",
			"Business Relation",
			"Company",
			"State",
		],
		licenseKey: "non-commercial-and-evaluation",
	});
	return (
		<>
			<Box marginX="auto" marginTop={2} width="97%">
				<Box
					display="flex"
					justifyContent="flex-end"
					// width="inherit"
					marginTop={4}
					marginLeft="auto"
				>
					<CssTextField
						label="Email"
						variant="outlined"
						id="custom-css-outlined-input"
					/>
					<Button
						color="primary"
						variant="contained"
						className={classes.button}
					>
						Add Contact
					</Button>
				</Box>
				<Box
					width="inherit"
					marginX="auto"
					height="70vh"
					marginTop={4}
					bgcolor="#fff"
					borderRadius="4px"
				>
					<HotTable
						settings={state}
						id="hot"
						// data={data?.list_all_property_reports?.edges}
						dropdownMenu={[
							"alignment",
							"---------",
							"filter_by_condition",
							"---------",
							"filter_by_value",
							"---------",
							"filter_action_bar",
						]}
					></HotTable>
				</Box>
			</Box>
		</>
	);
};
export default Contact;
