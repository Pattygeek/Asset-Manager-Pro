import { gql } from "@apollo/client";

const LIST_ALL_PROPERTY = gql`
	query ListAllProperty($cursor: String, $limit: Int) {
		list_all_property_reports(cursor: $cursor, limit: $limit) {
			edges {
				_id
				property_id
				auction_event_id
				contact_id{
					contact_type
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
				buy_price
				resale_price
				resale_price_redbell
				resale_price_zestimate
				resale_price_realtor_com
				resale_price_redfin
				am_resale
				resale_agent_confirmation
				rehabilitation_cost
				profit
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
				previous_listed_price
				run_number
				interior_access
				red_bell
				zillow
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
export { LIST_ALL_PROPERTY, LOGIN };
