import React from "react";
import Button from "./Button";

const DetailCard = (props: {
	heading?: string;
	title?: string;
	detail?: string;
	buttontitle?: string;
}) => {
	return (
		<div className="relative space-y-6 px-10 font-[Montserrat]">
			<div className="space-y-1">
				<h1 className="font-bold text-blue-300 text-xs uppercase">
					{props.heading}
				</h1>
				<h2 className="font-bold text-2xl sm:text-4xl capitalize">{props.title}</h2>
			</div>
			<div>
				<p className="">{props.detail}</p>
			</div>
			<Button title={props.buttontitle} addStyle="w-full sm:w-auto" />
		</div>
	);
};

export default DetailCard;
