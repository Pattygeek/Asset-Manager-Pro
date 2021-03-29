import React, { ReactNode, FC, useState } from "react";
import { useMutation, useQuery } from "@apollo/client";
import {
	BUY_UPDATE_PROPERTY_STATUS,
	BUY_UPDATE_REASON,
	BUY_UPDATE_ACCESS,
} from "../../../helpers/graphql/mutations";
import {
	LIST_ALL_PROPERTY,
	LIST_CONTACT,
} from "../../../helpers/graphql/queries";
import { BuyRecord } from "../../Types";
import {
	DisplayOptions,
	NoOptions,
} from "../../ContactsAutocomplete/AutocompleteComponent";

type ChildrenProps = {
	optionData: any;
	statusError: any;
	statusData: any;
	statusUpdate: string;
	reasonUpdate: string;
	accessUpdate: string;
	accessError: any;
	accessData: any;
	errorText: string;
	statusLoading: boolean;
	onStatusChange: (event: React.ChangeEvent<any>) => void;
	onReasonChange: (event: React.ChangeEvent<any>) => void;
	onAccessChange: (event: React.ChangeEvent<any>) => void;
	reasonError: any;
	reasonData: any;
	data: BuyRecord;
	handleChange: (event: React.ChangeEvent<any>) => void;
	handleAuctionChange: (event: React.ChangeEvent<any>) => void;
	contactData: any;
	openDiv: boolean;
	openModal: boolean;
	ModalOpen: () => void;
	openListDiv: boolean;
	options: any[];
	optionList: any[];
	handleListAgentChange: (event: React.ChangeEvent<any>) => void;
	handleModalClose: () => void;
	open: boolean;
	handleOpen: () => void;
	handleClose: () => void;
	show: boolean;
	handleShow: () => void;
	handleCloseShow: () => void;
	occupancyUpdate: string;
	onOccupancyChange: (event: React.ChangeEvent<any>) => void;
	occupancyError: any;
	occupancyData: any;
};

type Props = {
	children(_: ChildrenProps): ReactNode;
	rowData: any;
};
const BuyProvider: FC<Props> = ({ children, rowData }) => {
	const [statusUpdate, setStatusUpdate] = useState("");
	const [reasonUpdate, setReasonUpdate] = useState("");
	const [accessUpdate, setAccessUpdate] = useState("");
	const [occupancyUpdate, setOccupancyUpdate] = useState("");
	const [errorText, setErrorText] = useState("Error saving changes");

	//================pricehistory modal handler==============
	const [open, setOpen] = useState(false);

	const handleOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};
	//======================================================

	//================bidhistory modal handler==============
	const [show, setShow] = useState(false);

	const handleShow = () => {
		setShow(true);
	};

	const handleCloseShow = () => {
		setShow(false);
	};
	//=======================================================

	//state handler for all the input fields
	const [data, setData] = useState<BuyRecord>({
		stRsv: "",
		sqft: rowData.square_feet ? rowData.square_feet : null,
		br: "",
		ba: "",
		lot: rowData.lot_size,
		year: "",
		resale: rowData.resale_price,
		rehab: "",
		buy_price: rowData.buy_price,
		tpp: "",
		annual_tax: "",
		hud_exp: rowData.hud_percent,
		profit: rowData.profit,
		roi: rowData.return_on_investment,
		hold_time: "",
		mkt: "",
		auction_list_price: rowData.auction_list_price,
		high_bid: "",
		auction_agent: "",
		list_agent: "",
		auction_agent_number: "",
		auction_agent_email: "",
		list_agent_number: "",
		list_agent_email: "",
		reason: rowData.none_interest_reason,
		access: rowData.interior_access,
		occupancy: rowData.occupancy_status,
		product: "",
		status: rowData.property_status,
		property_type: rowData.property_type,
	});

	//general onchange handler for input fields
	const handleChange = (event: React.ChangeEvent<any>) => {
		const { name, value } = event.target;
		setData({
			...data,
			[name]: value,
		});
	};

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

	//onchange function for reason
	const onReasonChange = (event: React.ChangeEvent<any>) => {
		const { value } = event.target;
		setData({
			...data,
			reason: value,
		});

		buy_update_none_interest_reason({
			variables: {
				property_id: rowData._id,
				input_value: value,
			},
		});
	};
	//=========end of status onchange=========================

	//onchange function for access
	const onAccessChange = (event: React.ChangeEvent<any>) => {
		const { value } = event.target;
		setData({
			...data,
			access: value,
		});

		buy_update_access({
			variables: {
				property_id: rowData._id,
				input_value: value == "Yes" ? true : false,
			},
		});
	};
	//=========end of access onchange=========================

	//onchange function for occupancy
	const onOccupancyChange = (event: React.ChangeEvent<any>) => {
		const { value } = event.target;
		setData({
			...data,
			occupancy: value,
		});

		buy_update_occupancy_status({
			variables: {
				property_id: rowData._id,
				input_value: value.replace(/['"]+/g, ""),
			},
		});
	};
	//=========end of access onchange=========================

	const { refetch } = useQuery(LIST_ALL_PROPERTY);

	//mutation to update property status
	const [
		buy_update_property_status,
		{ loading: statusLoading, error: statusError, data: statusData },
	] = useMutation(BUY_UPDATE_PROPERTY_STATUS, {
		onCompleted() {
			refetch();
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

	//mutation to update not interested reason=====================
	const [
		buy_update_none_interest_reason,
		{ loading: reasonLoading, error: reasonError, data: reasonData },
	] = useMutation(BUY_UPDATE_REASON, {
		onCompleted() {
			refetch();
			setReasonUpdate("Changes saved");
			setTimeout(() => {
				setReasonUpdate("");
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
	//============end of mutation for not interested reason========

	//mutation to update access====================================
	const [
		buy_update_access,
		{ loading: accessLoading, error: accessError, data: accessData },
	] = useMutation(BUY_UPDATE_ACCESS, {
		onCompleted() {
			refetch();
			setAccessUpdate("Changes saved");
			setTimeout(() => {
				setAccessUpdate("");
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
	//============end of mutation to update access==================

	//mutation to update occupancy====================================
	const [
		buy_update_occupancy_status,
		{ loading: occupancyLoading, error: occupancyError, data: occupancyData },
	] = useMutation(BUY_UPDATE_ACCESS, {
		onCompleted() {
			refetch();
			setOccupancyUpdate("Changes saved");
			setTimeout(() => {
				setOccupancyUpdate("");
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
	//============end of mutation to update occupancy==================

	//query to get contact data
	const { loading, error, data: contactData } = useQuery(LIST_CONTACT, {
		onCompleted() {
			setOptions(contactData.list_paginated_contacts.edges);
		},
	});

	//!!!!!!!!!!!!!!!this block of code below has to do with contact filters!!!!!!!!!!!!

	//state handler for auction agent autocomplete
	const [openDiv, setOpenDiv] = useState(false);

	//handle modal open
	const [openModal, setOpenModal] = useState(false);

	const handleModalClose = () => {
		setOpenModal(false);
	};

	const ModalOpen = () => {
		setOpenModal(true);
	};

	//state handler for list agent autocomplete
	const [openListDiv, setOpenListDiv] = useState(false);

	const [options, setOptions] = useState<any[]>([]);

	const [optionList, setOptionList] = useState<any[]>([]);
	let optionData: any;
	let filteredOption;

	//onchange handler for auction agent
	const handleAuctionChange = (event: React.ChangeEvent<any>) => {
		const { value } = event.target;
		setOpenDiv(true);
		setData({
			...data,
			auction_agent: value,
		});

		filteredOption = options.filter((optionName: any) =>
			optionName.contact_first_name.toLowerCase().includes(event.target.value)
		);
		setOptionList(filteredOption);
	};

	//autocomplete function for auction agent
	if (optionList?.length > 0 && data.auction_agent != "") {
		optionData = optionList?.map((option: any) => (
			<DisplayOptions
				key={option._id}
				name={
					option.contact_first_name +
					" " +
					(option.contact_last_name != null ? option.contact_last_name : "")
				}
				handleClick={() => {
					setData({
						...data,
						auction_agent:
							option.contact_first_name + " " + option.contact_last_name,
						auction_agent_email: option.contact_email,
						auction_agent_number: option.contact_cell_phone,
					});
					setOpenDiv(false);
				}}
			/>
		));
	} else if (optionList?.length == 0 && data.auction_agent != "") {
		optionData = <NoOptions openModal={ModalOpen} />;
	}

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
				name={
					option.contact_first_name +
					" " +
					(option.contact_last_name != null ? option.contact_last_name : "")
				}
				handleClick={() => {
					setData({
						...data,
						list_agent:
							option.contact_first_name + " " + option.contact_last_name,
						list_agent_email: option.contact_email,
						list_agent_number: option.contact_cell_phone,
					});
					setOpenListDiv(false);
				}}
			/>
		));
	} else if (optionList?.length == 0 && data.list_agent != "") {
		optionData = <NoOptions openModal={ModalOpen} />;
	}
	//===========end of list agent onchange========================
	//!!!!!!!!!!!!!!!!end of contact filters code!!!!!!!!!!!!!!!!!!!!!!!
	return (
		<>
			{children({
				statusData,
				statusError,
				statusUpdate,
				errorText,
				statusLoading,
				onStatusChange,
				data,
				handleChange,
				handleAuctionChange,
				contactData,
				openDiv,
				openListDiv,
				ModalOpen,
				options,
				optionList,
				handleListAgentChange,
				openModal,
				optionData,
				handleModalClose,
				open,
				handleOpen,
				handleClose,
				show,
				handleShow,
				handleCloseShow,
				onReasonChange,
				reasonData,
				reasonError,
				reasonUpdate,
				onAccessChange,
				accessData,
				accessError,
				accessUpdate,
				occupancyUpdate,
				onOccupancyChange,
				occupancyData,
				occupancyError,
			})}
		</>
	);
};
export default BuyProvider;
