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
import { NavLink } from "react-router-dom";

interface SidebarProps {
	toggle: boolean;
	toggler: () => any;
	handleEnter: () => any;
	boxClass?: any;
}

const Sidebar = ({ toggle, toggler }: SidebarProps) => {
	const useStyles = makeStyles((theme) => ({
		box: {
			height: "100%",
			width: toggle ? "256px" : "20px",
			backgroundColor: toggle ? theme.palette.primary.main : "transparent",
			color: theme.palette.background.default,
			position: toggle ? "relative" : "absolute",
			top: 0,
			display: "flex",
			zIndex: +200,
			// width: "1px",
			overflow: "hidden",
			"&:hover": {
				width: "256px",
				backgroundColor: theme.palette.primary.main,
				animation: "slide 0.5s forwards",
				animationDelay: "2s",
			},

			"&:hover p": {
				display: "block",
				margin: "auto 0px",
				padding: "14px 0",
				fontSize: "14px",
			},

			"& p": {
				display: toggle ? "block" : "none",
			},
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
			padding: "0px 24px",
			color: "white",
			display: "flex",
			textWrap: "nowrap",
		},
		icon: {
			height: "20px",
			width: "20px",
			margin: "auto 12px auto 0px",
			// margin: "auto 0px",
		},

		toggle: {
			margin: "auto 0px",
			// display: "none",
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
			<Box
				className={classes.box}
				// display="flex"
				flexDirection="column"
				// onMouseOver={handleEnter}
			>
				<Box
					fontWeight={500}
					fontSize={24}
					className={classes.logoBox}
					justifyContent="center"
					alignItems="center"
					display="flex"
					paddingY={2}
				>
					AMP
				</Box>
				<Box className={classes.nav} my={8}>
					<NavLink to="/">
						<Box fontWeight={500} className={classes.main}>
							<HomeIcon className={classes.icon} />
							<p>Home</p>
						</Box>
					</NavLink>
					<NavLink to="/search">
						<Box fontWeight={500} className={classes.main}>
							<SearchIcon className={classes.icon} />
							<p>Search</p>
						</Box>
					</NavLink>
					<NavLink to="/upload-data">
						<Box fontWeight={500} className={classes.main}>
							<UploadIcon className={classes.icon} />
							<p>Upload Data</p>
						</Box>
					</NavLink>
					<NavLink to="/reporting">
						<Box fontWeight={500} className={classes.main}>
							<ReportIcon className={classes.icon} />
							<p>Reporting</p>
						</Box>
					</NavLink>
					<NavLink to="/contact-rolodex">
						<Box fontWeight={500} className={classes.main}>
							<ContactIcon className={classes.icon} />
							<p>Contact Rolodex</p>
						</Box>
					</NavLink>
					<NavLink to="/manage-users">
						<Box fontWeight={500} className={classes.main}>
							<UsersIcon className={classes.icon} />
							<p>Manage Users</p>
						</Box>
					</NavLink>
					<NavLink to="/formulas">
						<Box fontWeight={500} className={classes.main}>
							<FormulaIcon className={classes.formula} />
							<p>Formulas</p>
						</Box>
					</NavLink>
				</Box>
				<Box className={classes.footer} onClick={toggler}>
					<ToggleIcon className={classes.icon} />
					<p className={classes.toggle}>Toggle Sidebar</p>
				</Box>
			</Box>
		</>
	);
};
export default Sidebar;
