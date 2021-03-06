import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import FormControl from "@material-ui/core/FormControl";
import NativeSelect from "@material-ui/core/NativeSelect";
import Avatar from "@material-ui/core/Avatar";

//icons
import { ReactComponent as FilterIcon } from "../../assets/icons/filter.svg";
import { ReactComponent as InfoIcon } from "../../assets/icons/info.svg";
import { ReactComponent as SearchedIcon } from "../../assets/icons/searched.svg";
import { ReactComponent as NotifIcon } from "../../assets/icons/notif.svg";
import { ReactComponent as ActionIcon } from "../../assets/icons/action.svg";
import { ReactComponent as FormulaIcon } from "../../assets/icons/formula.svg";
import { ReactComponent as ResetIcon } from "../../assets/icons/reset.svg";
import pix from "../../assets/images/pix.png";

const useStyles = makeStyles((theme) => ({
	nav: {
		height: "50px",
		borderBottom: "1px solid #EBEFF2",
		display: "flex",
		width: "100%",
		padding: "0px 24px",
		position: "sticky",
		backgroundColor: "white",
		top: 0,
		zIndex: +200,
	},
	iconBox: {
		display: "flex",
		alignItems: "center",
	},
	info: {
		display: "flex",
		alignItems: "center",
		marginLeft: "auto",
	},
	icon: {
		width: "18px",
		height: "18px",
		// marginRight: "24px",
	},
	iconn: {
		width: "20px",
		height: "20px",
		marginRight: "16px",
	},
	formula: {
		width: "32px",
		height: "32px",
		fill: "#109CF1",
		marginRight: "24px",
	},
	formControl: {
		margin: theme.spacing(1),
		minWidth: 114,
	},
	selectEmpty: {
		fontSize: "13px",
	},
	img: {
		width: "24px",
		height: "24px",
	},
	home: {
		margin: "auto",
	},
	logo: {
		fontWeight: "bold",
		color: "#109CF1",
		margin: "auto 48px auto 0px",
		fontSize: "28px",
	},
}));

interface NavProps {
	handleEnter: () => any;
	handleLeave: () => any;
	logo?: any;
	toggle: boolean;
	pageTitle: string;
}
const Navbar = ({
	handleEnter,
	handleLeave,
	logo,
	toggle,
	pageTitle,
}: NavProps) => {
	const classes = useStyles();
	return (
		<>
			<Box className={classes.nav}>
				{!toggle ? <Box className="logo">AMP</Box> : ""}

				<Box className={classes.iconBox}>
					{/* <FormulaIcon className={classes.formula} />
					<SearchedIcon className={classes.icon} />
					<FilterIcon className={classes.icon} /> */}
					<Box
						display="flex"
						flexDirection="column"
						alignItems="center"
						marginRight={4}
					>
						<ActionIcon className={classes.icon} />
						<Box fontSize={11} color="#6D6D6D" textAlign="left">
							Export
						</Box>
					</Box>
					<Box
						display="flex"
						flexDirection="column"
						alignItems="center"
						marginRight={8}
						flexWrap="nowrap"
						width="150px"
					>
						<ResetIcon className={classes.icon} />
						<Box fontSize={11} color="#6D6D6D" textAlign="center" width="100%">
							Reset View
						</Box>
					</Box>

					{/* <FormControl className={classes.formControl}>
						<NativeSelect
							className={classes.selectEmpty}
							//value={state.age}
							name="age"
							//onChange={handleChange}
							inputProps={{ "aria-label": "age" }}
						>
							<option value="">Mass Action</option>
							<option value={10}>Mass Email</option>
							<option value={20}>Action 1</option>
							<option value={30}>Action 2</option>
						</NativeSelect>
					</FormControl> */}
				</Box>
				<Box className={classes.home} fontWeight={500} fontSize={20}>
					{pageTitle}
				</Box>
				<Box className={classes.info}>
					<NotifIcon className={classes.iconn} />
					<InfoIcon className={classes.iconn} />
					<img alt="user" src={pix} className={classes.img} />
				</Box>
			</Box>
		</>
	);
};
export default Navbar;
