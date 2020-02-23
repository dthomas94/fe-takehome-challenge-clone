import axios from "axios";

export const BASE_URL = "https://api.clearcoverpartner.com/api/v2";
const BASE_AXIOS_CONFIG = {
	responseType: "json" as const,
	baseURL: BASE_URL,
};

export type CCAPI$ResponseType = Array<{
	value: string;
	label: string;
}>;

export const getYears = async () => {
	try {
		const { data } = await axios.get<CCAPI$ResponseType>(
			"/vehicles/years",
			BASE_AXIOS_CONFIG
    );
		return data;
	} catch (error) {
    console.error(error);
	}
};

export const getMakesByYear = async (year: string) => {
	try {
		const { data } = await axios.get<CCAPI$ResponseType>("/vehicles/makes", {
			params: { year },
			...BASE_AXIOS_CONFIG,
		});
		return data;
	} catch (error) {
		console.error(error);
	}
};

export const getModelsByMakeYear = async (year: string, make: string) => {
	try {
		const { data } = await axios.get<CCAPI$ResponseType>("/vehicles/models", {
			params: { year, make },
			...BASE_AXIOS_CONFIG,
		});
		return data;
	} catch (error) {
		console.error(error);
	}
};

export const getBodyStylesByModelYearMake = async (
	year: string,
	make: string,
	model: string
) => {
	try {
		const { data } = await axios.get<CCAPI$ResponseType>(
			"/vehicles/body_styles",
			{
				params: { year, make, model },
				...BASE_AXIOS_CONFIG,
			}
		);
		return data.map(({ label, value }) => ({ label, value }));
	} catch (error) {
		console.error(error);
	}
};

export type CCAPI$VehicleResponseType = {
  under_2500: boolean;
	id: string;
	year: string;
	make: string;
	model: string;
	body_style: string;
	partial_vin: string;
	vehicle_services_id: string;
};

export const getVehicle = async (
	year: string,
	make: string,
	model: string,
	bodyStyle: string
) => {
	try {
		const { data } = await axios.get<CCAPI$VehicleResponseType>("/vehicles", {
			params: { year, make, model, body_style: bodyStyle },
			...BASE_AXIOS_CONFIG,
		});
		return data;
	} catch (error) {
		console.error(error);
	}
};
