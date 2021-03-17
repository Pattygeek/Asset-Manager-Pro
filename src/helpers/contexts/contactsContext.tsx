// import React, {
// 	createContext,
// 	useMemo,
// 	ReactNode,
// 	useState,
// 	useContext,
// } from "react";

// interface Contact {
// 	_id: string;
// 	contact_first_name: string;
// 	contact_last_name: string;
// 	contact_company: string;
// 	contact_email: string;
// 	contact_cell_phone: string;
// 	contact_fax_number: string;
// 	contact_office_phone: string;
// 	contact_title: string;
// 	contact_type: string;
// 	contact_company_address: string;
// 	contact_company_address_zip: string;
// 	contact_company_address_city: string;
// 	contact_company_address_state: string;
// }

// const contextDefaultValue = {
// 	contacts: [],
//     handleSetContact: () => {}
// };

// export const ContactsContext = createContext(contextDefaultValue);

// interface IToggle {
// 	children?: ReactNode;
// }

// export default ({ children }: IToggle) => {
// 	const [contacts, setContacts] = useState<any[] | never[]>(
// 		contextDefaultValue.contacts
// 	);

//     const handleSetContact = (data: any) => {
//         setContacts(data)
//     }

// 	const providerValue = useMemo(() => ({ contacts, handleSetContact }), [
// 		contacts,
// 		handleSetContact,
// 	]);

// 	return (
// 		<ContactsContext.Provider value={{ contacts, handleSetContact }}>
// 			{children}
// 		</ContactsContext.Provider>
// 	);
// };

// export const useContacts = () => useContext(ContactsContext);

export const me = "Patience"