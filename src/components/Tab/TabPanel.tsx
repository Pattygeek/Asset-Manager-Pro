import Box from "@material-ui/core/Box";

interface TabPanelProps {
	children?: React.ReactNode;
	index: any;
	value: any;
}

export const TabPanel = (props: TabPanelProps) => {
	const { children, value, index, ...other } = props;
	return (
		<>
			{" "}
			<div
				role="tabpanel"
				hidden={value !== index}
				id={`scrollable-prevent-tabpanel-${index}`}
				aria-labelledby={`scrollable-prevent-tab-${index}`}
				{...other}
			>
				{value === index && <Box p={3}>{children}</Box>}
			</div>
		</>
	);
};
