import { gql } from "@apollo/client";

export const typeDefs = gql`
	type BatchImport {
		batch_data: [JSON]
	}
`;
