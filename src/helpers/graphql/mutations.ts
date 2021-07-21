import { gql } from "@apollo/client";

const PROPERTY_ENTRY = gql`
	mutation importReport($input: BatchImport) {
		import_property_report_batch(input: $input) {
			message
			status_code
			queued_imports
			next
			next_param
			import_id
		}
	}
`;

const PROCESS_ENTRY = gql`
	mutation processEntry($vip_import_id: String) {
		process_batch_report_record(vip_import_id: $vip_import_id) {
			message
			status_code
			queued_imports
		}
	}
`;

const FORGOT_PASSWORD = gql`
	mutation forgot($email: String) {
		forgot_password_request(email: $email) {
			message
		}
	}
`;

const RESET_PASSWORD = gql`
	mutation reset(
		$user_id: String
		$new_password: String
		$confirm_password: String
	) {
		reset_password_request(
			user_id: $user_id
			new_password: $new_password
			confirm_password: $confirm_password
		) {
			first_name
		}
	}
`;

const REGISTER = gql`
	mutation register(
		$email: String!
		$password: String!
		$first_name: String
		$last_name: String
		$phone_number: String
	) {
		default_user_registration(
			email: $email
			password: $password
			first_name: $first_name
			last_name: $last_name
			phone_number: $phone_number
		) {
			token
		}
	}
`;

const ADD_CONTACT = gql`
	mutation addcontact(
		$contact_type: ContactType
		$contact_first_name: String
		$contact_last_name: String
		$contact_email: String
		$contact_cell_phone: String
		$contact_office_phone: String
		$contact_fax_number: String
		$contact_company: String
		$contact_company_address: String
		$contact_company_address_city: String
		$contact_company_address_state: String
		$contact_company_address_zip: String
		$has_property: Boolean
		$contact_title: String
		$property_id: String
	) {
		add_contact(
			input: {
				property_id: $property_id
				contact_type: $contact_type
				contact_first_name: $contact_first_name
				contact_last_name: $contact_last_name
				contact_email: $contact_email
				contact_cell_phone: $contact_cell_phone
				contact_office_phone: $contact_office_phone
				contact_fax_number: $contact_fax_number
				contact_company: $contact_company
				contact_company_address: $contact_company_address
				contact_company_address_state: $contact_company_address_state
				contact_company_address_zip: $contact_company_address_zip
				contact_company_address_city: $contact_company_address_city
				has_property: $has_property
				contact_title: $contact_title
			}
		) {
			message
		}
	}
`;

const EDIT_CONTACT = gql`
	mutation updatecontact(
		$contact_id: String
		$property_id: String
		$contact_type: ContactType
		$contact_first_name: String
		$contact_last_name: String
		$contact_email: String
		$contact_cell_phone: String
		$contact_office_phone: String
		$contact_fax_number: String
		$contact_company: String
		$contact_company_address: String
		$contact_company_address_city: String
		$contact_company_address_state: String
		$contact_company_address_zip: String
		$has_property: Boolean
		$contact_title: String
	) {
		edit_contact(
			input: {
				contact_id: $contact_id
				property_id: $property_id
				contact_type: $contact_type
				contact_first_name: $contact_first_name
				contact_last_name: $contact_last_name
				contact_email: $contact_email
				contact_cell_phone: $contact_cell_phone
				contact_office_phone: $contact_office_phone
				contact_fax_number: $contact_fax_number
				contact_company: $contact_company
				contact_company_address: $contact_company_address
				contact_company_address_state: $contact_company_address_state
				contact_company_address_zip: $contact_company_address_zip
				contact_company_address_city: $contact_company_address_city
				has_property: $has_property
				contact_title: $contact_title
			}
		) {
			message
		}
	}
`;

const BUY_UPDATE_PROPERTY_STATUS = gql`
	mutation buyStatus($property_id: String, $status_value: PropertyStatusValue) {
		buy_update_property_status(
			property_id: $property_id
			status_value: $status_value
		) {
			message
			status_code
		}
	}
`;

const BUY_UPDATE_REASON = gql`
	mutation buyReason($property_id: String, $input_value: NoneInterestValue) {
		buy_update_none_interest_reason(
			property_id: $property_id
			input_value: $input_value
		) {
			message
			status_code
		}
	}
`;

const BUY_UPDATE_ACCESS = gql`
	mutation buyAccess($property_id: String, $input_value: Boolean) {
		buy_update_access(property_id: $property_id, input_value: $input_value) {
			message
			status_code
		}
	}
`;

const BUY_UPDATE_OCCUPANCY = gql`
	mutation buyOccupancy($property_id: String, $input_value: OccupancyStatus) {
		buy_update_occupancy_status(
			property_id: $property_id
			input_value: $input_value
		) {
			message
			status_code
		}
	}
`;



const BUY_UPDATE_BR = gql`
	mutation buyBr($property_id: String, $input_value: Int) {
		buy_update_bed_room(property_id: $property_id, input_value: $input_value) {
			message
			status_code
		}
	}
`;

const BUY_UPDATE_BA = gql`
	mutation buyBa($property_id: String, $input_value: Int) {
		buy_update_bath_room(property_id: $property_id, input_value: $input_value) {
			message
			status_code
		}
	}
`;

const BUY_UPDATE_LOT = gql`
	mutation buyLot($property_id: String, $input_value: Int) {
		buy_update_lot(property_id: $property_id, input_value: $input_value) {
			message
			status_code
		}
	}
`;



export {	
	BUY_UPDATE_LOT,
	BUY_UPDATE_BA,
	BUY_UPDATE_BR,
	BUY_UPDATE_OCCUPANCY,
	BUY_UPDATE_ACCESS,
	PROPERTY_ENTRY,
	PROCESS_ENTRY,
	FORGOT_PASSWORD,
	RESET_PASSWORD,
	REGISTER,
	ADD_CONTACT,
	EDIT_CONTACT,
	BUY_UPDATE_PROPERTY_STATUS,
	BUY_UPDATE_REASON,
};
