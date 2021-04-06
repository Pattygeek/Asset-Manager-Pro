import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Box from "@material-ui/core/Box";
import { TabPanel } from "./TabPanel";
import CancelOutlinedIcon from "@material-ui/icons/CancelOutlined";
import Buy from "./Buy";
import Escrow from "./Escrow";
import Owned from "./Owned";
import React, { useState } from "react";
import useVisibleHook from "../../utils/useVisibleHook";
import { useQuery } from "@apollo/client";
import { LIST_CONTACT } from "../../helpers/graphql/queries";
import { PropertyRecord } from "../Types";
// import { useContacts } from "../../helpers/contexts/contactsContext";

interface tabProps {
	handleClose: () => any;
	status: string;
	rowData: PropertyRecord;
}

const StatusTab = ({ handleClose, status, rowData }: tabProps) => {
	const useStyles = makeStyles((theme) => ({
		root: {
			boxShadow:
				"0px 0px 4px rgba(0, 0, 0, 0.12), 0px 4px 4px rgba(0, 0, 0, 0.24)",
		},
		overlay: {
			width: "100%",
			height: "100%",
			margin: "0px auto",
			overflowX: "hidden",
			//overflowY: "scroll",
			backgroundColor: "white",
			position: "absolute",
			padding: "8px",
			top: 65,
			zIndex: +200,
		},
		icon: {
			cursor: "pointer",
			"&:hover": {
				color: "#979797",
			},
		},
		iconBox: {
			right: -5,
			position: "absolute",
			cursor: "pointer",
			justifyContent: "center",
			width: "40px",
			display: "flex",
			height: "40px",
		},
		tab: {
			marginTop: "8px",
			marginBottom: "8px",
			//overflowY: "scroll",
			height: "fit-content",
		},
		text: {
			textTransform: "capitalize",
		},
	}));

	const classes = useStyles();

	//switch statement to handle active tab according to the property status value
	let statusValue: number;
	switch (status) {
		case "NEW_ASSET":
			statusValue = 0;
			break;

		case "NOT_REVIEWED":
			statusValue = 0;
			break;
		case "NEW_LEAD":
			statusValue = 0;
			break;
		case "RE_REVIEW":
			statusValue = 0;
			break;
		case "NOT_INTERESTED":
			statusValue = 0;
			break;
		case "CALL_AGENT":
			statusValue = 0;
			break;
		case "PENDING_INTEL":
			statusValue = 0;
			break;
		case "FOLLOW_UP":
			statusValue = 0;
			break;
		case "BID_PENDING":
			statusValue = 0;
			break;
		case "PROXY":
			statusValue = 0;
			break;
		case "BID":
			statusValue = 0;
			break;
		case "REJECTED":
			statusValue = 0;
			break;
		case "SALE_CANCELLED":
			statusValue = 0;
			break;
		case "LOST":
			statusValue = 0;
			break;
		case "WON":
			statusValue = 1;
			break;
		case "IN_CLOSING":
			statusValue = 1;
			break;
		case "CLOSED":
			statusValue = 2;
			break;
		case "OCCUPIED":
			statusValue = 2;
			break;
		case "PENDING_VACANCY":
			statusValue = 2;
			break;
		case "IN_EVICTION":
			statusValue = 2;
			break;
		case "PENDING_BID":
			statusValue = 2;
			break;
		case "BEING_REHABBED":
			statusValue = 2;
			break;
		case "LISTED":
			statusValue = 2;
			break;
		case "IN_CLOSING":
			statusValue = 2;
			break;
		case "SOLD":
			statusValue = 2;
			break;
		case "AUCTION_SOLD":
			statusValue = 2;
			break;
		default:
			statusValue = 0;
			break;
	}

	const [value, setValue] = React.useState(statusValue);

	const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
		setValue(newValue);
	};

	//visible hook
	const { visibleRef, isVisible } = useVisibleHook(true);

	const [contactData, setContactData] = useState<any[]>([]);

	const { loading, error, data } = useQuery(LIST_CONTACT, {
		// variables: {
		// 	limit: 20,
		// },
		onCompleted() {
			setContactData(data.list_paginated_contacts.edges);
		},
	});

	//const contactData = data ? data?.list_paginated_contacts?.edges : [];

	// const { handleSetContact } = useContacts();

	return (
		<>
			{/* {isVisible && ( */}
			<div
				className={classes.overlay}
				ref={visibleRef}
				onDoubleClick={(e: any) => e.preventDefault}
			>
				<Box className={classes.iconBox} onClick={handleClose}>
					<CancelOutlinedIcon className={classes.icon} />
				</Box>
				<Paper className={classes.root}>
					<Tabs
						value={value}
						onChange={handleChange}
						indicatorColor="primary"
						textColor="primary"
						centered
					>
						<Tab label="Buy" className={classes.text} />
						<Tab label="Escrow" className={classes.text} />
						<Tab label="Owned" className={classes.text} />
					</Tabs>
				</Paper>
				<Paper className={classes.tab}>
					<TabPanel value={value} index={0}>
						<Buy />
					</TabPanel>
					<TabPanel value={value} index={1}>
						<Escrow options={contactData} rowData={rowData} />
					</TabPanel>
					<TabPanel value={value} index={2}>
						<Owned options={contactData} rowData={rowData} />
					</TabPanel>
				</Paper>
			</div>
			{/* )} */}
		</>
	);
};
export default StatusTab;
