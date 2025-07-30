import React from "react";
import DetailCard from "./DetailCard";
import icon from "../assets/images/hospital.png";
import stetho from "../assets/images/stethoscope (3).png";
import Button from "./Button";

const Features = () => {
	return (
		<div className="relative bg-blue-100 mb-6 px-4 py-7 pb-12 overflow-hidden text-white text-center">
			<DetailCard heading="Features" title="our speciality" />
			<div className="flex flex-col flex-none justify-between space-y-6 bg-blue-500 mx-auto px-9 py-8 rounded-4xl font-[Montserrat]">
				<div className="flex flex-row-reverse justify-between items-center space-x-4">
					<h3 className="w-2/3 font-bold break-words">Online Appointment</h3>
					<img src={icon} alt="" className="w-12" />
				</div>
				<p className="text-justify">
					Lorem Ipsum is simply dummy text of the printing and typesetting
					industry.
				</p>
				<Button
					title="Learn more"
					addStyle="!text-base font-[Montserrat] amdow bg-white !text-blue-500"
				/>
			</div>
			<div className="top-18 -right-8 -z-0 absolute">
				<img src={stetho} alt="" className="h-36" />
			</div>
		</div>
	);
};

export default Features;
