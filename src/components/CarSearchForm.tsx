import React, { FC, useEffect, useState } from "react";
import {
	getYears,
	getMakesByYear,
	getModelsByMakeYear,
	getBodyStylesByModelYearMake,
	getVehicle,
	CCAPI$VehicleResponseType,
} from "../Services/vehicle/http";
import { Box, Select } from "grommet";

const CarSearchForm: FC<{
	setVehicle: (vehicle?: CCAPI$VehicleResponseType) => void;
}> = ({ setVehicle }) => {
	const [filters, setFilters] = useState({
		year: "",
		make: "",
		model: "",
		bodyStyle: "",
	});
	const [years, setYears] = useState();
	const [makes, setMakes] = useState();
	const [models, setModels] = useState();
	const [bodyStyles, setBodyStyles] = useState();

	useEffect(() => {
		getYears().then(res => {
			setYears(res);
			setFilters({
				...filters,
				year: res[0].value.toString(),
			});
		});
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	useEffect(() => {
		if (filters.year) {
			getMakesByYear(`${filters.year}`).then(makes => {
				setMakes(makes);
			});
		}
	}, [filters.year]);

	useEffect(() => {
		const { year, make } = filters;
		if (make) {
			getModelsByMakeYear(`${year}`, make).then(models => {
				setModels(models);
			});
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [filters.make]);

	useEffect(() => {
		const { year, make, model } = filters;
		if (model) {
			getBodyStylesByModelYearMake(`${year}`, make, model).then(styles => {
				setBodyStyles(styles);
			});
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [filters.model]);

	useEffect(() => {
		const { year, make, model, bodyStyle } = filters;

		if (bodyStyle) {
			getVehicle(`${year}`, make, model, bodyStyle).then(res => {
				setVehicle(res);
			});
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [filters.bodyStyle]);

	return (
		<Box
			direction="row"
			justify="center"
			gap="xsmall"
			data-testid="car-search-form"
		>
			<Box>
				<label htmlFor="years">Year:</label>
				<Select
					placeholder="Select"
					name="years"
					options={years}
					labelKey="label"
					valueKey="value"
					value={filters.year}
					onChange={({ value: yearObj }) => {
						setFilters({
							year: yearObj.value.toString(),
							make: "",
							model: "",
							bodyStyle: "",
						});
					}}
				/>
			</Box>
			<Box>
				<label htmlFor="makes">Make:</label>
				<Select
					placeholder="Select"
					name="makes"
					options={makes}
					labelKey="label"
					valueKey="value"
					value={filters.make}
					onChange={({ value: makeObj }) => {
						setFilters({
							...filters,
							make: makeObj.value,
							model: "",
							bodyStyle: "",
						});
					}}
				/>
			</Box>
			<Box>
				<label htmlFor="models">Model:</label>
				<Select
					placeholder="Select"
					name="models"
					options={models}
					labelKey="label"
					valueKey="value"
					value={filters.model}
					onChange={({ value: modelObj }) =>
						setFilters({ ...filters, model: modelObj.value, bodyStyle: "" })
					}
				/>
			</Box>
			<Box>
				<label htmlFor="bodyStyles">Body:</label>
				<Select
					placeholder="Select"
					name="bodyStyles"
					options={bodyStyles}
					labelKey="label"
					valueKey="value"
					value={filters.bodyStyle}
					onChange={({ value: bodyStyleObj }) =>
						setFilters({ ...filters, bodyStyle: bodyStyleObj.value })
					}
				/>
			</Box>
		</Box>
	);
};

export default CarSearchForm;
