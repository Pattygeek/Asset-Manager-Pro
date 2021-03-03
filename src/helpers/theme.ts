import { createMuiTheme } from "@material-ui/core/styles";
import { red } from "@material-ui/core/colors";

// Create a theme instance.
const theme = createMuiTheme({
	palette: {
		primary: {
			main: "#109CF1",
		},
		secondary: {
			main: "#EDF7FF",
		},
		error: {
			main: red.A400,
		},
		background: {
			default: "#fff",
		},
		warning: {
			main: "#ff5c39",
		},
	},
	breakpoints: {
		values: {
			xs: 0,
			sm: 490,
			md: 760,
			lg: 1200,
			xl: 1920,
		},
	},
	// typography: {
	// 	fontWeight: {
	// 		fontWeightBold: "700",
	// 	},
	// 	fontFamily: "Nunito",
	// },
});

export default theme;
