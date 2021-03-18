import Box from "@material-ui/core/Box";
import makeStyles from "@material-ui/core/styles/makeStyles";
import React from "react";

const useStyles = makeStyles(() => ({
	mainBox: {
		boxShadow: "0 0.5rem 1rem rgba(0,0,0,.15)",
		position: "absolute",
		zIndex: +500,
		backgroundColor: "#fff",
	},
}));

interface AutoCompleteProps {
	options?: Array<object>;
	input?: string;
	optionList: Array<object>;
	optionData: React.ReactNode;
}

const AutoComplete = ({ optionData, optionList, input }: AutoCompleteProps) => {
	const classes = useStyles();
	
	return (
		<>
			{optionList && input != "" && (
				<Box
					border={1}
					width="30%"
					borderRadius="4px"
					borderColor="#f7f7f7"
					className={classes.mainBox}
				>
					{optionData}
				</Box>
			)}
		</>
	);
};
export default AutoComplete;
