import React from "react";
import { type ReactNode } from "react";
import Button from "./Button";

const InfoCard = (props: {
	title: string;
	icon: string;
	children: ReactNode;
}) => {
	return (
		<>

			<div className="flex flex-col flex-none justify-between space-y-6 bg-zinc-50 mx-auto px-9 py-8 rounded-4xl w-60 font-[Montserrat]">
				<div className="flex justify-between items-center space-x-4">
					<h3 className="w-1/2 font-bold break-words">
						{props.title}
					</h3>
					<img src={props.icon} alt="" className="w-12" />
				</div>
				<p className="">{props.children}</p>
				<Button title="Bloquer" addStyle="!text-base font-[Montserrat] amdow" />
			</div>
			<div>

			</div>
		</>
	);
};

export default InfoCard;
