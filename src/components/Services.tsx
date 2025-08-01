import React from "react";
import DetailCard from "./DetailCard";
import fort from "../assets/images/specialist.png";
import ServicePill from "./ServicePill";
import icon from "../assets/images/pharmacy.png";

const Services = () => {
	return (
		<div className="bg-white py-12 overflow-hidden font-[Montserrat]">
			<div className="space-y-2 text-center">
				<h1 className="font-bold text-blue-300 text-xs uppercase tracking-widest">
					service
				</h1>
				<h2 className="font-bold text-2xl sm:text-4xl capitalize">
					our medical services
				</h2>
			</div>
			<div className="relative flex sm:flex max-sm:flex-col justify-between sm:justify-between">
				<div className="mx-auto my-12 mb-12 w-full sm:w-2/5 max-w-3xl h-96 sm:-translate-x-10">
					<img src={fort} alt="Specialist" className="w-full h-auto ammdow" />

					<ServicePill
						title="Medecine"
						positionning="top-[60%] left-[5%] md:top-[55%] md:left-[10%]"
						size="scale-75 md:scale-100"
						rightIcon={icon}
					/>

					<ServicePill
						title="Medecine"
						positionning="top-[15%] left-[0%] md:top-[10%] md:left-[10%]"
						size="scale-50 md:scale-90"
						leftIcon={icon}
					/>

					<ServicePill
						title="Medecine"
						positionning="top-[30%] right-[0%] md:top-[25%] md:right-[10%]"
						size="scale-60 md:scale-90"
						rightIcon={icon}
					/>

					<ServicePill
						title="Medecine"
						positionning="bottom-[15%] right-[5%] md:bottom-[10%] md:right-[10%]"
						size="scale-70 md:scale-100"
						leftIcon={icon}
					/>

					<ServicePill
						title="Medecine"
						positionning="bottom-0 left-[0%] md:bottom-[5%] md:left-[10%]"
						size="scale-50 md:scale-85"
						leftIcon={icon}
					/>
				</div>
				<div className="sm:flex items-center px-4 sm:px-0 sm:max-w-2/5 md:max-w-1/2">
					<DetailCard
						title="Dental care service"
						detail="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s..."
						buttontitle="Learn More"
						isbutton
					/>
				</div>
			</div>
		</div>
	);
};

export default Services;
