import React from "react";
import medecins from "../assets/images/medecins-removebg-preview.png";
import healthIcon from "../assets/images/heart.svg";
import stetoscope from "../assets/images/stethoscope.png";
import TopBar from "./TopBar";
const Hero = () => {
	return (
		<div className="flex flex-col max-w-screen overflow-hidden">
			<TopBar />

			<div className="-top-22 -right-1/5 sm:left-4/9 md:left-1/2 lg:left-3/5 xl:left-3/4 relative bg-gradient-to-b from-blue-500 to-blue-200 pt-7 rounded-b-full w-fit overflow-hi rotate-45 xl:scale-120">
				<div className="rounded-b-full w-fit overflow-hidden">
					<div className="top-14 -right-8 relative h-fit -rotate-45">
						<img
							src={medecins}
							alt=""
							className="relative justify-center w-full h-full scale-75 amdow"
						/>
						<img
							src={healthIcon}
							alt=""
							className="top-[30%] right-1/6 absolute w-10 -translate-y-1/2"
						/>
					</div>
				</div>
				<img
					alt=""
					src={stetoscope}
					className="-bottom-1 left-1/4 absolute w-13 -rotate-45"
				/>
			</div>
			<div className="top-1/32 right-1/24 absolute bg-white hover:bg-blue-800 dark:bg-blue-600 dark:hover:bg-blue-700 me-2 mb-px px-5 py-2 rounded-xl focus:outline-none focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-800 font-[Montserrat] font-medium text-blue-500 text-xs xs:text-sm text-center cursor-pointer amdow -1">
				Rendez-vous
			</div>
		</div>
	);
};

export default Hero;
