import React from 'react'


// This component is responsible the list of board members
const people = [
	{
		name: "Prof. Irene S. Egyir  ",
		role: "Head of LinkedIn Sales Solutions",
		imageUrl:
			"https://images.unsplash.com/photo-1590650153855-d9e808231d41?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
	},

	{
		name: "Dr. Godfred Owusu Boateng.",
		role: "Senior Lecturer at the Department of Fisheries and Watershed Management. ",
		imageUrl:
			"https://images.unsplash.com/photo-1556157382-97eda2d62296?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
	},

	{
		name: "Mr. Michael K. Adonteng",
		role: "Senior Sales Director at Diligent, United Kingdom.",
		imageUrl:
			"https://images.unsplash.com/photo-1495603889488-42d1d66e5523?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80",
	},
];
const BoardMembers = () => {
  return (
		<>
			<div className="bg-white" id="partners">
				<div className="mx-auto max-w-7xl py-12 px-6 lg:px-8 lg:py-24">
					<div className="space-y-12">
						<div className="space-y-5 sm:space-y-4 md:max-w-xl lg:max-w-3xl xl:max-w-none">
							<h2 className="text-3xl font-bold text-center text-SecondaryColor font-Poppins tracking-tight sm:text-4xl">
								Our Board Members
							</h2>
						</div>
						<ul className="space-y-12 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 sm:space-y-0 lg:grid-cols-3 lg:gap-x-8">
							{people.map((person) => (
								<li key={person.name}>
									<div className="space-y-4 ">
										<div className="aspect-w-16  aspect-h-16">
											<img
												className="rounded-lg object-cover shadow-lg"
												src={person.imageUrl}
												alt=""
											/>
										</div>

										<div className="space-y-2">
											<div className="space-y-1 font-Poppins text-lg font-medium leading-6">
												<h3>{person.name}</h3>
												<p className="text-gray-500 text-sm italic font-Poppins">
													{person.role}
												</p>
											</div>
										</div>
									</div>
								</li>
							))}
						</ul>
					</div>
				</div>
			</div>
		</>
	);
}

export default BoardMembers

