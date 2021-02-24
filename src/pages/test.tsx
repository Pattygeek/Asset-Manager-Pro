import React, { useState } from "react";
import { CSVReader } from "react-papaparse";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import { useMutation } from "@apollo/client";
import { PROPERTY_ENTRY } from "../helpers/graphql/mutations";

const Test = () => {
	const [title, setTitle] = useState("");

	let finalData: any;
	const handleOnDrop = (data: any) => {
		console.log("---------------------------");
		console.log(data);
		console.log("---------------------------");

		let newData = [];
		for (let i = 0; i < data.length; i++) {
			newData.push(data[i].data);
		}

		function convert(obj: any) {
			const result: any = {};
			Object.keys(obj).forEach(function (key) {
				result[key.replace(/\s/g, "_").replace(/#/g, "number").toLowerCase()] =
					obj[key];
			});

			return result;
		}

		var result = newData.map(function (o) {
			return convert(o);
		});

		function convertIntObj(obj: any) {
			const res: any = {};
			const remove: any = {};
			const dollar: any = {};
			for (const key in obj) {
				res[key] = {};
				remove[key] = {};
				dollar[key] = {};
				for (const prop in obj[key]) {
					const removeNA = obj[key][prop].replace(/(#N\/A)+/g, "0");
					const number = Number(obj[key][prop].replace(/[^0-9.-]+/g, ""));
					dollar[key][prop] = obj[key][prop].includes("$")
						? number
						: obj[key][prop];
					remove[key][prop] = dollar[key][prop].includes("#N/A") //find a way to get this to work
						? removeNA
						: dollar[key][prop];
					const parsed = parseInt(remove[key][prop], 10);
					res[key][prop] = isNaN(parsed) ? remove[key][prop] : parsed;
				}
			}
			return res;
		}

		var rest = convertIntObj(result);

		var arrayResult = Object.values(rest);
		// console.log(arrayResult)

		const newArray = arrayResult.map((item: any) => {
			return {
				property_id: item.property_id,
				auction_event_id: item.event_id,
				address_street: item.address,
				address_city: item.city,
				address_county: item.county,
				address_state: item.state,
				credit_bid: item.credit_bid,
				display_reserve: item.displayed_reserve,
				inspection_report: item.property_inspection_report,
				property_type: item.property_type,
				bed_rooms: item.bedrooms,
				bath_rooms: item.baths,
				square_feet: item.sf,
				lot_size: item.lot_size,
				year_built: item.year_built,
				mls_comment: item.mlscomment,
				starting_bid: item.starting_bid,
				occupancy_status: item.occupancy_status,
				bidding_start_time: item.bidding_start_time,
				bidding_end_time: item.bidding_end_time,
				broker_first_name: item.broker_first_name,
				broker_last_name: item.broker_last_name,
				broker_email: item.broker_email,
				broker_phone: item.broker_phone,
				previously_listed_price: item.previously_listed_price,
				run_number: item.run_number,
				interior_access: item.interior_access_available,
				red_bell: item._redbell_,
				zillow: item._zillow_,
			};
		});

		finalData = newArray;
		console.log(finalData);
	};

	const handleOnError = (err: any) => {
		console.log(err);
	};

	const handleOnRemoveFile = (data: any) => {
		console.log("---------------------------");
		console.log(data);
		console.log("---------------------------");
	};

	const [import_property_report_batch, { loading }] = useMutation(
		PROPERTY_ENTRY,
		{
			onCompleted({ import_property_report_batch }) {
				console.log(import_property_report_batch.message);
			},
			onError(err) {
				console.log(err);
				return null;
			},
		}
	);

	const handleSubmit = (e: React.ChangeEvent<any>) => {
		e.preventDefault();
		import_property_report_batch({
			variables: {
				batch_title: title,
				batch_data: finalData,
			},
		});
	};
	return (
		<>
			<form onSubmit={handleSubmit}>
				<Box width="50%" marginX="auto">
					<p>Hello there</p>
					<input
						placeholder="title"
						value={title}
						onChange={(e: React.ChangeEvent<any>) => setTitle(e.target.value)}
					/>
					<CSVReader
						onDrop={handleOnDrop}
						onError={handleOnError}
						addRemoveButton
						config={{
							header: true,
						}}
						onRemoveFile={handleOnRemoveFile}
					>
						<span>Drop CSV file here or click to upload.</span>
					</CSVReader>
					<Button type="submit" variant="contained" color="primary">
						{loading ? "submitting" : "Submit"}
					</Button>
				</Box>
			</form>
		</>
	);
};
export default Test;
