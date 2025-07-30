import React from "react";
import DetailCard from "./DetailCard";
import fort from "../assets/images/specialist.png";
import ServicePill from "./ServicePill";
import icon from "../assets/images/pharmacy.png";

const Services = () => {
	return (
		<div className="mb-8 py-12 overflow-hidden font-[Montserrat]">
			<div className="space-y-1 text-center">
				<h1 className="font-bold text-blue-300 text-xs uppercase">service</h1>
				<h2 className="font-bold text-2xl sm:text-4xl capitalize">
					our medical services
				</h2>
			</div>
			<div className="relative bg-blue-400 mx-12 my-4 rounded-full ammdow">
				<img src={fort} alt="" className="amdow" />
				<ServicePill
					title="Medecine"
					positionning="top-3/5 -left-1/6"
					size="scale-90"
					rightIcon={icon}
				/>
				<ServicePill
					title="Medecine"
					positionning="top-1/5 -left-1/5"
					size="scale-70"
					leftIcon={icon}
				/>
				<ServicePill
					title="Medecine"
					positionning="top-1/3 -right-1/5"
					size="scale-80"
					rightIcon={icon}
				/>
				<ServicePill
					title="Medecine"
					positionning="bottom-1/5 -right-1/5"
					size="scale-95"
					leftIcon={icon}
				/>
				<ServicePill
					title="Medecine"
					positionning="bottom-0 -left-1/5"
					size="scale-65"
					leftIcon={icon}
				/>
				<br />
			</div>
			<DetailCard
				title="Dental care service"
				detail="					Lorem Ipsum is simply dummy text of the printing and typesetting
industry. Lorem Ipsum has been the industry's standard dummy text ever
since the 1500s, when an unknown printer took a galley of type and
scrambled it to make a type specimen book."
				buttontitle="Learn More"
			/>
		</div>
	);
};

export default Services;
