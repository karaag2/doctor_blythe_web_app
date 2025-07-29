import React from "react";
import logo from "./assets/images/logo.svg";
import Hero from "./components/Hero";
import Pitch from "./components/Pitch"
import Infos from "./components/Infos";
import Services from "./components/Services";

export const App = () => {
	return (
		<>
			<Hero />
			<Pitch/>
			<Infos/>
			<Services/>
		</>
	);
};
