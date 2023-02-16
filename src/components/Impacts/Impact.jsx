import React from "react";
import FirstIMpactIMage from "../../assets/SlideTwo.jpeg";
import SecondIMpactIMage from "../../assets/SecondimpactImage.jpg";
import SDGs from "../../assets/SDGS1.jpeg";
import SDGsTwo from "../../assets/SDGS2.jpeg";
import SDGsThree from "../../assets/SDGS3.jpeg";
import SDGsFour from "../../assets/SDGS4.jpeg";
import SDGsFive from "../../assets/SDG5.jpeg";

const Impact = () => {
	return (
		<>
			<div id="impact">
				<section className="bg-gray-50 shadow-md border-t border-gray-200">
					<div className="max-w-xl p-6 py-12  space-y-24 lg:px-8 lg:max-w-full">
						<div>
							{/* ======= HEADING ====  */}
							<h2 className="text-3xl text-center font-bold tracking-tight text-gray-700 sm:text-5xl  font-Poppins">
								Impacts
							</h2>
							<p className="max-w-3xl mx-auto mt-4 text-lg text-center text-gray-600  font-Poppins ">
								The following are some developments of Aquamet Technologie
							</p>
						</div>
						{/*  IMPACT TEXT */}
						<div className="grid lg:gap-8 lg:grid-cols-2 lg:items-center">
							<div>
								<div className=" space-y-20">
									<div className="flex">
										<div className="flex-shrink-0"></div>
										<div className="ml-4">
											<h4 className=" text-2xl sm:text-3xl font-Poppins font-semibold text-SecondaryColor  leading-6 ">
												Increment
											</h4>
											<hr className=" mt-5  h-2 flex items-center justify-center  rounded-full -ml-3.5 border-SecondaryColor border-r w-full " />
											<p className="mt-2 text-gray-700  font-Poppins text-sm ">
												Increase fish farmers yield by 50% thereby improving
												their income and standard of living.
											</p>
										</div>
									</div>
									<div className="flex">
										<div className="flex-shrink-0"></div>
										<div className="ml-4">
											<h4 className=" text-2xl sm:text-3xl font-Poppins font-semibold leading-6   text-SecondaryColor ">
												Employment
											</h4>
											<hr className=" mt-5  h-2 flex items-center justify-center  rounded-full -ml-3.5 border-SecondaryColor border-r w-full " />
											<p className="mt-2 tracking-wide text-gray-700   text-sm font-Poppins">
												Providing rightful employment to the youths in the
												aquaculture by taking up direct fish production without
												fear of loosing income as a result of aided technology
												to assist them.
											</p>
										</div>
									</div>

									<div className="flex">
										<div className="flex-shrink-0"></div>
										<div className="ml-4">
											<h4 className="text-2xl sm:text-3xl font-semibold  tracking-wide   text-SecondaryColor font-Poppins   leading-6">
												Nutrition
											</h4>
											<hr className=" mt-5  h-2 flex items-center justify-center  rounded-full -ml-3.5 border-SecondaryColor border-r w-full " />
											<p className="mt-2  font-Poppins  tracking-wide text-sm  text-gray-700">
												Reduce the Ghana fish deficit gap and improve nutrition
												in the country.
											</p>
										</div>
									</div>
								</div>
								{/*  ===== Second impact  image ====== */}
								<div aria-hidden="true" className="mt-10  hidden lg:block ">
									<img
										src="https://images.unsplash.com/photo-1543269865-cbf427effbad?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
										alt=""
										className="mx-auto g:mt-0 rounded-lg shadow-lg "
									/>
								</div>
							</div>
							{/*  ====== Second impact image =====  */}
							<div aria-hidden="true" className="mt-10 lg:mt-0 ">
								<img
									src="https://images.unsplash.com/photo-1559884743-74a57598c6c7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1476&q=80"
									alt=""
									className="mx-auto rounded-lg shadow-lg "
								/>
							</div>

							{/* Second  image on small Device  */}
							<div aria-hidden="true" className="mt-10  lg:hidden ">
								<img
									src="https://images.unsplash.com/photo-1543269865-cbf427effbad?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
									alt=""
									className="mx-auto g:mt-0 rounded-lg shadow-lg "
								/>
							</div>
						</div>
					</div>
				</section>

				<section>
					<div className="bg-white">
						<div className="mx-auto max-w-7xl py-16 px-6 sm:py-20 lg:px-8">
							<h2 className="text-3xl font-Poppins tracking-wider font-bold  text-SecondaryColor">
								CLIMATE IMPACTS
							</h2>
							<p className="text-gray-500  text-sm font-Poppins mt-2">
								Fish mortalities contributes to the 10% of the total greenhouse
								emissions predominantly methane gas. By helping farmers to
								reduce the volume of fishes that die during production, we will
								be contributing to reduce the net emission.
							</p>
							<hr className="mt-5" />
							<div className="mt-8 flow-root lg:mt-10">
								<div className="-mt-4 -ml-8 flex flex-wrap justify-between lg:-ml-4">
									<div className="mt-4 ml-8 flex flex-shrink-0 flex-grow lg:ml-4 lg:flex-grow-0">
										<img className="h-12" src={SDGs} alt="SDGs " />
									</div>
									<div className="mt-4 ml-8 flex flex-shrink-0 flex-grow lg:ml-4 lg:flex-grow-0">
										<img className="h-12" src={SDGsTwo} alt="SDGsTwo" />
									</div>
									<div className="mt-4 ml-8 flex flex-shrink-0 flex-grow lg:ml-4 lg:flex-grow-0">
										<img className="h-12" src={SDGsThree} alt="SDGsThree " />
									</div>
									<div className="mt-4 ml-8 flex flex-shrink-0 flex-grow lg:ml-4 lg:flex-grow-0">
										<img className="h-12" src={SDGsFour} alt="SDGsFour " />
									</div>
									<div className="mt-4 ml-8 flex flex-shrink-0 flex-grow lg:ml-4 lg:flex-grow-0">
										<img className="h-12" src={SDGsFive} alt="SDGsFour " />
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
			</div>
		</>
	);
};

export default Impact;
