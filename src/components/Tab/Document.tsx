import Box from "@material-ui/core/Box";
import makeStyles from "@material-ui/core/styles/makeStyles";
import { ReactComponent as ZipIcon } from "../../assets/icons/zip.svg";

const useStyles = makeStyles((theme) => ({
	price: {
		color: "#109CF1",
		cursor: "pointer",
		borderColor: "#c4c4c4",
		marginBottom: "8px",
	},
	icon: {
		width: "16px",
		height: "16px",
	},
	heading: {
		color: "#979797",
		fontWeight: 500,
	},
}));
const Document = () => {
	const classes = useStyles();
	return (
		<>
			<Box
				width="33%"
				border={1}
				borderColor="#ececec"
				borderRadius={4}
				paddingBottom={2}
				paddingX={2}
				height="fit-content"
				boxShadow="2px 2px 4px rgba(0, 0, 0, 0.25)"
			>
				<p className={classes.heading}>Documents</p>
				<Box
					border={1}
					borderRadius={4}
					width="80%"
					paddingY={1}
					className={classes.price}
					paddingX={2}
					display="flex"
					justifyContent="space-between"
				>
					Contractor Bid.zip
					<ZipIcon className={classes.icon} />
				</Box>
				<Box
					border={1}
					borderRadius={4}
					width="80%"
					paddingY={1}
					className={classes.price}
					paddingX={2}
					display="flex"
					justifyContent="space-between"
				>
					Contractor Bid.zip
					<ZipIcon className={classes.icon} />
				</Box>
				<Box
					border={1}
					borderRadius={4}
					width="80%"
					paddingY={1}
					className={classes.price}
					paddingX={2}
					display="flex"
					justifyContent="space-between"
				>
					Contractor Bid.zip
					<ZipIcon className={classes.icon} />
				</Box>
				<Box
					border={1}
					borderRadius={4}
					width="80%"
					paddingY={1}
					className={classes.price}
					paddingX={2}
					display="flex"
					justifyContent="space-between"
				>
					Contractor Bid.zip
					<ZipIcon className={classes.icon} />
				</Box>
				<Box
					border={1}
					borderRadius={4}
					width="80%"
					paddingY={1}
					className={classes.price}
					paddingX={2}
					display="flex"
					justifyContent="space-between"
				>
					Contractor Bid.zip
					<ZipIcon className={classes.icon} />
				</Box>
			</Box>
		</>
	);
};
export default Document;
