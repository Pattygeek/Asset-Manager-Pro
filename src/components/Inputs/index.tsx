import TextField from "@material-ui/core/TextField";
import withStyles from "@material-ui/core/styles/withStyles";
import { red } from "@material-ui/core/colors";

const CssTextField = withStyles({
	root: {
		"& label.Mui-focused": {
			color: "#109CF1",
		},
		"& .MuiInput-underline:after": {
			borderBottomColor: "#109CF1",
		},
		"& .MuiOutlinedInput-root": {
			"& fieldset": {
				borderColor: "#109CF1",
				// backgroundColor: "white",
			},
			"&:hover fieldset": {
				borderColor: "#109CF1",
			},
			"&.Mui-focused fieldset": {
				borderColor: "#109CF1",
			},
		},
	},
})(TextField);

export { CssTextField };

const DateTextField = withStyles({
	root: {
		position: "relative",
		backgroundColor: "rgba(0, 0, 0, 0.09)",
		"&:hover": {
			backgroundColor: "rgba(0, 0, 0, 0.13)",
		},
		"&$focused": {
			backgroundColor: "rgba(0, 0, 0, 0.09)",
		},
		"&$disabled": {
			backgroundColor: "rgba(0, 0, 0, 0.12)",
		},
		underline: {
			"&:after": {
				borderBottom: `2px solid #2196f3`,
				left: 0,
				bottom: 0,
				// Doing the other way around crash on IE 11 "''" https://github.com/cssinjs/jss/issues/242
				content: '""',
				position: "absolute",
				right: 0,
				transform: "scaleX(0)",
				pointerEvents: "none", // Transparent to the hover style.
			},
			"&$focused:after": {
				transform: "scaleX(1)",
			},
			"&$error:after": {
				borderBottomColor: red.A400,
				transform: "scaleX(1)", // error is always underlined in red
			},
		},
	},
})(TextField);
export { DateTextField };
