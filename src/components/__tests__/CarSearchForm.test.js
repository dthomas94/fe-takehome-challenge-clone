import React from "react";
import { render } from "@testing-library/react";
import CarSearchForm from "../CarSearchForm";
import axios from "axios";
import { BASE_URL } from "../../Services/vehicle/http";

jest.mock("axios");

describe("CarSearchForm", () => {
	test("initially gets years and populates the select", () => {
		const { getByTestId } = render(<CarSearchForm setVehicle={jest.fn()} />);

		const yearSelector = getByTestId("select-year");
		expect(yearSelector).toBeTruthy();

		const endpoint = `/vehicles/years`;
		expect(axios.get).toHaveBeenCalledTimes(1);
		expect(axios.get).toHaveBeenCalledWith(endpoint, {
			baseURL: `${BASE_URL}`,
			responseType: "json",
		});
	});
	/*test("gets makes when year changes", async () => {
		const { getByTestId } = render(<CarSearchForm setVehicle={jest.fn()} />);

		const yearSelector = getByTestId("select-year");
		expect(yearSelector).toBeTruthy();

		fireEvent.change(yearSelector, { target: { value: 2019 } });

		// assert value
		expect(yearSelector.value).toBe("2019");

		axios.get.mockResolvedValueOnce(() => ({
			data: [
				{
					label: "Acura",
					value: "Acura",
				},
			],
		}));

		const endpoint = `/vehicles/makes`;
		expect(axios.get).toHaveBeenCalledTimes(1);
		expect(axios.get).toHaveBeenCalledWith(endpoint, {
			params: { year: "2019" },
			baseURL: `${BASE_URL}`,
			responseType: "json",
		});
	});*/
});
