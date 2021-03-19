import { gql } from "@apollo/client";

const LIST_ALL_PROPERTY = gql`
	query ListAllProperty($cursor: String, $limit: Int) {
		list_all_property_reports(cursor: $cursor, limit: $limit) {
			edges {
				_id
				property_id
				auction_event_id
				contact_id {
					contact_type
					contact_title
					contact_first_name
					contact_last_name
					contact_email
					contact_cell_phone
				}
				seller_code
				venue_title
				address_street
				address_city
				address_state
				address_zip
				address_county
				property_status
				none_interest_reason
				is_judicial_state
				state_tax
				annual_tax
				buy_price
				resale_price
				redbell
				zillow
				zestimate
				realtor_com
				redfin
				am_resale
				resale_agent_confirmation
				rehabilitation_cost
				profit
				hold_time_days
				rehab_time_days
				total_buy_price
				purchase_fee
				buyers_premium
				return_on_investment
				auction_list_price
				bath_rooms
				bed_rooms
				square_feet
				lot_size
				mls_comment
				credit_bid
				bidding_start_time
				bidding_end_time
				broker_first_name
				broker_last_name
				broker_email
				broker_phone
				previous_listed_price
				run_number
				interior_access
				hud_percent
				hud_cost
			}
		}
	}
`;

const LOGIN = gql`
	query login($email: String, $password: String) {
		default_user_login(email: $email, password: $password) {
			token
		}
	}
`;

const LIST_CONTACT = gql`
	query list_contacts($cursor: String, $limit: Int) {
		list_paginated_contacts(cursor: $cursor, limit: $limit) {
			edges {
				_id
				contact_email
				contact_type
				contact_first_name
				contact_last_name
				contact_cell_phone
				contact_company
				contact_company_address_state
			}
			page_info {
				has_next_page
				end_cursor
			}
		}
	}
`;

const CONTACTS_BY_ZIP = gql`
	query searchByZip($zip_code: String) {
		get_contacts_by_zip(zip_code: $zip_code) {
			message
			status_code
			contacts {
				contact_first_name
				contact_last_name
				contact_email
				contact_title
				contact_company_address_state
			}
		}
	}
`;
export { LIST_ALL_PROPERTY, LOGIN, LIST_CONTACT, CONTACTS_BY_ZIP };
