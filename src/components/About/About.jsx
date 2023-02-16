import React from 'react'
import AboutImage from "../../assets/SideOne-min.jpeg"

const About = () => {
  return (
		<section id="about">
			<div className="relative bg-white py-16 sm:py-24">
				<div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-cols-2 lg:items-start lg:gap-24 lg:px-8">
					<div className="relative sm:py-16 lg:py-0">
						{/* SIDE IMAGE */}
						<div className="relative hidden sm:block mx-auto max-w-md px-6 sm:max-w-3xl lg:max-w-none lg:px-0 lg:py-20">
							<div className="relative overflow-hidden aspect-w-16  aspect-h-16 rounded-2xl pt-64 pb-10 shadow-xl">
								<img
									className="absolute inset-0 h-full w-full object-cover"
									src={AboutImage}
									alt="AboutImage"
								/>
								
							</div>
						</div>
                  </div>
                  

					<div className="relative mx-auto max-w-md px-6 sm:max-w-3xl lg:px-0">
						{/* Content area */}
						<div className="pt-12 sm:pt-16 lg:pt-20">
							<h2 className="text-xl  font-bold  font-Poppins  tracking-tight text-gray-900 sm:text-4xl">
								About Aquamet Technologies
							</h2>

							<div className="mt-6  space-y-6 text-gray-600">
								
								<p className="text-sm font-Poppins leading-6 ">
									Our mission is to empower fish farmers in Ghana with the
									needed technology to accelerate their production to meet the
									national fish requirement and also bridge the country’s fish
									deficit. Ghana imports about $280M worth of fish annually as
									the fish deficit gap stands at 68%. Marine catches have over
									the last two decades reduced drastically even though the
									government has over the years implemented key strategies such
									as the close season to revamp the marine stock. Local
									producers or farmers who are predominantly engaged in the
									culture of tilapia and catfish are unable to produce to a
									scale that meets the local demand. They lack necessary
									production tools and technologies and access to key input
									subsidies to boost and make their production sustainable. The
									aquaculture sector in Ghana is believed to have the highest
									rate of attrition due to these aforementioned challenges.
									Aquamet is developing technologies that are geared towards
									increasing average fish yield by 50%, increasing smallholder
									farmers revenue and improving the food security in the
									country.
								</p>
							</div>
                      </div>
                      {/* SHOWING ON  SMALL DEVICE  */}
						<div className="relative mt-5 sm:hidden mx-auto max-w-md px-6 sm:max-w-3xl lg:max-w-none lg:px-0 lg:py-20">
							<div className="relative overflow-hidden aspect-w-16  aspect-h-16 rounded-2xl pt-64 pb-10 shadow-xl">
								<img
									className="absolute inset-0 h-full w-full object-cover"
									src={AboutImage}
									alt="AboutImage"
								/>
								
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default About
