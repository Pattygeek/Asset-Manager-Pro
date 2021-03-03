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

export { PROPERTY_ENTRY, PROCESS_ENTRY };
