import { gql } from "@apollo/client";

const PROPERTY_ENTRY = gql`
	mutation importReport($batch_title: String!, $batch_data: [JSON]) {
		import_property_report_batch(
			input: { batch_title: $batch_title, batch_data: $batch_data }
		) {
			message
			status_code
			queued_imports
		}
	}
`;

export { PROPERTY_ENTRY };
