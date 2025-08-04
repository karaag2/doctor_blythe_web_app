//
import doctor from "../assets/images/basdoctor.png";

const DoctorCard = (props: { name: string; speciality: string }) => {
	return (
		<>
			<div>{""}</div>
			<div className="z-200 flex flex-col flex-none space-y-8 bg-blue-500 p-4 rounded-3xl w-53">
				<div className="relative bg-white rounded-[40px] w-full h-32">
					<img
						src={doctor}
						alt=""
						className="bottom-0 left- absolute rounded-[40px] w-30"
					/>
				</div>
				<div>
					<h1 className="font-medium text-white text-lg">{props.name}</h1>
					<p className="text-zinc-200 text-sm">{props.speciality}</p>
				</div>
			</div>
		</>
	);
};

export default DoctorCard;
