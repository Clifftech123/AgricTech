import React from "react";
const people = [
	{
		name: "Ali Morshedlou",
		role: "Chief Executive Officer [CEO]",
		imageUrl:
			"https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
		bio: "Ali Morshedlou is an experienced aquaculturist, who has been working in the aquaculture industry over the years. He has first-hand and practical experience in catfish, tilapia and aquaponic productions and also a volunteer at the Chamber of Aquaculture Ghana. he drives the vision of the company and is an ardent project manager.",
	},
	{
		name: "Alex Robinson",
		role: "Chief Marketing Officer [CMO]",
		imageUrl:
			"https://images.unsplash.com/photo-1524538198441-241ff79d153b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
		bio: "Alex Robinson has a background in agriculture economics with experience in agricultural produce marketing and farmer relationships.",
	},
	{
		name: "Victoria Heath",
		role: "Chief Technology Officer [CTO]",
		imageUrl:
			"https://images.unsplash.com/photo-1521510895919-46920266ddb3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
		bio: "Victoria Heath is the head of the technical development team and has experience in hardware development and management.",
	},
];

export default function Teams() {
	return (
		<div className="bg-white" id="team">
			<div className="mx-auto max-w-7xl py-12 px-6 lg:px-8 lg:py-24">
				<div className="space-y-12 lg:grid lg:grid-cols-3 lg:gap-8 lg:space-y-0">
					{/* Heading Text */}
					<div className="space-y-5 sm:space-y-4">
						<h2 className="text-2xl text-gray-500 font-bold tracking-tight sm:text-3xl font-Poppins">
							OUR EXECUTIVE TEAM
						</h2>
					</div>
					<div className="lg:col-span-2">
						<ul className="space-y-12 sm:-mt-8 sm:space-y-0 sm:divide-y sm:divide-gray-200 lg:gap-x-8 lg:space-y-0">
							{people.map((person) => (
								<li key={person.name} className="sm:py-8 font-Poppins">
									<div className="space-y-4 sm:grid sm:grid-cols-3 sm:items-start sm:gap-6 sm:space-y-0">
										<div className="aspect-w-5 aspect-h-5 sm:aspect-w-3 sm:aspect-h-4">
											<img
												className="object-cover   rounded-[3rem] object-center shadow-lg"
												src={person.imageUrl}
												alt="Person"
											/>
										</div>
										<div className="sm:col-span-2">
											<div className="space-y-4">
												<div className="space-y-1 text-xl leading-6 font-Poppins font-medium">
													<h3>{person.name}</h3>
													<p className="text-indigo-600">{person.role}</p>
												</div>
												{/* PERSON BIO TEXT */}
												<div className="text-sm">
													<p className="text-gray-500 leading-relaxed">
														{person.bio}
													</p>
												</div>
											</div>
										</div>
									</div>
								</li>
							))}
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
}
