import makeStyles from "@material-ui/core/styles/makeStyles";
import Box from "@material-ui/core/Box";
import { ReactComponent as ToggleIcon } from "../../assets/icons/toggle.svg";
import { ReactComponent as HomeIcon } from "../../assets/icons/home.svg";
import { ReactComponent as FormulaIcon } from "../../assets/icons/formula.svg";
import { ReactComponent as ContactIcon } from "../../assets/icons/contact.svg";
import { ReactComponent as ReportIcon } from "../../assets/icons/report.svg";
import { ReactComponent as SearchIcon } from "../../assets/icons/search.svg";
import { ReactComponent as UploadIcon } from "../../assets/icons/upload.svg";
import { ReactComponent as UsersIcon } from "../../assets/icons/users.svg";
import { useState } from "react";

interface SidebarProps{
	toggle: boolean;
	toggler: () => any;
	handleEnter: () => any;
}

const Sidebar = ({toggle, toggler, handleEnter}: SidebarProps) => {
	

	const useStyles = makeStyles((theme) => ({
		box: {
			height: "100%",
			width: toggle ? "80px" : "256px",
			backgroundColor: theme.palette.primary.main,
			color: theme.palette.background.default,
			position: "absolute",
			top: 0,
			zIndex: +20
		},
		logoBox: {
			height: "50px",
			borderBottom: "1px solid white",
		},
		nav: {
			flex: "1 1 0",
		},
		footer: {
			height: "200px",
			display: "flex",
			padding: "0px 24px",
			cursor: "pointer",
		},
		main: {
			padding: "12px 24px",
			color: "white",
			display: "flex",
			textWrap: "nowrap",
		},
		icon: {
			height: "20px",
			width: "20px",
			margin: "auto 12px auto 0px",
		},
		text: {
			margin: "auto 0px",
			paddingTop: "4px",
			fontSize: "14px",
		},
		toggle: {
			margin: "auto 0px",
		},
		formula: {
			width: "20px",
			height: "20px",
			fill: "#fff",
			margin: "auto 12px auto 0px",
		},
	}));

	const classes = useStyles();

	return (
		<>
			<Box className={classes.box} display="flex" flexDirection="column" onMouseOver={handleEnter}>
				<Box
					fontWeight={500}
					fontSize={24}
					className={classes.logoBox}
					justifyContent="center"
					alignItems="center"
					display="flex"
					paddingY={2}
				>
					{toggle ? "A" : "AMP"}
				</Box>
				<Box className={classes.nav} my={8}>
					<Box fontWeight={500} className={classes.main}>
						<HomeIcon className={classes.icon} />
						{toggle ? "" : <p className={classes.text}>Home</p>}
					</Box>
					<Box fontWeight={500} className={classes.main}>
						<SearchIcon className={classes.icon} />
						{toggle ? "" : <p className={classes.text}>Search</p>}
					</Box>
					<Box fontWeight={500} className={classes.main}>
						<UploadIcon className={classes.icon} />
						{toggle ? "" : <p className={classes.text}>Upload Data</p>}
					</Box>
					<Box fontWeight={500} className={classes.main}>
						<ReportIcon className={classes.icon} />
						{toggle ? "" : <p className={classes.text}>Reporting</p>}
					</Box>
					<Box fontWeight={500} className={classes.main}>
						<ContactIcon className={classes.icon} />
						{toggle ? "" : <p className={classes.text}>Contact Rolodex</p>}
					</Box>
					<Box fontWeight={500} className={classes.main}>
						<UsersIcon className={classes.icon} />
						{toggle ? "" : <p className={classes.text}>Manage Users</p>}
					</Box>
					<Box fontWeight={500} className={classes.main}>
						<FormulaIcon className={classes.formula} />
						{toggle ? "" : <p className={classes.text}>Formulas</p>}
					</Box>
				</Box>
				<Box className={classes.footer} onClick={toggler}>
					<ToggleIcon className={classes.icon} />

					{toggle ? "" : <p className={classes.toggle}>Toggle Sidebar</p>}
				</Box>
			</Box>
		</>
	);
};
export default Sidebar;
