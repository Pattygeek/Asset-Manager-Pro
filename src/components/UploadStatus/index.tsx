import Box from "@material-ui/core/Box";
import makeStyles from "@material-ui/core/styles/makeStyles";
import { ReactComponentElement, ReactNode } from "react";
import { ReactComponent as UploadSuccess } from "../../assets/icons/uploadSuccess.svg";
import { useToggle } from "../../helpers/contexts/toggleContext";
import CloseOutlinedIcon from "@material-ui/icons/CloseOutlined";

interface StatusProps {
	borderColor: string;
	icon: ReactNode;
	children?: ReactNode;
	handleClick: () => void;
	open: boolean;
}
const UploadStatus = ({ borderColor, icon, children, open, handleClick }: StatusProps) => {
	const useStyles = makeStyles(() => ({
		icon: {
			height: "50px",
			width: "50px",
			marginRight: "20px",
		},
		close: {
			marginLeft: "auto",
			justifyContent: "end",
			color: borderColor,
			cursor: "pointer",
		},
	}));

	const classes = useStyles();

	const { toggle } = useToggle();
	return (
		<>
			{open ? (
				<Box
					bgcolor="rgba(255, 255, 255, 0.5)"
					width={toggle ? "85%" : "50%"}
					borderColor={borderColor}
					border={1}
					marginX="auto"
					marginBottom={5}
					borderRadius="4px"
					padding={4}
					display="flex"
				>
					{icon}
					<Box display="flex" width="90%">
						{/* <Box color="#00B07B" fontWeight={500} fontSize={16}>
						AMP has fnished processing - the file name.xlsx
					</Box> */}
						{children}
						<CloseOutlinedIcon
							className={classes.close}
							onClick={handleClick}
						/>
					</Box>
				</Box>
			) : (
				""
			)}
		</>
	);
};
export default UploadStatus;
