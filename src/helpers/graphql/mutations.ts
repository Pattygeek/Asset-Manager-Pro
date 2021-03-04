import { gql } from "@apollo/client";

const PROPERTY_ENTRY = gql`
	mutation importReport($batch_data: [JSON]) {
		import_property_report_batch(input: { batch_data: $batch_data }) {
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

export {
	PROPERTY_ENTRY,
	PROCESS_ENTRY,
	FORGOT_PASSWORD,
	RESET_PASSWORD,
	REGISTER,
};
