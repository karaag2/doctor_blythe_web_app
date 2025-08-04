//

const Contac = () => {
	return (
		<section className="bg-white dark:bg-gray-900">
			<div className="mx-auto px-4 py-8 lg:py-16 max-w-screen-md">
				<h2 className="mb-4 font-extrabold text-gray-900 dark:text-white text-4xl text-center tracking-tight">
					Contact Us
				</h2>
				<p className="mb-8 lg:mb-16 font-light text-gray-500 dark:text-gray-400 sm:text-xl text-center">
					Got a technical issue? Want to send feedback about a beta feature?
					Need details about our Business plan? Let us know.
				</p>
				<form action="#" className="space-y-8">
					<div>
						<label
							htmlFor="email"
							className="block mb-2 font-medium text-gray-900 dark:text-gray-300 text-sm"
						>
							Your email
						</label>
						<input
							type="email"
							id="email"
							className="block bg-gray-50 dark:bg-gray-700 shadow-sm dark:shadow-sm-light p-2.5 border border-gray-300 focus:border-primary-500 dark:border-gray-600 dark:focus:border-primary-500 rounded-lg focus:ring-primary-500 dark:focus:ring-primary-500 w-full text-gray-900 dark:text-white text-sm dark:placeholder-gray-400"
							placeholder="name@flowbite.com"
							required
						/>
					</div>
					<div>
						<label
							htmlFor="subject"
							className="block mb-2 font-medium text-gray-900 dark:text-gray-300 text-sm"
						>
							Subject
						</label>
						<input
							type="text"
							id="subject"
							className="block bg-gray-50 dark:bg-gray-700 shadow-sm dark:shadow-sm-light p-3 border border-gray-300 focus:border-primary-500 dark:border-gray-600 dark:focus:border-primary-500 rounded-lg focus:ring-primary-500 dark:focus:ring-primary-500 w-full text-gray-900 dark:text-white text-sm dark:placeholder-gray-400"
							placeholder="Let us know how we can help you"
							required
						/>
					</div>
					<div className="sm:col-span-2">
						<label
							htmlFor="message"
							className="block mb-2 font-medium text-gray-900 dark:text-gray-400 text-sm"
						>
							Your message
						</label>
						<textarea
							id="message"
							rows={6}
							className="block bg-gray-50 dark:bg-gray-700 shadow-sm p-2.5 border border-gray-300 focus:border-primary-500 dark:border-gray-600 dark:focus:border-primary-500 rounded-lg focus:ring-primary-500 dark:focus:ring-primary-500 w-full text-gray-900 dark:text-white text-sm dark:placeholder-gray-400"
							placeholder="Leave a comment..."
						>
							{""}
						</textarea>
					</div>
					<button
						type="submit"
						className="bg-primary-700 hover:bg-primary-800 dark:bg-primary-600 dark:hover:bg-primary-700 px-5 py-3 rounded-lg focus:outline-none focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-800 sm:w-fit font-medium text-white text-sm text-center"
					>
						Send message
					</button>
				</form>
			</div>
		</section>
	);
};

export default Contac;
