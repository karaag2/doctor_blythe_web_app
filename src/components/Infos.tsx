import React from "react";
import InfoCard from "./InfoCard";
import scheldule from "../assets/images/schedule (1).png";
import doctor from "../assets/images/doctor (2).png";
import timer from "../assets/images/timer.png";
import location from "../assets/images/map (2).png";
import SpecialCard from "./SpecialCard";
const Infos = () => {
	return (
		<div className="flex space-x-12 bg-blue-200 my-8 px-12 py-6 w-full overflow-scroll scrollbar-hide">
			<SpecialCard title="Opening Hours" icon={timer}>
				<div>
					<p className="opacity-85 text-xs">monday - friday</p>
					<p>9:00AM - 12:00PM</p>
				</div>{" "}
				<div>
					<p className="opacity-85 text-xs">Adresse</p>
					<p>9 rue du Faubourg-Poissonnière</p>
				</div>
			</SpecialCard>
			<InfoCard title="Appointment" icon={scheldule}>
				Lorem Ipsum is simply dummy text of the printing and typesetting
				industry.
			</InfoCard>
			<InfoCard title="Find Doctors" icon={doctor}>
				Lorem Ipsum is simply dummy text of the printing and typesetting
				industry.
			</InfoCard>
			<InfoCard title="Find Locations" icon={location}>
				Lorem Ipsum is simply dummy text of the printing and typesetting
				industry.
			</InfoCard>
		</div>
	);
};

export default Infos;
