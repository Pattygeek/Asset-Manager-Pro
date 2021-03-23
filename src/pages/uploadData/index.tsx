import Box from "@material-ui/core/Box";
import LinearProgress from "@material-ui/core/LinearProgress";
import makeStyles from "@material-ui/core/styles/makeStyles";
import { CSVReader } from "react-papaparse";
import { useToggle } from "../../helpers/contexts/toggleContext";
import { useMutation } from "@apollo/client";
import { PROPERTY_ENTRY, PROCESS_ENTRY } from "../../helpers/graphql/mutations";
import UploadStatus from "../../components/UploadStatus/index";
import { ReactComponent as UploadSuccess } from "../../assets/icons/uploadSuccess.svg";
import { ReactComponent as UploadFailure } from "../../assets/icons/uploadFailure.svg";
import React, { useState } from "react";

const useStyles = makeStyles(() => ({
	icon: {
		height: "50px",
		width: "50px",
		marginRight: "20px",
	},
}));

const UploadData = () => {
	const { toggle } = useToggle();
	const classes = useStyles();
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
					// remove[key][prop] = dollar[key][prop].includes("#N/A") //find a way to get this to work
					// 	? removeNA
					// 	: dollar[key][prop];
					const parsed = parseInt(dollar[key][prop], 10);
					res[key][prop] = isNaN(parsed) ? dollar[key][prop] : parsed;
				}
			}
			return res;
		}

		var rest = convertIntObj(result);

		// var rest2 = removeNAA(rest);

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

		newArray.forEach((element) => {
			if (element.credit_bid === "#N/A") {
				element.credit_bid = 0;
			}
		});

		finalData = newArray;
		console.log(finalData);
		handleFirstImport();
	};

	const handleOnError = (err: any) => {
		console.log(err);
	};

	const handleOnRemoveFile = (data: any) => {
		console.log("---------------------------");
		console.log(data);
		console.log("---------------------------");
	};

	let vip: string;

	//mutation to upload data
	const [
		import_property_report_batch,
		{ loading, data: importData, error: importError },
	] = useMutation(PROPERTY_ENTRY, {
		onCompleted({ import_property_report_batch }) {
			console.log(import_property_report_batch.message);
			vip = import_property_report_batch.import_id;
			handleSecondImport(vip);
		},
		onError(err) {
			console.log(err);
			return null;
		},
	});

	const [countProcessedRecords, setCountProcessedRecords] = useState<any>(null);

	//second api call
	const [
		process_batch_report_record,
		{ loading: processLoading, data: processData, error: processError },
	] = useMutation(PROCESS_ENTRY, {
		onCompleted({ process_batch_report_record }) {
			console.log(process_batch_report_record.message);
		},
		onError(err) {
			console.log(err);
			return null;
		},
	});

	const handleFirstImport = () => {
		// e.preventDefault();
		import_property_report_batch({
			variables: {
				input: {
					batch_data: finalData,
				},
			},
		});
	};

	const handleSecondImport = (vipId: string) => {
		process_batch_report_record({
			variables: {
				vip_import_id: vipId,
			},
		});
	};

	// const handleOpenDialog = (e: any) => {
	// 	// Note that the ref is set async, so it might be null at some point
	// 	if (buttonRef.current) {
	// 		buttonRef.current.open(e);
	// 	}
	// };

	return (
		<>
			<Box
				display="flex"
				flexDirection="column"
				m="auto"
				height="100%"
				width="100%"
				justifyContent="center"
				alignContent="center"
			>
				{processData ? (
					<UploadStatus
						borderColor="#00B07B"
						icon={<UploadSuccess className={classes.icon} />}
						children={
							<Box color="#00B07B" fontWeight={500} fontSize={16}>
								AMP has finished processing the uploaded file
							</Box>
						}
					/>
				) : (
					""
				)}

				{importError || processError ? (
					<UploadStatus
						borderColor="#B00020"
						icon={<UploadFailure className={classes.icon} />}
						children={
							<Box color="#B00020" fontWeight={500} fontSize={16}>
								AMP could not process the uploaded file as it was not formatted
								properly.
							</Box>
						}
					/>
				) : (
					""
				)}

				<Box
					width="50%"
					height="350px"
					bgcolor="background.default"
					mx="auto"
					border={1}
					borderColor="#C6CACC"
					display="flex"
					flexDirection="column"
					borderRadius="4px"
				>
					<Box
						width="50%"
						height="35%"
						marginY="auto"
						marginX="auto"
						display="flex"
						justifyContent="center"
						alignContent="center"
					>
						<CSVReader
							onDrop={handleOnDrop}
							onError={handleOnError}
							addRemoveButton
							config={{
								header: true,
							}}
							onRemoveFile={handleOnRemoveFile}
							style={{
								dropArea: {
									borderColor: "transparent",
									padding: 0,
									height: "fit-content",
								},
							}}
						>
							{/* {(file: any) => {
								file && console.log(file.name);
								return ( */}
							<>
								<Box
									color="#6D6D6D"
									fontSize={toggle ? 16 : 18}
									fontWeight={500}
									bgcolor="#F2F2F2"
									width="100%"
									height="100%"
									textAlign="center"
									display="flex"
									justifyContent="center"
									alignContent="center"
									py={3}
									paddingX={4}
									border={1}
									borderRadius="4px"
									borderColor="#109CF1"
									// onClick={handleOpenDialog}
									// ref={buttonRef}
								>
									Drag and drop your file here or browse your computer.
								</Box>
							</>
							{/* );
							}} */}
						</CSVReader>
					</Box>
					<Box fontSize={14} textAlign="center" fontWeight={500} mb={6}>
						Accepted file format is only CSV, XLS, XLSX
					</Box>
				</Box>
				{loading || processLoading ? (
					<Box width="50%" marginX="auto">
						<LinearProgress />
					</Box>
				) : (
					""
				)}
				{loading || processLoading ? (
					<Box textAlign="center" fontSize={16} fontWeight={500} pt={5}>
						We are processing the file. It may take up to a couple of hours. We
						will notify you when it's done via the website and email.
					</Box>
				) : (
					""
				)}
			</Box>
		</>
	);
};
export default UploadData;
