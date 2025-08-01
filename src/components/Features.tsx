import React from "react";
import DetailCard from "./DetailCard";
import icon from "../assets/images/hospital.png";
import stetho from "../assets/images/stethoscope (3).png";
import Button from "./Button";

const Features = () => {
	return (
		<div className="relative bg-blue-100 mb-6 px-4 py-10 overflow-hidden text-enter text-white pb">
			<DetailCard
				heading="Features"
				title="our speciality"
				styles="pb-8 text-center"
			/>
			<div className="sm:relative flex flex-col flex-none justify-between space-y-6 bg-blue-500 mx-auto px-9 py-8 rounded-4xl md:max-w-xl lg:max-w-2xl font-[Montserrat]">
				<div className="flex justify- items-center space-x-4">
					<img src={icon} alt="" className="w-12" />
					<h3 className="md:w-2/3 font-bold break-words">Online Appointment</h3>
				</div>
				<p className="max-w-3xs text-justify">
					Lorem Ipsum is simply dummy text of the printing and typesetting
					industry.
				</p>
				<Button
					title="Learn more"
					addStyle="!text-base font-[Montserrat] amdow bg-white !text-blue-500 !sm:w-fit"
				/>
				<div className="top-18 md:top-0 -right-8 -z-0 absolute sm:w-1/2 sm:h-1/2">
					<img src={stetho} alt="" className="mx-auto h-36 sm:scale-200" />
				</div>
			</div>
		</div>
	);
};

export default Features;
