import React from "react";
import DetailCard from "./DetailCard";
import calendar from "../assets/images/calendar.png";

const Schedule = () => {
	return (
		<div className="relative my-8 overflow-">
			<DetailCard
				heading="time table"
				title="appointment schedules"
				detail="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
				isbutton
				buttontitle="Schedules"
				styles="liquid-glass"
			/>
			<img
				src={calendar}
				alt=""
				className="top-1/12 absolute mx-auto h-4/5 liquid-glass-break"
			/>
		</div>
	);
};

export default Schedule;
