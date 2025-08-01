import React from "react";
import DetailCard from "./DetailCard";
import calendar from "../assets/images/calendar.png";

const Schedule = () => {
	return (
		<div className="bg-white mx-auto my-8 py-8">
			<div className="relative mx-auto max-w-3xl">
				<DetailCard
					heading="time table"
					title="appointment schedules"
					detail="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
					isbutton
					buttontitle="Schedules"
					styles="sm:no-liquid-glass sm:w-1/2 liquid-glass sm:space-x-4"
				/>
				<img
					src={calendar}
					alt=""
					className="top-1/12 sm:right-0 absolute mx-auto h-4/5 md:scale-125 liquid-glass-break"
				/>
			</div>
		</div>
	);
	//"max-w-xs max-sm:liquid-glass"
};

export default Schedule;
