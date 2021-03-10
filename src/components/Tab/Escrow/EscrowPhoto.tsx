import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import makeStyles from "@material-ui/core/styles/makeStyles";
import { useState } from "react";
import ImageSlider from "../ImageSlider";

const useStyles = makeStyles((theme) => ({
	image: {
		width: "100%",
		height: "180px",
		borderRadius: "4px 4px 0px 0px",
		cursor: "pointer",
		objectFit: "cover",
	},
	img: {
		height: "32px",
		cursor: "pointer",
	},
	imgBox: {
		display: "grid",
		gridTemplateColumns: "repeat(5, 1fr)",
		width: "100%",
		// gap: "0px",
	},
	box: {
		width: "100%",
		height: "137px",
		borderRadius: "0px 0px 4px 4px",
		backgroundColor: "#EDF7FF",
		boxShadow: "2px 2px 4px rgba(0, 0, 0, 0.25)",
		display: "flex",
		flexDirection: "column",
		justifyContent: "space-between",
		// alignItems: "center",
		padding: "16px 8px",
	},
	button: {
		height: "fit-content",
		marginRight: "8px",
		padding: "4px 16px",
		color: "white",
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
					src={images[index]}
					alt=""
					className={classes.image}
					onClick={handleReveal}
				/>
				<Box className={classes.box}>
					<Box display="flex" className={classes.imgBox}>
						<img
							src={images[0]}
							alt=""
							className={classes.img}
							onClick={() => setIndex(0)}
						/>
						<img
							src={images[1]}
							alt=""
							className={classes.img}
							onClick={() => setIndex(1)}
						/>
						<img
							src={images[2]}
							alt=""
							className={classes.img}
							onClick={() => setIndex(2)}
						/>
						<img
							src={images[3]}
							alt=""
							className={classes.img}
							onClick={() => setIndex(3)}
						/>
						<img
							src={images[4]}
							alt=""
							className={classes.img}
							onClick={() => setIndex(4)}
						/>
					</Box>
					<Box display="flex">
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
