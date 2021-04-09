import React, { ReactNode, FC, useState, useEffect } from "react";
import { useRowData } from "../../../helpers/contexts/rowDataContext";
import { OwnedRecord } from "../../Types";
import { useQuery, useMutation } from "@apollo/client";
import { LIST_CONTACT } from "../../../helpers/graphql/queries";
import {
	OWNED_UPDATE_CFK_AMOUNT,
	OWNED_UPDATE_SOLD_DATE,
	UPDATE_PROPERTY_NOTE,
	BUY_UPDATE_PROPERTY_STATUS,
	BUY_UPDATE_REHAB_COST,
	BUY_UPDATE_HOLD_TIME,
} from "../../../helpers/graphql/mutations";
import {
	DisplayOptions,
	NoOptions,
} from "../../ContactsAutocomplete/AutocompleteComponent";

type ChildrenProps = {
	data: OwnedRecord;
	handleChange: (event: React.ChangeEvent<any>) => void;
	evictionDate: any;
	soldDate: any;
	handleEvictionDateChange: (date: Date | null) => void;
	handleSoldDateChange: (date: Date | null) => void;
	openDiv: boolean;
	openListDiv: boolean;
	openGcDiv: boolean;
	handleAttorneyChange: (e: React.ChangeEvent<any>) => void;
	handleListAgentChange: (e: React.ChangeEvent<any>) => void;
	handleGcChange: (e: React.ChangeEvent<any>) => void;
	optionData: any;
	optionList: any[];
	options: any[];
	errorText: string;
	soldDateUpdate: string;
	soldDateError: any;
	soldDateData: any;
	cfkAmountUpdate: string;
	cfkAmountError: any;
	cfkAmountData: any;
	onCfkAmountBlur: () => void;
	noteUpdate: string;
	noteError: any;
	noteData: any;
	onNoteBlur: () => void;
	statusError: any;
	statusData: any;
	statusUpdate: string;
	onStatusChange: (event: React.ChangeEvent<any>) => void;
	rehabUpdate: string;
	rehabError: any;
	rehabData: any;
	onRehabBlur: () => void;
	holdTimeUpdate: string;
	holdTimeError: any;
	holdTimeData: any;
	onHoldTimeBlur: () => void;
};

type Props = {
	children(_: ChildrenProps): ReactNode;
};

const OwnedProvider: FC<Props> = ({ children }) => {
	const { rowData, handleRowData } = useRowData();

	const [errorText, setErrorText] = useState("Error saving changes");
	const [soldDateUpdate, setSoldDateUpdate] = useState("");
	const [cfkAmountUpdate, setCfkAmountUpdate] = useState("");
	const [noteUpdate, setNoteUpdate] = useState("");
	const [statusUpdate, setStatusUpdate] = useState("");
	const [rehabUpdate, setRehabUpdate] = useState("");
	const [holdTimeUpdate, setHoldTimeUpdate] = useState("");

	const [data, setData] = useState({
		status: rowData.property_status,
		tpp: rowData.total_buy_price,
		list_price: "",
		profit: rowData.profit,
		roi: rowData.return_on_investment,
		hold_time: "",
		note: "",
		occupancy: rowData.occupancy_status,
		eviction: "",
		cfk: rowData.cash_for_keys,
		cfk_amount: rowData.cash_for_key_amount,
		occupant: "",
		occupant_number: "",
		occupant_email: "",
		eviction_date: rowData.eviction_date,
		attorney_name: "",
		attorney_number: "",
		attorney_email: "",
		eviction_cost: "",
		water_co: "",
		water_co_number: "",
		electric_co: rowData.electric_co,
		electric_co_number: rowData.electric_co_number,
		gas_co: rowData.gas_co,
		gas_co_number: rowData.gas_co_number,
		taxes: "",
		taxes_number: "",
		contractor_bid_received: "",
		rehab: rowData.rehabilitation_cost,
		gc: "",
		gc_number: "",
		gc_email: "",
		list_agent: "",
		list_agent_email: "",
		list_agent_number: "",
		sold_date: rowData.date_sold,
		sold_price: "",
	});

	//onchange handler for input fields
	const handleChange = (event: React.ChangeEvent<any>) => {
		const { name, value } = event.target;
		setData({
			...data,
			[name]: value,
		});
	};

	//state and change handler for date
	const [evictionDate, setEvictionDate] = useState<any>(new Date());

	const handleEvictionDateChange = (date: Date | null) => {
		setEvictionDate(date);
	};

	const [soldDate, setSoldDate] = useState<any>(new Date());

	const handleSoldDateChange = (date: Date | null) => {
		setSoldDate(date);

		owned_update_sold_date({
			variables: {
				property_id: rowData._id,
				input_value: date,
			},
		});
	};
	//===============end of date handler===================

	//onblur function for cfk amount
	const onCfkAmountBlur = () => {
		owned_update_cfk_amount({
			variables: {
				property_id: rowData._id,
				input_value: Number(data.cfk_amount),
			},
		});
	};
	//=========end of square feet=========================

	//note function for onBlur
	const onNoteBlur = () => {
		buy_update_property_note({
			variables: {
				property_id: rowData._id,
				input_value: data.note,
			},
		});
	};
	//=========end of note=============================

	//onchange function for status
	const onStatusChange = (event: React.ChangeEvent<any>) => {
		const { value } = event.target;
		setData({
			...data,
			status: value,
		});

		buy_update_property_status({
			variables: {
				property_id: rowData._id,
				status_value: value,
			},
		});
	};
	//=========end of status onchange=========================

	//rehab function for onBlur
	const onRehabBlur = () => {
		buy_update_rehab_cost({
			variables: {
				property_id: rowData._id,
				input_value: Number(data.rehab),
			},
		});
	};
	//=========end of rehab==================================

	//holdtime function for onBlur
	const onHoldTimeBlur = () => {
		buy_update_hold_time({
			variables: {
				property_id: rowData._id,
				input_value: Number(data.hold_time),
			},
		});
	};
	//=========end of holdtime=========================

	//mutation to update note
	const [
		buy_update_property_note,
		{ loading: noteLoading, error: noteError, data: noteData },
	] = useMutation(UPDATE_PROPERTY_NOTE, {
		onCompleted() {
			// refetch();
			setNoteUpdate("Changes saved");
			setData({ ...data, note: "" });
			setTimeout(() => {
				setNoteUpdate("");
			}, 3000);
		},
		onError(err) {
			setTimeout(() => {
				setErrorText("");
			}, 8000);
			console.log(err);
			return null;
		},
	});
	//==========end of update note mutation======================

	//mutation to update property status
	const [
		buy_update_property_status,
		{ loading: statusLoading, error: statusError, data: statusData },
	] = useMutation(BUY_UPDATE_PROPERTY_STATUS, {
		onCompleted() {
			//refetch();
			setStatusUpdate("Changes saved");
			setTimeout(() => {
				setStatusUpdate("");
			}, 3000);
		},
		onError(err) {
			setTimeout(() => {
				setErrorText("");
			}, 8000);
			console.log(err);
			return null;
		},
	});
	//==========end of update status mutation======================

	//mutation to update sold date
	const [
		owned_update_sold_date,
		{ loading: soldDateLoading, error: soldDateError, data: soldDateData },
	] = useMutation(OWNED_UPDATE_SOLD_DATE, {
		onCompleted() {
			//refetch();
			setSoldDateUpdate("Changes saved");
			setTimeout(() => {
				setSoldDateUpdate("");
			}, 3000);
		},
		onError(err) {
			setTimeout(() => {
				setErrorText("");
			}, 8000);
			console.log(err);
			return null;
		},
	});
	//==========end of update sold date======================

	//mutation to update cfk amount
	const [
		owned_update_cfk_amount,
		{ loading: cfkAmountLoading, error: cfkAmountError, data: cfkAmountData },
	] = useMutation(OWNED_UPDATE_CFK_AMOUNT, {
		onCompleted() {
			//refetch();
			setCfkAmountUpdate("Changes saved");
			setTimeout(() => {
				setCfkAmountUpdate("");
			}, 3000);
		},
		onError(err) {
			setTimeout(() => {
				setErrorText("");
			}, 8000);
			console.log(err);
			return null;
		},
	});
	//==========end of update cfk amount======================

	//mutation to update rehab cost====================================
	const [
		buy_update_rehab_cost,
		{ loading: rehabLoading, error: rehabError, data: rehabData },
	] = useMutation(BUY_UPDATE_REHAB_COST, {
		onCompleted() {
			//refetch();
			setRehabUpdate("Changes saved");
			setTimeout(() => {
				setRehabUpdate("");
			}, 3000);
		},
		onError(err) {
			setTimeout(() => {
				setErrorText("");
			}, 8000);
			console.log(err);
			return null;
		},
	});
	//============end of mutation to update rehab==================

	//mutation to update hold time====================================
	const [
		buy_update_hold_time,
		{ loading: holdTimeLoading, error: holdTimeError, data: holdTimeData },
	] = useMutation(BUY_UPDATE_HOLD_TIME, {
		onCompleted() {
			//refetch();
			setHoldTimeUpdate("Changes saved");
			setTimeout(() => {
				setHoldTimeUpdate("");
			}, 3000);
		},
		onError(err) {
			setTimeout(() => {
				setErrorText("");
			}, 8000);
			console.log(err);
			return null;
		},
	});
	//============end of mutation to update hold time==================

	//filtering code snippet
	const [optionList, setOptionList] = useState<any[]>([]);
	let optionData;
	let filteredOption;

	const [options, setOptions] = useState<any[]>([]);

	//query to get contact data
	const { loading, error, data: contactData } = useQuery(LIST_CONTACT, {
		onCompleted() {
			setOptions(contactData.list_paginated_contacts.edges);
		},
	});

	//state handler for attorney autocomplete
	const [openDiv, setOpenDiv] = useState(false);

	//state handler for list agent autocomplete
	const [openListDiv, setOpenListDiv] = useState(false);

	//state handler for gc autocomplete
	const [openGcDiv, setOpenGcDiv] = useState(false);

	//onchange handler for auction agent
	const handleAttorneyChange = (event: React.ChangeEvent<any>) => {
		const { value } = event.target;
		setOpenDiv(true);
		setData({
			...data,
			attorney_name: value,
		});

		filteredOption = options.filter((optionName: any) =>
			optionName.contact_first_name.toLowerCase().includes(event.target.value)
		);
		setOptionList(filteredOption);
	};

	//autocomplete function for attorney agent
	if (optionList?.length > 0 && data.attorney_name != "") {
		optionData = optionList?.map((option: any) => (
			<DisplayOptions
				key={option._id}
				name={option.contact_first_name}
				handleClick={() => {
					setData({
						...data,
						attorney_name: option.contact_first_name,
						attorney_email: option.contact_email,
						attorney_number: option.contact_cell_phone,
					});
					setOpenDiv(false);
				}}
			/>
		));
	} else if (optionList?.length == 0 && data.attorney_name != "") {
		optionData = <NoOptions />;
	}
	//===========end of auction agent onchange========================

	//onchange handler for list agent
	const handleListAgentChange = (event: React.ChangeEvent<any>) => {
		const { value } = event.target;
		setOpenListDiv(true);
		setData({
			...data,
			list_agent: value,
		});

		filteredOption = options.filter((optionName: any) =>
			optionName.contact_first_name.toLowerCase().includes(event.target.value)
		);
		setOptionList(filteredOption);
	};

	//autocomplete function for list agent
	if (optionList?.length > 0 && data.list_agent != "") {
		optionData = optionList?.map((option: any) => (
			<DisplayOptions
				key={option._id}
				name={option.contact_first_name}
				handleClick={() => {
					setData({
						...data,
						list_agent: option.contact_first_name,
						list_agent_email: option.contact_email,
						list_agent_number: option.contact_cell_phone,
					});
					setOpenListDiv(false);
				}}
			/>
		));
	} else if (optionList?.length == 0 && data.list_agent != "") {
		optionData = <NoOptions />;
	}
	//===========end of list agent onchange========================

	//onchange handler for gc
	const handleGcChange = (event: React.ChangeEvent<any>) => {
		const { value } = event.target;
		setOpenGcDiv(true);
		setData({
			...data,
			gc: value,
		});

		filteredOption = options.filter((optionName: any) =>
			optionName.contact_first_name.toLowerCase().includes(event.target.value)
		);
		setOptionList(filteredOption);
	};

	//autocomplete function for list agent
	if (optionList?.length > 0 && data.gc != "") {
		optionData = optionList?.map((option: any) => (
			<DisplayOptions
				key={option._id}
				name={option.contact_first_name}
				handleClick={() => {
					setData({
						...data,
						gc: option.contact_first_name,
						gc_email: option.contact_email,
						gc_number: option.contact_cell_phone,
					});
					setOpenGcDiv(false);
				}}
			/>
		));
	} else if (optionList?.length == 0 && data.gc != "") {
		optionData = <NoOptions />;
	}
	//===========end of onchange handler for gc==============
	//=====================================================

	return (
		<>
			{children({
				data,
				handleChange,
				soldDate,
				evictionDate,
				handleEvictionDateChange,
				handleSoldDateChange,
				openDiv,
				openListDiv,
				openGcDiv,
				handleListAgentChange,
				handleAttorneyChange,
				handleGcChange,
				optionData,
				optionList,
				options,
				errorText,
				soldDateUpdate,
				soldDateError,
				soldDateData,
				cfkAmountUpdate,
				cfkAmountError,
				cfkAmountData,
				onCfkAmountBlur,
				noteData,
				noteError,
				noteUpdate,
				onNoteBlur,
				statusUpdate,
				statusError,
				statusData,
				onStatusChange,
				rehabError,
				rehabData,
				rehabUpdate,
				onRehabBlur,
				holdTimeUpdate,
				holdTimeError,
				holdTimeData,
				onHoldTimeBlur,
			})}
		</>
	);
};
export default OwnedProvider;
