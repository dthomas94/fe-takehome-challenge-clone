import React, { FC } from "react";
import { CCAPI$VehicleResponseType } from "../Services/vehicle/http";
import { Car } from "grommet-icons";
import { Box, Text } from "grommet";

const VehicleCard: FC<{ vehicle: CCAPI$VehicleResponseType }> = ({
	vehicle,
}) => {
	const {
		year,
		make,
		model,
		body_style,
		partial_vin,
		vehicle_services_id,
	} = vehicle;
	return (
		<Box
			align="center"
			border={{
				color: "dark-3",
			}}
			round
			gap="small"
			width="medium"
			pad="small"
			style={{
				overflowWrap: "break-word",
			}}
			margin={{ top: "small" }}
			data-testid="vehicle-card"
		>
			<Car size="large" color="light-2" />
			<Text data-testid="vehicle-base-details">
				{year} {make} {model} ({body_style})
			</Text>
			<Text data-testid="vehicle-vin">Vin: {partial_vin}</Text>
			<Box>
				<Text data-testid="vehicle-vsi" size="small">
					Vehicle Services Id: {vehicle_services_id}
				</Text>
			</Box>
		</Box>
	);
};

export default VehicleCard;
