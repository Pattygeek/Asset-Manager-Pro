import { gql } from "@apollo/client";

const PROPERTY_ENTRY = gql`
	mutation importReport($input: BatchImport) {
		import_property_report_batch(input: $input) {
			message
			status_code
			queued_imports
		}
	}
`;

export { PROPERTY_ENTRY };