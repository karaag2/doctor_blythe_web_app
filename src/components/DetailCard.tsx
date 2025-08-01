import React from "react";
import Button from "./Button";
import clsx from "clsx";

const DetailCard = (props: {
	heading?: string;
	title?: string;
	detail?: string;
	buttontitle?: string;
	isbutton?: boolean;
	styles?: string;
	special?: boolean;
}) => {
	const onbutton = props.isbutton ? props.isbutton : false;
	return (
		<div
			className={clsx(
				"z-10 relative space-y-6 px-10 font-[Montserrat]",
				props.styles,
			)}
		>
			<div className="space-y-1">
				<h1 className="font-bold text-blue-300 text-xs uppercase">
					{props.heading}
				</h1>
				<h2
					className={clsx(
						"font-bold text-black text-2xl sm:text-4xl capitalize",
						props.special ? "!text-4xl" : "",
					)}
				>
					{props.title}
				</h2>
			</div>
			<div>
				<p className="">{props.detail}</p>
			</div>
			{onbutton && (
				<Button
					title={props.buttontitle ? props.buttontitle : ""}
					addStyle="w-full sm:w-auto"
				/>
			)}
		</div>
	);
};

export default DetailCard;
