import React from "react";

import LogoBlue from "../assets/images/logo-blue.svg";
import LogoWhite from "../assets/images/logo-white.svg";

const TopBar = () => {
	return (
		<div className="relative">
			<div className="-top-2 z-10 absolute w-full h-full">
				<img
					src={LogoBlue}
					alt="Logo"
					className="top-4 xs:top-0 left-4 xs:left-0 absolute h-16 xs:h-auto m"
				/>
				<p className="top-10 left-17 z-100 relative w-fit text-white text-2xl text">
					medCare
				</p>
			</div>
		</div>
	);
};

export default TopBar;
