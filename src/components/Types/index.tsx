type Contact = {
	contact_type?: string;
	contact_first_name?: string;
	contact_last_name?: string;
	contact_email?: string;
	contact_cell_phone?: string;
	contact_company_address?: string;
	contact_company_address_zip?: string;
	contact_company_address_state?: string;
	contact_company_address_city?: string;
	contact_title?: string;
};

type PropertyRecord = {
	_id?: string;
	property_id?: string;
	auction_event_id?: string;
	contact_id?: Contact;
	seller_code?: string;
	venue_title?: string;
	addres_street?: string;
	addres_city?: string;
	addres_state?: string;
	addres_zip?: string;
	addres_county?: string;
	property_status?: string;
	none_numbererest_reason?: string;
	is_judicial_state?: boolean;
	state_tax?: number;
	annual_tax?: number;
	buy_price?: number;
	resale_price?: number;
	redbell?: number;
	zillow?: number;
	zestimate?: number;
	realtor_com?: number;
	redfin?: number;
	am_resale?: boolean;
	resale_agent_confirmation?: boolean;
	rehabilitation_cost?: number;
	profit?: number;
	hold_time_days?: number;
	rehab_time_days?: number;
	total_buy_price?: number;
	purchase_fee?: number;
	buyers_premium?: number;
	return_on_investment?: number;
	auction_list_price?: number;
	bath_rooms?: number;
	bed_rooms?: number;
	square_feet?: number;
	lot_size?: number;
	mls_comment?: string;
	credit_bid?: number;
	bidding_start_time?: string;
	bidding_end_time?: string;
	broker_first_name?: string;
	broker_last_name?: string;
	broker_email?: string;
	broker_phone?: string;
	previous_listed_price?: string;
	run_number?: string;
	numbererior_acces?: boolean;
	hud_percent?: number;
	hud_cost?: number;
};

type BuyRecord = {
	stRsv: string | number;
	sqft: number | string;
	br: string;
	ba: string;
	lot: string | number;
	year: number | string;
	resale: number | string;
	rehab: string;
	buy_price: number | string;
	tpp: string;
	annual_tax: string;
	hud_exp: string;
	profit: string | number;
	roi: number | string;
	hold_time: string;
	mkt: string;
	auction_list_price: string | number;
	high_bid: string | number;
	auction_agent: string;
	list_agent: string;
	auction_agent_number: string;
	auction_agent_email: string;
	list_agent_number: string;
	list_agent_email: string;
	reason: string;
	access: string | boolean;
	occupancy: string;
	product: string;
	status: string;
	property_type: string;
};

export type { PropertyRecord, Contact, BuyRecord };
