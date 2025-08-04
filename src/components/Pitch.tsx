import DetailCard from "./DetailCard";

const Pitch = () => {
	return (
		<div className="sm:absolute">
			<div className="-top-24 sm:-top-[27rem] relative">
				<DetailCard
					heading="medical"
					title="healthcare solutions"
					detail="						Lorem Ipsum is simply dummy text of the printing and typesetting
industry. Lorem Ipsum has been the industry's standard dummy text
ever since the 1500s, when an unknown printer took a galley of type
and scrambled it to make a type specimen book."
					isbutton
					buttontitle="Find a doctor"
					special
					styles="sm:w-1/2 "
				/>
			</div>
		</div>
	);
};
// "sm:w-xl sm:top-0 sm:-top-1/2";

export default Pitch;
