import Moment from "react-moment";
import { useQuery } from "@apollo/client";
import { USER_PROFILE } from "../helpers/graphql/queries";
import { useState } from "react";

export const DateRenderer = (props: any) => {
	const { value } = props;
	return (
		<>
			<span>
				<Moment format="DD/MM/YY">{value}</Moment>
			</span>
		</>
	);
};

export const TimeRenderer = (props: any) => {
	const { value } = props;
	return (
		<>
			<span>
				<Moment format="HH:mm">{value}</Moment>
			</span>
		</>
	);
};

export const FieldNameRenderer = (props: any) => {
	const { value } = props;
	return (
		<>
			<span>
				{value?.replace(/_/g, " ")}
			</span>
		</>
	);
};

export const UserNameRenderer = (props: any) => {
	const { value } = props;

	const [name, setName] = useState("");

	const { loading, error, data } = useQuery(USER_PROFILE, {
		variables: {
			user_id: value,
		},
		onCompleted() {
			const { first_name, last_name } = data.user_profile.user;
			setName(first_name + " " + last_name.charAt(0) + ".");
		},
	});

	return (
		<>
			<span>{name}</span>
		</>
	);
};
