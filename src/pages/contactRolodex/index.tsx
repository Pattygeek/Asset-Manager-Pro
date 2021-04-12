import Box from "@material-ui/core/Box";
import Select from "@material-ui/core/Select";
import FormControl from "@material-ui/core/FormControl";
import FormHelperText from "@material-ui/core/FormHelperText";
import makeStyles from "@material-ui/core/styles/makeStyles";
import FilledInput from "@material-ui/core/FilledInput";
import Button from "@material-ui/core/Button";
import { HotTable, HotColumn } from "@handsontable/react";
import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import TextField from "@material-ui/core/TextField";
import withStyles from "@material-ui/core/styles/withStyles";
import { CssTextField } from "../../components/Inputs";
import InputAdornment from "@material-ui/core/InputAdornment";
import SearchOutlinedIcon from "@material-ui/icons/SearchOutlined";
import { useQuery, useLazyQuery } from "@apollo/client";
import { LIST_CONTACT, CONTACTS_BY_ZIP } from "../../helpers/graphql/queries";
import { Contact } from "../../components/Types";
import Skeleton from "@material-ui/lab/Skeleton";
import theme from "../../helpers/theme";

const useStyles = makeStyles((theme) => ({
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
		height: "36px",
		marginLeft: "28px",
		width: "180px",
		// padding: "8px 6px",
	},
	search: {
		height: "36px",
	},
	scrollBox: {
		overflowY: "auto",
		overflowX: "hidden",
		height: "70vh",
		[theme.breakpoints.up("xl")]: {
			height: "80vh",
		},
		// "&::-webkit-scrollbar": {
		// 	width: "4px",
		// },
		// "&::-webkit-scrollbar-track": {
		// 	background: "#ebeff2",
		// 	borderRadius: "16px",
		// },
		// "&::-webkit-scrollbar-thumb": {
		// 	background: "rgba(109, 109, 109, 0.36)",
		// 	borderRadius: "16px",
		// },
	},
}));

const ContactRolodex = () => {
	const classes = useStyles();

	const [contactData, setContactData] = useState<Contact[]>([]);

	const [state, setState] = useState({
		width: "100%",
		contextMenu: true,
		filters: true,
		columnSorting: true,
		colHeaders: [
			"Name",
			"Email",
			"Phone Number",
			"Business Relation",
			"Company",
			"State",
		],
		className: "htMiddle htCenter",
		columns: [
			{ data: "contact_first_name", readOnly: true },
			{ data: "contact_email", readOnly: true },
			{ data: "contact_cell_phone", readOnly: true },
			{ data: "contact_type", readOnly: true },
			{ data: "contact_company", readOnly: true },
			{ data: "contact_company_address_state", readOnly: true },
		],
		licenseKey: "non-commercial-and-evaluation",
	});

	const { loading, error, data } = useQuery(LIST_CONTACT, {
		// variables: {
		// 	limit: 50,
		// },
	});

	//state for zip
	const [zip, setZip] = useState("");

	const handleChange = (e: React.ChangeEvent<any>) => {
		setZip(e.target.value);
	};

	const handleKeyPress = useMemo(
		() => (event: React.KeyboardEvent) => {
			if (event.key === "Enter") {
				get_contacts_by_zip({
					variables: {
						zip_code: zip,
					},
				});
			}
		},
		[zip]
	);

	// const handleKeyPress = (event: React.KeyboardEvent) => {
	// 	if (event.key === "Enter") {
	// 		get_contacts_by_zip({
	// 			variables: {
	// 				zip_code: zip,
	// 			},
	// 		});
	// 	}
	// };

	const [
		get_contacts_by_zip,
		{ loading: zipContactLoading, error: zipContactError, data: zipContacts },
	] = useLazyQuery(CONTACTS_BY_ZIP, {
		onCompleted() {
			setContactData(zipContacts.get_contacts_by_zip.contacts);
		},
		onError(err) {
			console.log(err);
			return null;
		},
	});

	return (
		<>
			<Box marginX="auto" marginTop={2} width="97%">
				<Box
					display="flex"
					justifyContent="flex-end"
					width="45%"
					marginTop={4}
					marginLeft="auto"
				>
					<CssTextField
						// label="Search for a contact"
						variant="outlined"
						placeholder="Search for a contact"
						id="custom-css-outlined-input"
						name="zipSearch"
						value={zip}
						onChange={handleChange}
						onKeyPress={handleKeyPress}
						InputProps={{
							className: classes.search,
							endAdornment: (
								<InputAdornment position="end">
									<SearchOutlinedIcon color="primary" />
								</InputAdornment>
							),
						}}
					/>
					<Link to="/contact/add-contact">
						<Button
							color="primary"
							variant="contained"
							className={classes.button}
							disableElevation
						>
							Add Contact
						</Button>
					</Link>
				</Box>
				<Box
					width="inherit"
					marginX="auto"
					marginTop={4}
					bgcolor="#fff"
					borderRadius="4px"
					className={classes.scrollBox}
				>
					{loading && (
						<>
							<Box p={2} overflow="hidden">
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
					{data?.list_paginated_contacts?.edges && (
						<HotTable
							settings={state}
							id="hot"
							stretchH="all"
							// data={data?.list_paginated_contacts?.edges}
							data={data.list_paginated_contacts.edges}
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
					)}
				</Box>
			</Box>
		</>
	);
};
export default ContactRolodex;
