import React from "react";
import { render } from "@testing-library/react";
import VehicleCard from "./VehicleCard";

describe("VehicleCard", () => {
	test("shows the vehicle details", () => {
		const vehicle = {
			year: 2019,
			make: "Subarua",
			model: "Legacy",
			body_style: "4dr Sedan",
			partial_vin: "WOEKGSDJROE",
			vehicle_services_id: "019RGOSGJW02=SODFKWPW09302",
		};
		const { getByTestId } = render(<VehicleCard vehicle={vehicle} />);

		expect(getByTestId("vehicle-base-details")).toHaveTextContent(
			`${vehicle.year} ${vehicle.make} ${vehicle.model} (${vehicle.body_style})`
		);

		expect(getByTestId("vehicle-vin")).toHaveTextContent(
			`Vin: ${vehicle.partial_vin}`
    );
    
    expect(getByTestId("vehicle-vsi")).toHaveTextContent(
			`Vehicle Services Id: ${vehicle.vehicle_services_id}`
		);
	});
});
