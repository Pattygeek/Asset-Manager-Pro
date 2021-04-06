import React, { ReactNode, FC, useState, useEffect } from "react";
import { useMutation, useQuery } from "@apollo/client";

import { ESCROW_UPDATE_BOUGHT_DATE } from "../../../helpers/graphql/mutations";

import { useRowData } from "../../../helpers/contexts/rowDataContext";

import {
	LIST_ALL_PROPERTY,
	LIST_CONTACT,
	SINGLE_PROPERTY_REPORT,
} from "../../../helpers/graphql/queries";

import { EscrowRecord } from "../../Types";

import {
	DisplayOptions,
	NoOptions,
} from "../../ContactsAutocomplete/AutocompleteComponent";

type ChildrenProps = {
	data: EscrowRecord;
	estDate: any;
	handleEstDateChange: (date: Date | null) => void;
	appraisalDate: any;
	handleAppraisalDateChange: (date: Date | null) => void;
	boughtDate: any;
	handleBoughtDateChange: (date: Date | null) => void;
	handleChange: (event: React.ChangeEvent<any>) => void;
	options: any[];
	openListDiv: boolean;
	optionData: any;
	optionList: any[];
	handleAuctionChange: (evt: React.ChangeEvent<any>) => void;
	openDiv: boolean;
	handleListAgentChange: (event: React.ChangeEvent<any>) => void;
    boughtDateUpdate: string;
    boughtDateError: any;
    boughtDateData: any;
    errorText: string;
};

type Props = {
	children(_: ChildrenProps): ReactNode;
};

const EscrowProvider: FC<Props> = ({ children }) => {
	const { rowData, handleRowData } = useRowData();

	const [errorText, setErrorText] = useState("Error saving changes");
	const [boughtDateUpdate, setBoughtDateUpdate] = useState("");
	//state handler for all the input fields
	const [data, setData] = useState({
		status: rowData.property_status,
		tpp: rowData.total_buy_price,
		potential_rehab: "",
		potential_lp: "",
		potential_profit: "",
		potential_roi: "",
		est_coe: "",
		occupancy: rowData.occupancy_status,
		property_access: rowData.interior_access,
		property_received: "",
		co_needed: rowData.c_of_o_needed,
		co_completed: rowData.c_of_o_completed,
		oil_swept: "",
		sewer_checked: "",
		list_agent: "",
		list_agent_number: "",
		list_agent_email: "",
		auction_agent: "",
		auction_agent_number: "",
		auction_agent_email: "",
		financing: "",
		loan_amount: rowData.loan_amount,
		appraisal_ordered: rowData.apraisal_ordered,
		appraisal_date_ordered: rowData.apraisal_ordered_on,
		title_received: "",
		deed_received: rowData.deed_received,
		final_work_through: "",
		ready_to_close: "",
		bought_date: "",
		note: "",
		down_payment: rowData.down_payment,
		loan_interest: "",
		contractor_received: "",
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
	const [estDate, setEstDate] = useState<any>(new Date());

	const handleEstDateChange = (date: Date | null) => {
		setEstDate(date);
	};

	const [appraisalDate, setAppraisalDate] = useState<any>(new Date());

	const handleAppraisalDateChange = (date: Date | null) => {
		setAppraisalDate(date);
	};

	const [boughtDate, setBoughtDate] = useState<any>(new Date());

	const handleBoughtDateChange = (date: Date | null) => {
		setBoughtDate(date);

		escrow_update_bought_date({
			variables: {
				property_id: rowData._id,
				input_value: date,
			},
		});
	};

	//===============end of date handler===================

	//mutation to update property status
	const [
		escrow_update_bought_date,
		{
			loading: boughtDateLoading,
			error: boughtDateError,
			data: boughtDateData,
		},
	] = useMutation(ESCROW_UPDATE_BOUGHT_DATE, {
		onCompleted() {
			//refetch();
			setBoughtDateUpdate("Changes saved");
			setTimeout(() => {
				setBoughtDateUpdate("");
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

	//================contact filtering=======================
	const [options, setOptions] = useState<any[]>([]);
	//query to get contact data
	const { loading, error, data: contactData } = useQuery(LIST_CONTACT, {
		onCompleted() {
			setOptions(contactData.list_paginated_contacts.edges);
		},
	});
	const [optionList, setOptionList] = useState<any[]>([]);
	const [listAgentOptions, setListAgentOptions] = useState<any[]>([]);
	let optionData;
	let filteredOption;

	//state handler for auction agent autocomplete
	const [openDiv, setOpenDiv] = useState(false);

	//state handler for list agent autocomplete
	const [openListDiv, setOpenListDiv] = useState(false);

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
		setListAgentOptions(filteredOption);
	};

	//autocomplete function for list agent
	if (listAgentOptions?.length > 0 && data.list_agent != "") {
		optionData = listAgentOptions?.map((option: any) => (
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
	} else if (listAgentOptions?.length == 0 && data.list_agent != "") {
		optionData = <NoOptions />;
	}
	//===========end of list agent onchange=========================

	//onchange handler for auction agent
	const handleAuctionChange = (evt: React.ChangeEvent<any>) => {
		const { value } = evt.target;
		setOpenDiv(true);
		setData({
			...data,
			auction_agent: value,
		});

		filteredOption = options.filter((optionName: any) =>
			optionName.contact_first_name.toLowerCase().includes(evt.target.value)
		);
		setOptionList(filteredOption);
	};

	//autocomplete function for auction agent
	if (optionList?.length > 0 && data.auction_agent != "") {
		optionData = optionList?.map((option: any) => (
			<DisplayOptions
				key={option._id}
				name={option.contact_first_name}
				handleClick={() => {
					setData({
						...data,
						auction_agent: option.contact_first_name,
						auction_agent_email: option.contact_email,
						auction_agent_number: option.contact_cell_phone,
					});
					setOpenDiv(false);
				}}
			/>
		));
	} else if (optionList?.length == 0 && data.auction_agent != "") {
		optionData = <NoOptions />;
	}
	//===========end of auction agent onchange========================
	//================end of contact filtering================

	return (
		<>
			{children({
				data,
				handleChange,
				boughtDate,
				handleAppraisalDateChange,
				handleBoughtDateChange,
				handleEstDateChange,
				appraisalDate,
				estDate,
				options,
				openListDiv,
				optionData,
				optionList,
				handleAuctionChange,
				openDiv,
				handleListAgentChange,
                boughtDateData,
                boughtDateError,
                boughtDateUpdate,
                errorText
			})}
		</>
	);
};

export default EscrowProvider;
