import { gql } from "@apollo/client";

export const LIST_ALL_PROPERTY_CACHE = gql`
	query ListAllProperty($cursor: String, $limit: Int) {
		list_all_property_reports @client(cursor: $cursor, limit: $limit) {
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
				is_hidden
				state_tax
				annual_tax
				sourced_annual_taxes {
					source
					tax_year
					annual_tax
					date_collected
				}
				marketing_time
				buy_price
				date_bought
				date_sold
				loan_amount
				down_payment
				resale_price
				redbell
				redbell_annual_taxes
				zillow
				zillow_annual_taxes
				zestimate
				realtor_com
				redfin
				am_resale
				resale_agent_confirmation
				rehabilitation_cost
				profit
				hold_time_days
				rehab_time_days
				estimated_rehab_time
				total_buy_price
				purchase_fee
				buyers_premium
				eviction_date
				occupancy_status
				property_type
				deed_received
				apraisal_ordered
				apraisal_ordered_on
				c_of_o_completed
				c_of_o_needed
				gas_co
				gas_co_number
				electric_co
				electric_co_number
				cash_for_keys
				cash_for_key_amount
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
			page_info {
				has_next_page
				end_cursor
			}
		}
	}
`;


