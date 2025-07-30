import React from "react";
import logo from "./assets/images/logo.svg";
import Hero from "./components/Hero";
import Pitch from "./components/Pitch"
import Infos from "./components/Infos";
import Services from "./components/Services";
import Features from "./components/Features";
import Schedule from "./components/Schedule";
import DoctorList from "./components/DoctorList";
import Contac from "./components/Contac";

export const App = () => {
	return (
		<div className="">
		
			<Hero />
			<Pitch/>
			<Infos/>
			<Services/>
			<Features/>
			<Schedule/>
			<DoctorList/>
			<Contac/>
		</div>
	);
};
