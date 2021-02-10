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

const useStyles = makeStyles((theme) => ({
	box: {
		height: "100%",
		width: "256px",
		backgroundColor: theme.palette.primary.main,
		color: theme.palette.background.default,
	},
	logoBox: {
		height: "60px",
		borderBottom: "1px solid white",
	},
	nav: {
		flex: "1 1 0",
	},
	footer: {
		height: "200px",
		display: "flex",
		padding: "0px 24px",
	},
	main: {
		padding: "12px 24px",
		color: "white",
		display: "flex",
	},
	icon: {
		height: "20px",
		width: "20px",
		margin: "auto 12px auto 0px",
	},
	text: {
		margin: "auto 0px",
		paddingTop: "4px",
	},
	toggle: {
		margin: "auto 0px",
	},
}));

const Sidebar = () => {
	const classes = useStyles();

	return (
		<>
			<Box className={classes.box} display="flex" flexDirection="column">
				<Box
					fontWeight={500}
					fontSize={24}
					className={classes.logoBox}
					justifyContent="center"
					alignItems="center"
					display="flex"
				>
					AMP
				</Box>
				<Box className={classes.nav} my={8}>
					<Box fontWeight={500} className={classes.main}>
						<HomeIcon className={classes.icon} />
						<p className={classes.text}>Home</p>
					</Box>
					<Box fontWeight={500} className={classes.main}>
						<SearchIcon className={classes.icon} />
						Search
					</Box>
					<Box fontWeight={500} className={classes.main}>
						<UploadIcon className={classes.icon} />
						UploadData
					</Box>
					<Box fontWeight={500} className={classes.main}>
						<ReportIcon className={classes.icon} />
						Reporting
					</Box>
					<Box fontWeight={500} className={classes.main}>
						<ContactIcon className={classes.icon} />
						Contact Rolodex
					</Box>
					<Box fontWeight={500} className={classes.main}>
						<UsersIcon className={classes.icon} />
						Manage Users
					</Box>
					<Box fontWeight={500} className={classes.main}>
						<FormulaIcon className={classes.icon} />
						Formulas
					</Box>
				</Box>
				<Box className={classes.footer}>
					<ToggleIcon className={classes.icon} />
					<p className={classes.toggle}>Toggle Sidebar</p>
				</Box>
			</Box>
		</>
	);
};
export default Sidebar;
