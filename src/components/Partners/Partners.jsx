import React from 'react'
import uglogo from '../../assets/ug 1.png'
import ITo from '../../assets//IOT 1.png'
import Last from '../../assets//download 1.png'
import BoardMembers from './BoardMembers';


// THIS IS IMAGES 
const features = [
	{
		Image: uglogo,
		id: 1,
	},
	{
		Image: ITo,
		id: 2,
	},
	{
		Image: Last,
		id: 3,
	},
];
const Partners = () => {
  return (
		<>
			<div className="bg-whites sm:py-24 lg:py-32">
				<div className="mx-auto  py-20   h-80 shadow-md border border-gray-200  px-6 lg:max-w-7xl lg:px-8">
					<h2 className=" text-center mb-5 text-lg text-PrimaryColor  uppercase font-Poppins font-bold ">
						Our Proud Partners
					</h2>
					<div className="grid grid-cols-3  lg:grid lg:grid-cols-3">
						{features.map((feature) => (
							<div key={feature.id}>
								<div>
									<div className="flex  items-center justify-center rounded-xl ">
										<img
											className="aspect-w-5 aspect-h-5 sm:aspect-w-3 sm:aspect-h-4"
											src={feature.Image}
											alt=""
										/>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
          </div>
          
          {/* BOARD MEMBERS COMPONENT */}
          <BoardMembers/>
		</>
	);
}

export default Partners

