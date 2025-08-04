//
import DetailCard from "./DetailCard";
import DoctorCard from "./DoctorCard";
import Button from "./Button";

const DoctorList = () => {
	return (
		<div className="bg-blue-100 py-8 text-center">
			<DetailCard heading="team" title="our doctors" />
			<div className="flex space-x-6 px-4 py-8 overflow-x-scroll scrollbar-hide">
				<DoctorCard name="Mamman Bo" speciality="Chirgueon" />
				<DoctorCard name="Mamman Bo" speciality="Chirgueon" />
				<DoctorCard name="Mamman Bo" speciality="Chirgueon" />
				<DoctorCard name="Mamman Bo" speciality="Chirgueon" />
			</div>
			<div className="mx-auto px-12 max-w-sm">
				<Button title="See-All" addStyle="w-full" />
			</div>
		</div>
	);
};

export default DoctorList;
