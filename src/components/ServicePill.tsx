import clsx from "clsx";
import React from "react";

const ServicePill = (props: {
	size?: string;
	leftIcon?: string;
	rightIcon?: string;
	positionning: string;
	title: string;
}) => {
	return (
		<div
			className={clsx(
				"absolute flex items-center bg-white py-1 rounded-full xs:w-96",
				props.positionning,
				props.size,
				props.leftIcon ? "flex-row-reverse pr-4 pl-1" : "pr-1 pl-4",
			)}
		>
			{props.title}
			{props.leftIcon ? (
				<div className="bg-blue-300 mx-2 rounded-full">
					<img src={props.leftIcon} alt="" className="rounded-full h-10" />
				</div>
			) : (
				<div className="bg-blue-300 mx-2 rounded-full">
					<img src={props.rightIcon} alt="" className="rounded-full h-10" />
				</div>
			)}
		</div>
	);
};

export default ServicePill;
