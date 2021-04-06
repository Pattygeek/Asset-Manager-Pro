import React, {
	createContext,
	useContext,
	useState,
	ReactNode,
	useMemo,
} from "react";
import { PropertyRecord } from "../../components/Types";

interface IRow {
	children?: ReactNode;
}

const defaultRowData = null;

// const contextDefaultValue = {
// 	rowData: {},
// 	handleRowData: (rowDataa: PropertyRecord) => void
// };

export type RowDataContextType = {
	rowData: any;
	handleRowData?: (rowDataa: PropertyRecord) => void; 
};

export const RowDataContext = createContext<RowDataContextType>({
	rowData: {}}
);

export default ({ children }: IRow) => {
	const [rowData, setRowData] = useState({});
	// const defaultContext = { rowData, setRowData };
	// const providerValue = useMemo(() => ({ rowData, setRowData }), [
	// 	rowData,
	// 	setRowData,
	// ]);

	const handleRowData = (rowDataa: PropertyRecord) => {
		setRowData(rowDataa);
	};
	return (
		<RowDataContext.Provider value={{ rowData, handleRowData }}>
			{children}
		</RowDataContext.Provider>
	);
};

export const useRowData = () => useContext(RowDataContext);
