import Dialog from "@material-ui/core/Dialog";
import Box from "@material-ui/core/Box";
import makeStyles from "@material-ui/core/styles/makeStyles";
import ArrowForwardIosOutlinedIcon from "@material-ui/icons/ArrowForwardIosOutlined";
import ArrowBackIosOutlinedIcon from "@material-ui/icons/ArrowBackIosOutlined";
import pix1 from "../../../assets/images/pix1.png";
import React from "react";

interface ModalProps {
	open: boolean;
	handleClose: () => any;
	idx: Function;
	index: number;
	images: any;
	handleKeyPress: any;
}

const useStyles = makeStyles(() => ({
	footer: {
		textAlign: "center",
		fontWeight: 600,
		position: "absolute",
		color: "white",
		width: "100%",
		bottom: 0,
	},
	image: {
		position: "relative",
	},
	box: {
		display: "flex",
		justifyContent: "space-between",
		position: "absolute",
		width: "100%",
		zIndex: +5,
		top: "45%",
		padding: "0px 12px",
	},
	icon: {
		cursor: "pointer",
		color: "white",
		fontSize: "48px",
		"&:hover": {
			color: "#ececec",
		},
	},
}));

const ImageSlider = ({
	open,
	handleClose,
	handleKeyPress,
	images,
	index,
	idx,
}: ModalProps) => {
	const classes = useStyles();

	//navigate image slider with arrow keys
	React.useEffect(() => {
		document.addEventListener("keydown", handleKeyPress, false);
		return () => {
			document.removeEventListener("keydown", handleKeyPress, false);
		};
	}, [handleKeyPress]);

	return (
		<>
			<Dialog open={open} onClose={handleClose} maxWidth="md">
				<img src={images[index]} alt="" className={classes.image} />
				<Box className={classes.box}>
					{index !== 0 ? (
						<ArrowBackIosOutlinedIcon
							className={classes.icon}
							onClick={() => idx("-")}
						/>
					) : (
						""
					)}

					{index === images.length - 1 ? (
						""
					) : (
						<ArrowForwardIosOutlinedIcon
							className={classes.icon}
							style={{ right: 5, position: "absolute" }}
							onClick={() => idx("+")}
						/>
					)}
				</Box>

				<p className={classes.footer}>
					{index + 1} of {images.length}
				</p>
			</Dialog>
		</>
	);
};
export default ImageSlider;
