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
				"absolute flex items-center bg-white shadow-md px-3 py-1 rounded-full transition-transform duration-300",
				props.positionning,
				props.size,
				props.leftIcon ? "flex-row-reverse" : "",
			)}
		>
			<span className="font-semibold text-sm">{props.title}</span>
			<div className="bg-blue-300 mx-2 rounded-full">
				<img
					src={props.leftIcon || props.rightIcon || ""}
					alt=""
					className="rounded-full w-8 h-8 object-cover"
				/>
			</div>
		</div>
	);
};

export default ServicePill;
