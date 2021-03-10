import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import makeStyles from "@material-ui/core/styles/makeStyles";
import { useState } from "react";
import ImageSlider from "../ImageSlider";
import { images } from "../../../utils/dummyData";

const useStyles = makeStyles((theme) => ({
	image: {
		width: "100%",
		height: "180px",
		borderRadius: "4px 4px 0px 0px",
		cursor: "pointer",
		objectFit: "cover",
	},
	box: {
		width: "100%",
		height: "70px",
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
		color: "#FFF",
		"&:last-child": {
			marginRight: "0px",
		},
		padding: "4px 24px",
	},
	buttonn: {
		height: "fit-content",
		backgroundColor: "white",
		boxShadow: "0px 4px 10px rgba(16, 156, 241, 0.24)",
	},
}));

interface PhotoProps {
	images: string[];
}
const PhotoBox = ({ images }: PhotoProps) => {
	const classes = useStyles();

	//================imageSlider modal handler==============
	const [reveal, setReveal] = useState(false);

	const handleReveal = () => {
		setReveal(true);
	};

	const handleClose = () => {
		setReveal(false);
	};

	const [index, setIndex] = useState<any>(0);

	const handleIndexChange = (operator: string) => {
		switch (operator) {
			case "+":
				setIndex((state: number) => state + 1);
				break;
			case "-":
				setIndex((state: number) => state - 1);
				break;
			default:
				break;
		}
	};

	//======arrow keys navigation handler=======
	const handleKeyPress = (e: any) => {
		switch (e.keyCode) {
			case 37:
				if (index > 0) {
					setIndex((state: any) => state - 1);
				} else {
					setIndex(images.length - 1);
				}
				break;
			case 39:
				if (index < images.length - 1) {
					setIndex((state: any) => state + 1);
				} else {
					setIndex(0);
				}
				break;
			default:
				break;
		}
	};
	//========end of arrow nav handler=============
	return (
		<>
			<Box borderRadius={4} width="100%">
				<img
					src={images[0]}
					alt=""
					className={classes.image}
					onClick={handleReveal}
				/>
				<Box className={classes.box}>
					<Button
						variant="contained"
						color="primary"
						className={classes.button}
						onClick={handleReveal}
					>
						photo gallery
					</Button>
					<Button
						variant="outlined"
						color="primary"
						className={classes.buttonn}
					>
						upload new
					</Button>
				</Box>
				<ImageSlider
					open={reveal}
					handleClose={handleClose}
					handleKeyPress={handleKeyPress}
					images={images}
					idx={handleIndexChange}
					index={index}
				/>
			</Box>
		</>
	);
};
export default PhotoBox;
