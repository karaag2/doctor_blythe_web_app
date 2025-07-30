import clsx from "clsx";

const Button = (props: { title: string; addStyle?: string }) => {
	return (
		<button
			type="button"
			className={clsx(
				"bg-blue-500 hover:bg-blue-300 me-2 mb-2 px-5 py-2 rounded-full focus:outline-none focus:ring-4 focus:ring-blue-300 font-[Montserrat] font-medium text-white text-sm !text-base text-center amdow",
				props.addStyle,
			)}
		>
			{props.title}
		</button>
	);
};
//"font-black text-md font-thin"
export default Button;
