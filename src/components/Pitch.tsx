import React from "react";
import Button from "./Button";

const Pitch = () => {
	return (
		<div className="relative space-y-6 px-10">
			<div className="-top-30 absolute space-y-6">
				<h1 className="font-[Montserrat] font-bold text-blue-300 text-xs uppercase">
					medical
				</h1>
				<h2 className="font-[Montserrat] font-bold text-4xl">
					Healthcare Solutions
				</h2>
			</div>
			<br />

			<div>
				<p className="">
					Lorem Ipsum is simply dummy text of the printing and typesetting
					industry. Lorem Ipsum has been the industry's standard dummy text ever
					since the 1500s, when an unknown printer took a galley of type and
					scrambled it to make a type specimen book.
				</p>
			</div>
			<Button title="Find a doctor" addStyle="w-full sm:w-auto" />
		</div>
	);
};

export default Pitch;
