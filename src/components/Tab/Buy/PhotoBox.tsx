import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles((theme) => ({
	image: {
		width: "100%",
		height: "60%",
		borderRadius: "4px 4px 0px 0px",
		cursor: "pointer",
		objectFit: "cover",
	},
	box: {
		width: "100%",
		height: "80px",
		borderRadius: "0px 0px 4px 4px",
		backgroundColor: "#EDF7FF",
		boxShadow: "2px 2px 4px rgba(0, 0, 0, 0.25)",
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
	},
	button: {
		height: "fit-content",
		marginRight: "12px",
		"&:last-child": {
			marginRight: "0px",
		},
	},
}));

interface PhotoProps {
	image: string;
}
const PhotoBox = ({ image }: PhotoProps) => {
	const classes = useStyles();
	return (
		<>
			<Box borderRadius={4} width="100%">
				<img src={image} alt="" className={classes.image} />
				<Box className={classes.box}>
					<Button
						variant="contained"
						color="primary"
						className={classes.button}
					>
						photo gallery
					</Button>
					<Button variant="outlined" color="primary" className={classes.button}>
						upload new
					</Button>
				</Box>
			</Box>
		</>
	);
};
export default PhotoBox;
