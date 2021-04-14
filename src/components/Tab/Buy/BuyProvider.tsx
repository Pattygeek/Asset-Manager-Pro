import React, { ReactNode, FC, useState, useEffect } from "react";
import { useMutation, useQuery } from "@apollo/client";
import {
	BUY_UPDATE_PROPERTY_STATUS,
	BUY_UPDATE_REASON,
	BUY_UPDATE_PROPERTY_TYPE,
	BUY_UPDATE_ACCESS,
	BUY_UPDATE_SQFT,
	BUY_UPDATE_OCCUPANCY,
	BUY_UPDATE_BR,
	BUY_UPDATE_BA,
	BUY_UPDATE_LOT,
	BUY_UPDATE_AUCTION_LP,
	BUY_UPDATE_MKT,
	BUY_UPDATE_REHAB_COST,
	BUY_UPDATE_HOLD_TIME,
	UPDATE_PROPERTY_NOTE,
} from "../../../helpers/graphql/mutations";
import { useRowData } from "../../../helpers/contexts/rowDataContext";
import {
	LIST_ALL_PROPERTY,
	LIST_CONTACT,
	TAB_HISTORY,
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
	onPropTypeChange: (event: React.ChangeEvent<any>) => void;
	propTypeUpdate: string;
	propertyError: any;
	propertyData: any;
	sqftUpdate: string;
	sqftError: any;
	sqftData: any;
	onSqftBlur: () => void;
	brUpdate: string;
	brError: any;
	brData: any;
	onBrBlur: () => void;
	baUpdate: string;
	baError: any;
	baData: any;
	onBaBlur: () => void;
	lotUpdate: string;
	lotError: any;
	lotData: any;
	onLotBlur: () => void;
	auctionLpUpdate: string;
	auctionLpError: any;
	auctionLpData: any;
	onAuctionLpBlur: () => void;
	mktUpdate: string;
	mktError: any;
	mktData: any;
	onMktBlur: () => void;
	rehabUpdate: string;
	rehabError: any;
	rehabData: any;
	onRehabBlur: () => void;
	holdTimeUpdate: string;
	holdTimeError: any;
	holdTimeData: any;
	onHoldTimeBlur: () => void;
	noteUpdate: string;
	noteError: any;
	noteData: any;
	onNoteBlur: () => void;
};

type Props = {
	children(_: ChildrenProps): ReactNode;
	// rowData: any;
};
const BuyProvider: FC<Props> = ({ children }) => {
	const [statusUpdate, setStatusUpdate] = useState("");
	const [reasonUpdate, setReasonUpdate] = useState("");
	const [accessUpdate, setAccessUpdate] = useState("");
	const [occupancyUpdate, setOccupancyUpdate] = useState("");
	const [propTypeUpdate, setPropTypeUpdate] = useState("");
	const [sqftUpdate, setSqftUpdate] = useState("");
	const [brUpdate, setBrUpdate] = useState("");
	const [baUpdate, setBaUpdate] = useState("");
	const [lotUpdate, setLotUpdate] = useState("");
	const [mktUpdate, setMktUpdate] = useState("");
	const [rehabUpdate, setRehabUpdate] = useState("");
	const [auctionLpUpdate, setAuctionLpUpdate] = useState("");
	const [holdTimeUpdate, setHoldTimeUpdate] = useState("");
	const [noteUpdate, setNoteUpdate] = useState("");
	const [errorText, setErrorText] = useState("");

	const { rowData, handleRowData } = useRowData();

	//console.log(rowData);

	const [propID, setPropID] = useState("");

	useEffect(() => {
		setPropID(rowData._id);
		handleRowData!(rowData);
	}, []);

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
		sqft: rowData.square_feet,
		br: rowData.bed_rooms,
		ba: rowData.bath_rooms,
		lot: rowData.lot_size,
		year: "",
		note: "",
		resale: rowData.resale_price,
		rehab: rowData.rehabilitation_cost,
		buy_price: rowData.buy_price,
		tpp: rowData.total_buy_price,
		annual_tax: "",
		hud_exp: rowData.hud_percent,
		profit: rowData.profit,
		roi: rowData.return_on_investment,
		hold_time: rowData.hold_time_days,
		mkt: rowData.marketing_time,
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
				property_id: propID,
				input_value: value,
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
				input_value: value,
			},
		});
	};

	//=========end of occupancy onchange=========================

	//onchange function for property type
	const onPropTypeChange = (event: React.ChangeEvent<any>) => {
		const { value } = event.target;
		setData({
			...data,
			property_type: value,
		});

		buy_update_property_type({
			variables: {
				property_id: propID,
				input_value: value,
			},
		});
	};
	//=========end of property type=========================

	//onblur function for square feet
	const onSqftBlur = () => {
		buy_update_square_feet({
			variables: {
				property_id: rowData._id,
				input_value: Number(data.sqft),
			},
		});
	};
	//=========end of square feet=========================

	//onblur function for bed room
	const onBrBlur = () => {
		buy_update_bed_room({
			variables: {
				property_id: rowData._id,
				input_value: Number(data.br),
			},
		});
	};
	//=========end of bed room=========================

	//onblur function for lot size
	const onLotBlur = () => {
		buy_update_lot({
			variables: {
				property_id: rowData._id,
				input_value: Number(data.lot),
			},
		});
	};
	//=========end of lot size=========================

	//onblur function for bath room
	const onBaBlur = () => {
		buy_update_bath_room({
			variables: {
				property_id: rowData._id,
				input_value: Number(data.ba),
			},
		});
	};
	//=========end of bath room=========================

	//auction list price function for onBlur
	const onAuctionLpBlur = () => {
		buy_update_auction_list_price({
			variables: {
				property_id: rowData._id,
				input_value: Number(data.auction_list_price),
			},
		});
	};
	//=========end of auction list price=========================

	//mkt function for onBlur
	const onMktBlur = () => {
		buy_update_marketing_time({
			variables: {
				property_id: rowData._id,
				input_value: Number(data.mkt),
			},
		});
	};
	//=========end of mkt=========================

	//rehab function for onBlur
	const onRehabBlur = () => {
		buy_update_rehab_cost({
			variables: {
				property_id: rowData._id,
				input_value: Number(data.rehab),
			},
		});
	};
	//=========end of rehab=========================

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

	//mutation to update note
	const [
		buy_update_property_note,
		{ loading: noteLoading, error: noteError, data: noteData },
	] = useMutation(UPDATE_PROPERTY_NOTE, {
		onCompleted() {
			setNoteUpdate("Changes saved");
			setData({ ...data, note: "" });
			setTimeout(() => {
				setNoteUpdate("");
			}, 3000);
		},
		onError(err) {
			setErrorText("Error saving changes");
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
			setStatusUpdate("Changes saved");
			setTimeout(() => {
				setStatusUpdate("");
			}, 3000);
		},
		refetchQueries: [
			{ query: LIST_ALL_PROPERTY },
			{ query: TAB_HISTORY, variables: { property_id: rowData._id } },
		],
		onError(err) {
			setErrorText("Error saving changes");
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
			setReasonUpdate("Changes saved");
			setTimeout(() => {
				setReasonUpdate("");
			}, 3000);
		},
		refetchQueries: [
			{ query: LIST_ALL_PROPERTY },
			{ query: TAB_HISTORY, variables: { property_id: rowData._id } },
		],
		onError(err) {
			setErrorText("Error saving changes");
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
			setAccessUpdate("Changes saved");
			setTimeout(() => {
				setAccessUpdate("");
			}, 3000);
		},
		refetchQueries: [
			{ query: LIST_ALL_PROPERTY },
			{ query: TAB_HISTORY, variables: { property_id: rowData._id } },
		],
		onError(err) {
			setErrorText("Error saving changes");
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
	] = useMutation(BUY_UPDATE_OCCUPANCY, {
		onCompleted() {
			setOccupancyUpdate("Changes saved");
			setTimeout(() => {
				setOccupancyUpdate("");
			}, 3000);
		},
		refetchQueries: [
			{ query: LIST_ALL_PROPERTY },
			{ query: TAB_HISTORY, variables: { property_id: rowData._id } },
		],
		onError(err) {
			setErrorText("Error saving changes");
			setTimeout(() => {
				setErrorText("");
			}, 8000);
			console.log(err);
			return null;
		},
	});
	//============end of mutation to update occupancy==================

	//mutation to update property type====================================
	const [
		buy_update_property_type,
		{ loading: propertyLoading, error: propertyError, data: propertyData },
	] = useMutation(BUY_UPDATE_PROPERTY_TYPE, {
		onCompleted() {
			setPropTypeUpdate("Changes saved");
			setTimeout(() => {
				setPropTypeUpdate("");
			}, 3000);
		},
		refetchQueries: [
			{ query: LIST_ALL_PROPERTY },
			{ query: TAB_HISTORY, variables: { property_id: rowData._id } },
		],
		onError(err) {
			setErrorText("Error saving changes");
			setTimeout(() => {
				setErrorText("");
			}, 8000);
			console.log(err);
			return null;
		},
	});
	//============end of mutation to update property type==================

	//mutation to update sqft====================================
	const [
		buy_update_square_feet,
		{ loading: sqftLoading, error: sqftError, data: sqftData },
	] = useMutation(BUY_UPDATE_SQFT, {
		onCompleted() {
			setSqftUpdate("Changes saved");
			setTimeout(() => {
				setSqftUpdate("");
			}, 3000);
		},
		refetchQueries: [
			{ query: LIST_ALL_PROPERTY },
			{ query: TAB_HISTORY, variables: { property_id: rowData._id } },
		],
		onError(err) {
			setErrorText("Error saving changes");
			setTimeout(() => {
				setErrorText("");
			}, 8000);
			console.log(err);
			return null;
		},
	});
	//============end of mutation to update sqft==================

	//mutation to update bedroom====================================
	const [
		buy_update_bed_room,
		{ loading: brLoading, error: brError, data: brData },
	] = useMutation(BUY_UPDATE_BR, {
		onCompleted() {
			setBrUpdate("Changes saved");
			setTimeout(() => {
				setBrUpdate("");
			}, 3000);
		},
		refetchQueries: [
			{ query: LIST_ALL_PROPERTY },
			{ query: TAB_HISTORY, variables: { property_id: rowData._id } },
		],
		onError(err) {
			setErrorText("Error saving changes");
			setTimeout(() => {
				setErrorText("");
			}, 8000);
			console.log(err);
			return null;
		},
	});
	//============end of mutation to update bedroom==================

	//mutation to update bathroom====================================
	const [
		buy_update_bath_room,
		{ loading: baLoading, error: baError, data: baData },
	] = useMutation(BUY_UPDATE_BA, {
		onCompleted() {
			setBaUpdate("Changes saved");
			setTimeout(() => {
				setBaUpdate("");
			}, 3000);
		},
		refetchQueries: [
			{ query: LIST_ALL_PROPERTY },
			{ query: TAB_HISTORY, variables: { property_id: rowData._id } },
		],
		onError(err) {
			setErrorText("Error saving changes");
			setTimeout(() => {
				setErrorText("");
			}, 8000);
			console.log(err);
			return null;
		},
	});
	//============end of mutation to update bathroom==================

	//mutation to update lot====================================
	const [
		buy_update_lot,
		{ loading: lotLoading, error: lotError, data: lotData },
	] = useMutation(BUY_UPDATE_LOT, {
		onCompleted() {
			setLotUpdate("Changes saved");
			setTimeout(() => {
				setLotUpdate("");
			}, 3000);
		},
		refetchQueries: [
			{ query: LIST_ALL_PROPERTY },
			{ query: TAB_HISTORY, variables: { property_id: rowData._id } },
		],
		onError(err) {
			setErrorText("Error saving changes");
			setTimeout(() => {
				setErrorText("");
			}, 8000);
			console.log(err);
			return null;
		},
	});
	//============end of mutation to update lot==================

	//mutation to update auction list price====================================
	const [
		buy_update_auction_list_price,
		{ loading: auctionLpLoading, error: auctionLpError, data: auctionLpData },
	] = useMutation(BUY_UPDATE_AUCTION_LP, {
		onCompleted() {
			setAuctionLpUpdate("Changes saved");
			setTimeout(() => {
				setAuctionLpUpdate("");
			}, 3000);
		},
		refetchQueries: [
			{ query: LIST_ALL_PROPERTY },
			{ query: TAB_HISTORY, variables: { property_id: rowData._id } },
		],
		onError(err) {
			setErrorText("Error saving changes");
			setTimeout(() => {
				setErrorText("");
			}, 8000);
			console.log(err);
			return null;
		},
	});
	//============end of mutation to update auction list price==================

	//mutation to update marketing time====================================
	const [
		buy_update_marketing_time,
		{ loading: mktLoading, error: mktError, data: mktData },
	] = useMutation(BUY_UPDATE_MKT, {
		onCompleted() {
			setMktUpdate("Changes saved");
			setTimeout(() => {
				setMktUpdate("");
			}, 3000);
		},
		refetchQueries: [
			{ query: LIST_ALL_PROPERTY },
			{ query: TAB_HISTORY, variables: { property_id: rowData._id } },
		],
		onError(err) {
			setErrorText("Error saving changes");
			setTimeout(() => {
				setErrorText("");
			}, 8000);
			console.log(err);
			return null;
		},
	});
	//============end of mutation to update marketing time==================

	//mutation to update rehab cost====================================
	const [
		buy_update_rehab_cost,
		{ loading: rehabLoading, error: rehabError, data: rehabData },
	] = useMutation(BUY_UPDATE_REHAB_COST, {
		onCompleted() {
			setRehabUpdate("Changes saved");
			setTimeout(() => {
				setRehabUpdate("");
			}, 3000);
		},
		refetchQueries: [
			{ query: LIST_ALL_PROPERTY },
			{ query: TAB_HISTORY, variables: { property_id: rowData._id } },
		],
		onError(err) {
			setErrorText("Error saving changes");
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
			setHoldTimeUpdate("Changes saved");
			setTimeout(() => {
				setHoldTimeUpdate("");
			}, 3000);
		},
		refetchQueries: [
			{ query: LIST_ALL_PROPERTY },
			{ query: TAB_HISTORY, variables: { property_id: rowData._id } },
		],
		onError(err) {
			setErrorText("Error saving changes");
			setTimeout(() => {
				setErrorText("");
			}, 8000);
			console.log(err);
			return null;
		},
	});
	//============end of mutation to update hold time==================

	//query to get contact data
	const { loading, error, data: contactData } = useQuery(LIST_CONTACT, {
		// onCompleted() {
		// 	setOptions(contactData.list_paginated_contacts.edges);
		// },
	});

	const options = contactData?.list_paginated_contacts?.edges;

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

	// const [options, setOptions] = useState<any[]>([]);

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
				propTypeUpdate,
				propertyData,
				propertyError,
				onPropTypeChange,
				sqftData,
				sqftError,
				sqftUpdate,
				onSqftBlur,
				brUpdate,
				brData,
				brError,
				onBrBlur,
				baUpdate,
				baData,
				baError,
				onBaBlur,
				lotUpdate,
				lotData,
				lotError,
				onLotBlur,
				auctionLpUpdate,
				auctionLpData,
				auctionLpError,
				onAuctionLpBlur,
				mktUpdate,
				mktData,
				mktError,
				onMktBlur,
				rehabUpdate,
				rehabData,
				rehabError,
				onRehabBlur,
				holdTimeData,
				holdTimeError,
				holdTimeUpdate,
				onHoldTimeBlur,
				noteData,
				noteError,
				noteUpdate,
				onNoteBlur,
			})}
		</>
	);
};
export default BuyProvider;
