import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles(() => ({
	box: {
		cursor: "pointer",
		padding: "2px 0px 2px 8px",
		"&:hover": {
			backgroundColor: "#f7f7f7",
		},
	},
}));

interface OptionsProp {
	key: string;
	name: string;
	handleClick: () => void;
}
const DisplayOptions = ({ key, name, handleClick }: OptionsProp) => {
	const classes = useStyles();
	return (
		<Box className={classes.box} key={key} onClick={handleClick}>
			{name}
		</Box>
	);
};

interface NoOptionsProps {
	openModal?: () => void;
}

const NoOptions = ({ openModal }: NoOptionsProps) => {
	const classes = useStyles();
	return (
		<Box display="flex" py={2}>
			<Box className={classes.box} my="auto" mr={2}>
				No options
			</Box>
			<Button
				variant="contained"
				disableElevation
				color="primary"
				style={{ color: "#fff" }}
				onClick={openModal}
			>
				Add Contact
			</Button>
		</Box>
	);
};

export { DisplayOptions, NoOptions };
