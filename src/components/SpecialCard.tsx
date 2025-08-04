//
import { type ReactNode } from "react";

const InfoCard = (props: {
	title: string;
	icon: string;
	children: ReactNode;
}) => {
	return (
		<>
			<div className="flex flex-col flex-none space-y-6 bg-blue-500 mx-auto px-9 py-8 rounded-4xl w-60 font-[Montserrat] text-white">
				<div className="flex justify-between items-center space-x-4">
					<h3 className="w-1/2 font-bold break-words">{props.title}</h3>
					<img src={props.icon} alt="" className="w-12" />
				</div>
				<div>{""}</div>
				{props.children}
			</div>
			<div>{""}</div>
		</>
	);
};

export default InfoCard;
