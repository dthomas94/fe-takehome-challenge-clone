import React, { FC, useState } from "react";
import logo from "./Shared/assets/logo.svg";
import "./App.css";
import CarSearchForm from "./components/CarSearchForm";
import VehicleCard from "./components/VehicleCard";
import { Box } from "grommet";

const App: FC = () => {
	const [vehicle, setVehicle] = useState();

	return (
		<Box className="App" background="#282c34" height="100vh">
			<Box align="center" justify="center" height="medium">
				<img src={logo} className="App-logo" alt="logo" />
				<p>Ready. Set. Build.</p>
			</Box>
			<Box align="center">
				<CarSearchForm setVehicle={setVehicle} />

				{
				// @ts-ignore
				vehicle && <VehicleCard vehicle={vehicle} />}
			</Box>
		</Box>
	);
};
export default App;
