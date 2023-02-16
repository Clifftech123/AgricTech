

import ProductImage from "../.././assets/PhoneHero.jpg"
import { features } from './features'




 const  ProductServices = () => {
	return (
		<section className="mx- my-90" id="ProductAndServices">
			{/* MAIN */}
			<div className="bg-gray-20 border-t-gray-50 shadow-2xl py-20 ">
				{/* PRODUCT AND SERVICE IMAGE  */}
				<div aria-hidden="true" className="relative">
					<img
						src={ProductImage}
						alt=""
						className="h-screen w-full object-cover object-center"
					/>
					<div className="absolute inset-0 bg-gradient-to-t from-gray-50" />
				</div>
				{/* MAIN CONTENT  */}
				<div className="relative mx-auto -mt-12 max-w-7xl px-4 pb-16 sm:px-6 sm:pb-24 lg:px-8">
					{/* HEADING  */}
					<div className="mx-auto max-w-2xl text-center lg:max-w-4xl">
						<h2 className="text-3xl font-bold tracking-tight font-Poppins text-gray-600 sm:text-4xl">
							PRODUCT AND SERVICES
						</h2>
					</div>
					{/* PRODUCT SERVICES  OFFERED */}
					<dl className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:max-w-none lg:grid-cols-3 lg:gap-x-8">
						{features.map((feature) => (
							<>
								<div key={feature.title} className="   pt-4">
									
									
                                        <hr className=" mb-2 border-gray-300" />
									<dt className="font-bold text-gray-600  font-Poppins  border-SecondaryColor  ">
										{feature.title}
									</dt>
									<dd className="mt-2 text-sm text-gray-500  font-Poppins">
										{feature.description}
									</dd>
								</div>
							</>
						))}
					</dl>
				</div>
			</div>
		</section>
	);
}

export default ProductServices;
