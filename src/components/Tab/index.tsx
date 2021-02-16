import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Box from "@material-ui/core/Box";
import { TabPanel } from "./TabPanel";
import React from "react";

interface toggleProps {
	toggle: boolean;
}
const StatusTab = ({ toggle }: toggleProps) => {
	const useStyles = makeStyles((theme) => ({
		root: {
			boxShadow:
				"0px 0px 4px rgba(0, 0, 0, 0.12), 0px 4px 4px rgba(0, 0, 0, 0.24)",
		},
		overlay: {
			width: "98%",
			margin: "0px auto",
			overflowX: "hidden",
			backgroundColor: "white",
			position: "absolute",
			padding: "8px",
			top: 40,
			zIndex: +5,
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
				<Paper className={classes.root}>
					<Tabs
						value={value}
						onChange={handleChange}
						indicatorColor="primary"
						textColor="primary"
						centered
					>
						<Tab label="Buy" className={classes.text} />
						<Tab label="Owned" className={classes.text} />
						<Tab label="Escrow" className={classes.text} />
					</Tabs>
				</Paper>
				<Paper className={classes.tab}>
					<TabPanel value={value} index={0}>
						Item One
					</TabPanel>
					<TabPanel value={value} index={1}>
						Item Two
					</TabPanel>
					<TabPanel value={value} index={2}>
						Item Three
					</TabPanel>
				</Paper>
			</Box>
		</>
	);
};
export default StatusTab;
