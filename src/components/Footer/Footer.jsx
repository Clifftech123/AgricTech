

import { AiFillLinkedin, } from "react-icons/ai";
import LocationIMage from "../../assets/Location.png";







const Footer = () => {

const Linkedin = "https://www.linkedin.com/company/aquamet-technologies/";


  return (
		<>
			{/* CONTACT SECTION  */}
			<div className="relative bg-white py-16 sm:py-24" id="contact">
				<div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-cols-2 lg:items-start lg:gap-5 lg:px-8">
					<div className="relative sm:py-16 lg:py-0">
						{/* SIDE IMAGE */}
						<div className="relative hidden sm:block mx-auto max-w-md px-6 sm:max-w-3xl lg:max-w-none lg:px-0 lg:py-20">
							<div className="relative overflow-hidden aspect-w-16  aspect-h-16 rounded-2xl pt-64 pb-10 shadow-xl">
								<img
									className="absolute inset-0 h-full w-full object-cover"
									src={LocationIMage}
									alt="AboutImage"
								/>
								
							</div>
						</div>
					</div>

					<div className="relative mx-auto max-w-md px-6 sm:max-w-3xl lg:px-0">
						{/* Content area */}
						<div className="pt-12 text-center mb-5 sm:mb-0  sm:pt-16 lg:pt-20">
							<h2 className="text-xl  font-bold  font-Poppins  tracking-tight text-gray-900 sm:text-4xl">
								CONTACT
							</h2>

							<div className="mt-6  space-y-6  text-SecondaryColor">
								<p className="text-md font-Poppins leading-6">
									House number 6, West-hills <br />
									Behind West-hills Mall <br />
									Weija-Accra. CS167291022
									<br />
									<br />
									Email : aquamettechnologies@gmail.com
									<br />
									Mobile: 0542569023/0546200481
								</p>
							</div>
						</div>
						<div className="relative sm:hidden mx-auto max-w-md px-6 sm:max-w-3xl lg:max-w-none lg:px-0 lg:py-20">
							<div className="relative overflow-hidden aspect-w-16  aspect-h-16 rounded-2xl pt-64 pb-10 shadow-xl">
								<img
									className="absolute inset-0 h-full w-full object-cover"
									src={LocationIMage}
									alt="AboutImage"
								/>
								
							</div>
						</div>
					</div>
				</div>
			</div>

			<footer className=" bg-gradient-to-t  from-SecondaryColor to-PrimaryColor mt-0">
				<div className="container px-6 py-12 mx-auto">
					<div className="grid grid-cols-1  sm:gap-y-10 lg:grid-cols-2"></div>

					{/* SOCIAL IONS */}
					<div className="flex items-center justify-center">
						{/* Logo */}
						<div className="flex  ">
							{/* Linkedin */}
							<a
								href={Linkedin}
								class="mx-2 text-lg  text-white transition-colors  hover:text-blue-500 duration-300 "
								aria-label="Reddit"
								target={"_blank"}
								rel="noreferrer"
							>
								<AiFillLinkedin className="w-8 h-8 fill-current" />
							</a>
						</div>
					</div>

					{/* COPYWRITERS  */}
					<div className="flex items-center justify- mt-6">
						<div className="w-full text-center text-white">
							<p className="text-sm">
								Copyright © {new Date().getFullYear()} AquametTechnologies
							</p>
						</div>
					</div>
				</div>
			</footer>
		</>
	);
}

export default Footer

