import { gql } from "@apollo/client";

export const typeDefs = gql`
	type BatchImport {
		batch_title: String!
		batch_data: [JSON]
	}
`;
