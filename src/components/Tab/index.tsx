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
import React from "react";

interface toggleProps {
	toggle: boolean;
	handleClose: () => any;
}

const StatusTab = ({ toggle, handleClose }: toggleProps) => {
	const useStyles = makeStyles((theme) => ({
		root: {
			boxShadow:
				"0px 0px 4px rgba(0, 0, 0, 0.12), 0px 4px 4px rgba(0, 0, 0, 0.24)",
		},
		overlay: {
			width: "100%",
			margin: "0px auto",
			overflowX: "hidden",
			backgroundColor: "white",
			position: "absolute",
			padding: "8px",
			top: 65,
			zIndex: +5,
		},
		icon: {
			right: 0,
			position: "absolute",
			cursor: "pointer",
			top: -2,
			"&:hover": {
				color: "#979797",
			},
		},
		tab: {
			marginTop: "8px",
		},
		text: {
			textTransform: "capitalize",
		},
	}));

	const classes = useStyles();

	const [value, setValue] = React.useState(0);

	const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
		setValue(newValue);
	};
	return (
		<>
			<Box className={classes.overlay} mx="auto">
				<CancelOutlinedIcon className={classes.icon} onClick={handleClose} />
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
						<Escrow />
					</TabPanel>
					<TabPanel value={value} index={2}>
						<Owned />
					</TabPanel>
				</Paper>
			</Box>
		</>
	);
};
export default StatusTab;
