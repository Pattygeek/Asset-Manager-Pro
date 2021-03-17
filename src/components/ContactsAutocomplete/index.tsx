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

	// console.log(options);
	// let optionList: any;

	// let optionData;

	// console.log(input);

	// if (input) {
	// 	optionList = options.filter((optionName: any) =>
	// 		optionName.contact_first_name.toLowerCase().includes(input)
	// 	);
	// }

	// if (optionList?.length > 0 && input != "") {
	// 	optionData = optionList.map((option: any) => (
	// 		<Box
	// 			className={classes.box}
	// 			key={option._id}
	// 			onClick={() => (input = option.contact_first_name)}
	// 		>
	// 			{option.contact_first_name}
	// 		</Box>
	// 	));
	// } else if (optionList?.length == 0 && input != "") {
	// 	optionData = <Box className={classes.box}>No options</Box>;
	// }

	// console.log(optionList);
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
