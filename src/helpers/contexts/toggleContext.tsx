import React, { createContext, ReactNode, useContext, useMemo, useState } from "react";

const contextDefaultValue = {
	toggle: false,
	handleToggle: () => {},
};

export const ToggleContext = createContext(contextDefaultValue);

interface IToggle {
	children?: ReactNode;
}

export const ToggleProvider: React.FC = ({ children }: IToggle) => {
	const [toggle, setToggle] = useState<boolean>(contextDefaultValue.toggle);

	const handleToggle = () => setToggle(!toggle);

	return (
		<ToggleContext.Provider value={{ toggle, handleToggle }}>
			{children}
		</ToggleContext.Provider>
	);
};

export const useToggle = () => useContext(ToggleContext)
