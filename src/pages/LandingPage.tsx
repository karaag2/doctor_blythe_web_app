import React from "react";
import Hero from "../components/Hero";
import Pitch from "../components/Pitch";
import Infos from "../components/Infos";
import Services from "../components/Services";
import Features from "../components/Features";
import Schedule from "../components/Schedule";
import DoctorList from "../components/DoctorList";
import Contac from "../components/Contac";

const LandingPage = () => {
	return (
		<div className="mx-auto max-w-[96rem]">
			<Hero />
			<Infos />
			<Services />
			<Features />
			<Schedule />
			<DoctorList />
			<Contac />
		</div>
	);
};

export default LandingPage;
