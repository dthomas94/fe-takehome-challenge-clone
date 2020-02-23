import React, { FC } from "react";
import { CCAPI$VehicleResponseType } from "../Services/vehicle/http";
import { Car } from "grommet-icons";
import { Box, Text } from "grommet";

const VehicleCard: FC<{ vehicle: CCAPI$VehicleResponseType }> = ({
	vehicle,
}) => (
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
      overflowWrap: 'break-word'
    }}
    margin={{top: "small"}}
    data-testid="vehicle-card"
	>
		<Car size="large" color="light-2" />
		<Text>
			{vehicle.year} {vehicle.make} {vehicle.model} ({vehicle.body_style})
		</Text>
		<Text>Vin: {vehicle.partial_vin}</Text>
    <Box>
    <Text size="small">Vehicle Services Id: {vehicle.vehicle_services_id}</Text>
    </Box>
		
	</Box>
);

export default VehicleCard;
